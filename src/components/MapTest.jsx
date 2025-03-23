import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  .leaflet-routing-container {
    display: none !important; /* Hide directions panel */
  }
`;

const RouteMap = () => {
  useEffect(() => {
    const map = L.map("map").setView([53.4084, -2.9916], 6); // Centered on Liverpool

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // 🔹 Start & End Locations
    const start = { lat: 53.4084, lon: -2.9916, name: "University of Liverpool" };
    const end = { lat: 53.8013, lon: -1.5486, name: "University of Leeds" };

    //  Custom marker icon
    const markerIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/64/684/684908.png", // 📍 Pin icon
      iconSize: [32, 32], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32],
    });

    // 🔹 Add markers with popups
    L.marker([start.lat, start.lon], { icon: markerIcon })
      .addTo(map)
      .bindPopup(`<b>${start.name}</b>`)
      .openPopup();

    L.marker([end.lat, end.lon], { icon: markerIcon })
      .addTo(map)
      .bindPopup(`<b>${end.name}</b>`)
      .openPopup();

    // 🚀 Create route line
    L.Routing.control({
      waypoints: [L.latLng(start.lat, start.lon), L.latLng(end.lat, end.lon)],
      routeWhileDragging: true,
      createMarker: () => null, // Removes default route markers
      lineOptions: {
        styles: [{ color: "blue", weight: 5, opacity: 0.7 }],
      },
      show: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      draggableWaypoints: false,
    }).addTo(map);

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return <MapContainer id="map" />;
};

export default RouteMap;
