const axios = require("axios");

module.exports.getCoordinates = async(location) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`;

  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "Stayscape_dev" },
    });
    return response.data[0];
  } catch (error) {
    next(error);
  }
};
