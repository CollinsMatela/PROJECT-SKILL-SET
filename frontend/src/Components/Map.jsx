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
import ReviewModal from './ReviewModal';
import LeftSidebar from './LeftSidebar';

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
  className: 'rounded-full border-2 border-emerald-500',
});

const Map = () => {

  const navigate = useNavigate();
  const [listOfRegistration, setListOfRegistration] = useState([]);
  const [listOfReviews, setListOfReviews] = useState([]);
  const {userProfile, postings} = useContext(AuthContext);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const filteredAllVerified = listOfRegistration.filter(registration => registration.status === "verified");
  const filteredService = listOfRegistration.filter(registration => registration.status === "verified" && registration.businessType === "service");
  const filteredFood = listOfRegistration.filter(registration => registration.status === "verified" && registration.businessType === "food");
  const filteredRetail = listOfRegistration.filter(registration => registration.status === "verified" && registration.businessType === "retail");

  const [serviceClick, setServiceClick] = useState(false);
  const [foodClick, setFoodClick] = useState(false);
  const [retailClick, setRetailClick] = useState(false);

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
    useEffect(() => {
        try {
            const fetchReviews = async () => {
             const res = await axios.get(`${import.meta.env.VITE_API_URL}/fetch-review/`);
             console.log(res.data.message);
             console.log(res.data.reviews.length);
             setListOfReviews(res.data.reviews);
        }
        fetchReviews();
        } catch (error) {
            console.log(error);
        }
    }, [])

  return (
    <div className="h-full w-full z-0 relative">
      <LeftSidebar/>
      <nav className="fixed z-[900] top-0 h-15 w-full justify-end items-center flex px-2">
            <ul className="flex gap-2">
                <li className={`${serviceClick ? "bg-gray-300" : "bg-white"} h-8 w-20 rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100 text-xs`} onClick={() => {setServiceClick(prev => !prev), setFoodClick(false), setRetailClick(false)}}>Service</li>
                <li className={`${foodClick ? "bg-gray-300" : "bg-white"} h-8 w-20 rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100 text-xs`} onClick={() => {setFoodClick(prev => !prev), setServiceClick(false), setRetailClick(false)}}>Foods</li>
                <li className={`${retailClick ? "bg-gray-300" : "bg-white"} h-8 w-20 rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100 text-xs`} onClick={() => {setRetailClick(prev => !prev), setFoodClick(false), setServiceClick(false)}}>Retail</li>
                <li className="bg-white h-8 w-20 rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100 text-xs" onClick={() => alert("Ongoing!")}>Filter</li>
            </ul>
        </nav>
      <MapContainer
        center={[14.5824, 120.9937]}
        zoom={10}
        zoomControl={false}
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
        {/*All Verified Render*/}
        {!serviceClick && !foodClick && !retailClick && filteredAllVerified.map((registration) => (
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
        {/*Service Filter Render*/}
        {serviceClick && filteredService.map((registration) => (
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
         {/*Food Filter Render*/}
         {foodClick && filteredFood.map((registration) => (
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
         {/*Retail Filter Render*/}
         {retailClick && filteredRetail.map((registration) => (
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

         {selectedMarker && <MapSideBar businessDetail={selectedMarker} ListofReviews={listOfReviews}/>}

        
        
      </MapContainer>
    </div>
  );
};

export default Map;

