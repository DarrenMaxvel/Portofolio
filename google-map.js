var map = L.map('map').setView([-6.145111, 106.753944], 12);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the new location
L.marker([-6.145111, 106.753944]).addTo(map)
    .bindPopup('Casa Jardin, Cluster Quin')
    .openPopup();