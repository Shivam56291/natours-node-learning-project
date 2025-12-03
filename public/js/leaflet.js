/* eslint-disable */

const displayMap = (locations) => {
  const map = L.map('map', { scrollWheelZoom: false });

  // Load OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  const bounds = L.latLngBounds([]);

  locations.forEach((loc) => {
    const coords = [loc.coordinates[1], loc.coordinates[0]];

    const icon = L.divIcon({
      className: 'marker',
      html: `<div class="marker-pin"></div>`,
      iconSize: [30, 40],
      iconAnchor: [15, 40],
      popupAnchor: [0, -35],
    });

    const marker = L.marker(coords, { icon }).addTo(map);

    const popup = L.popup({
      autoClose: false,
      closeOnClick: false,
      closeButton: true,
      className: 'map-popup',
      offset: [0, -10],
    }).setContent(`<p><strong>Day ${loc.day}</strong>: ${loc.description}</p>`);

    marker.bindPopup(popup).openPopup();

    bounds.extend(coords);
  });

  map.fitBounds(bounds, {
    padding: [100, 100],
    animate: false,
  });

  // Intersection Observer to trigger zoom animation only when map is visible
  const mapElement = document.getElementById('map');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animation only once
          const currentCenter = map.getCenter();
          const currentZoom = map.getZoom();
          map.setView(currentCenter, currentZoom - 3, { animate: false });

          setTimeout(() => {
            map.flyToBounds(bounds, {
              padding: [100, 100],
              duration: 2.5,
              easeLinearity: 0.25,
            });
          }, 200); // small delay

          observer.unobserve(mapElement); // stop observing after animation
        }
      });
    },
    { threshold: 0.3 } // trigger when 30% of map is visible
  );

  observer.observe(mapElement);
};

// Auto load map from data
const mapBox = document.getElementById('map');
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}
