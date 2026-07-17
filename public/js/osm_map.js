  // Create map
  const map = L.map('map').setView([28.6139, 77.2090], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Add a marker
  L.marker([28.6139, 77.2090])
    .addTo(map)
    .bindPopup("Delhi")
    .openPopup(); 