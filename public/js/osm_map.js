  // Create map
  const map = L.map('map').setView([window.lat,window.lon], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  console.log(window.location);
  // Add a marker
  L.marker([window.lat,window.lon])
    .addTo(map)
    .bindPopup(`<h6>${window.placeName}</h6>`)
    .openPopup();