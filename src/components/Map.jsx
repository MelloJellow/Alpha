import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [locations, setLocations] = useState([]);

  // Fetch locations from backend
  useEffect(() => {
    fetch("http://localhost:3500/api/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  return (
    <MapContainer 
      center={[55.3781, -3.4360]} // Centered on the UK
      zoom={6} 
      style={{ width: "100%", height: "500px", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Map through locations and add markers */}
      {locations.map((location) => (
        <Marker key={location._id} position={[location.lat, location.lon]}>
          <Popup>{location.university}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
