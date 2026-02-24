// Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import PinPoint from '../Images/pin-point.svg';
import defualtProfile from '../Images/default_profile.png';
import MapSideBar from './MapSideBar';
import { useNavigate } from 'react-router-dom';

// Fix marker icon
// let DefaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

const Pin = (profile) => L.icon({
  iconUrl: profile || defualtProfile,
  iconSize: [25, 25],
  iconAnchor: [15, 15],
  className: 'rounded-full border-2 border-black',
});

const Map = () => {

  const navigate = useNavigate();
  const [listOfRegistration, setListOfRegistration] = useState([]);
  const {userProfile} = useContext(AuthContext);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  const [selectedMarker, setSelectedMarker] = useState(null);

  const filteredVerifiedRegistration = listOfRegistration.filter(registration => registration.status === "verified");

  useEffect(() => {
       if(!navigator.geolocation) return alert("Geolocation is not supported!");

       const watchId = navigator.geolocation.watchPosition((position) => {setCurrentLocation({lat: position.coords.latitude, lng: position.coords.longitude})},
       (error) => {console.log("Watch Id Variable:", error)},
       {enableHighAccuracy: true, maximumAge: 0, timeout: 5000,});

       return () => {navigator.geolocation.clearWatch(watchId)}
  }, [])

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

    const ViewProfile = (accountId) => {
          navigate('/view-profile/' + accountId);
    }

  return (
    <div className="h-full w-full z-0 relative">
      <MapContainer
        center={[14.5824, 120.9937]}
        zoom={10}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentLocation && (
        <Marker position={[currentLocation.lat, currentLocation.lng]} icon={Pin(userProfile?.profile)}>
            <Popup>This is you!</Popup>
        </Marker>
        )}

        
        {filteredVerifiedRegistration.map((registration) => (

          <Marker key={registration.businessId} position={[Number(registration.latitude), Number(registration.longitude)]} icon={Pin(registration.userId === userProfile?.accountId ? userProfile?.profile : defualtProfile)} 
          eventHandlers={{click: () => {setSelectedMarker(registration); console.log("Marker clicked for account ID:", registration.userId)}}}>
              <Popup>
                <div className='w-50 space-y-2'>
                    <div className='w-full justify-start items-center flex gap-2'>
                      <img src={registration.userId === userProfile?.accountId ? userProfile?.profile : defualtProfile} className='h-12 w-12 rounded-full'/>
                      <div>
                        <h1 className='text-sm font-bold'>{registration.businessName}</h1>
                        <h1 className='text-xs text-gray-500'>Business Type: {registration.businessType}</h1>
                        <h1 className='text-md text-gray-500'>{registration.userId === userProfile?.accountId ? userProfile?.ratings : 0.0} <span className='text-yellow-500'>★</span></h1>
                      </div>
                    </div>

                    

                    <div className='w-full'>
                      <button className='bg-white border-1 border-b-4 border-black h-8 w-full rounded-md hover:-translate-y-1 justify-center items-center flex cursor-pointer transition-all duration-300 ease-in-out'>
                        <h1 className='text-black font-bold' onClick={() => ViewProfile(registration.userId)}>View Profile</h1>
                      </button>
                    </div>
                     
                </div>
              </Popup>
          </Marker>
 ))}
         {selectedMarker && <MapSideBar businessName={selectedMarker.businessName}
                                        businessType={selectedMarker.businessType} 
                                        businessRating={selectedMarker.userId === userProfile?.accountId ? userProfile?.ratings : 0.0}/>
         }

        
        
      </MapContainer>
    </div>
  );
};

export default Map;

