// Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

// Fix marker icon
let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {

  const [listOfRegistration, setListOfRegistration] = useState([]);
  const {userProfile} = useContext(AuthContext);

  const filteredVerifiedRegistration = listOfRegistration.filter(registration => registration.status === "verified");

   useEffect(() => {
        const fetchBusinessRegistration = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/fetch-seller-registration`);
                console.log(res.data.message, res.data.registrations);
                setListOfRegistration(res.data.registrations);
            } catch (error) {
                console.error("Error fetching business registration:", error);
            }
        };
        fetchBusinessRegistration();
        
    }, [userProfile?.accountId]);

  return (
    <div className="h-full w-full z-0 relative">
      <MapContainer
        center={[14.5824, 120.9937]}
        zoom={10}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        />
        
        {filteredVerifiedRegistration.map((registration) => (
          <Marker key={registration.businessId} position={[Number(registration.latitude), Number(registration.longitude)]}>
          <Popup>{registration.businessName}</Popup>
          </Marker>
        ))}

        
        
      </MapContainer>
    </div>
  );
};

export default Map;

