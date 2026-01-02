if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressError = require("./utils/expressError");
const cors = require("cors");
const listings_router = require("./routes/listing_routes");
const reviews_router = require("./routes/review_routes");
const users_router = require("./routes/user_routes");
const session = require("express-session");
const MongoStoreObject = require("connect-mongo");
const {MongoStore} = MongoStoreObject;
const { createWebCryptoAdapter } = MongoStoreObject;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const dbUrl = process.env.ATLASDB_URL;

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 3600,
  cryptoAdapter: createWebCryptoAdapter({ secret: process.env.SECRET }),
})

const sessionOption = {
  store: store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() * 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors());
app.engine("ejs", ejsMate);
app.listen(port, () => {
  console.log("server is on at 8080");
});

const mongoose = require("mongoose");
async function main() {
  await mongoose.connect(dbUrl);
}
main()
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(session(sessionOption));
app.use(flash());

//configuring LocalStrategy
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//success variable for res.locals
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.failure = req.flash("failure");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

//listing routes
app.use("/listings", listings_router);

//review routes
app.use("/listing/:id/reviews", reviews_router);

//user routes
app.use("/user", users_router);

// unmatched request
app.use((req, res, next) => {
  next(new expressError(404, "page not found!"));
});

//error handling middleware
app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong" } = err;
  res.status(status).render("errorEJS/error.ejs", { message });
});

