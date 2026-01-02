const User = require("../models/user");
//signup user form
module.exports.signupForm = (req, res) => {
  res.render("users/signup.ejs");
};

//signup user
module.exports.signup = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        next(err);
      } else {
        req.flash("success", "welcome to Stayscape");
        res.redirect("/listings");
      }
    });
  } catch (e) {
    req.flash("failure", e.message);
    res.redirect("/user/signup");
  }
};

//login user form
module.exports.loginForm = (req, res) => {
  res.render("users/login.ejs");
};

//login user
module.exports.login = async (req, res) => {
  if (res.locals.originalUrl) {
    let originalPath = res.locals.originalUrl || "/listings";
    req.flash("success", "welcome back to Stayscape");
    res.redirect(originalPath);
  } else {
    originalPath = "/listings";
    req.flash("success", "welcome back to Stayscape");
    res.redirect(originalPath);
  }
};

//logout user
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    } else {
      req.flash("success", "logged out successfully");
      res.redirect("/listings");
    }
  });
};
