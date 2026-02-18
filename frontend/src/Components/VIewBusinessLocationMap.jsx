import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import PinPoint from '../Images/pin-point.svg';

// Fix marker icon
   // let DefaultIcon = L.icon({
    // iconUrl,
    // shadowUrl: iconShadow,
    // iconAnchor: [12, 41],
    // });

    // L.Marker.prototype.options.icon = DefaultIcon;




const ViewBusinessLocationMap = ({ businessLocation }) => {

    const { userProfile } = useContext(AuthContext);
 
    const PinIcon = L.icon({
    iconUrl: PinPoint,
    iconSize: [15, 15],
    className: "rounded-marker"
    });

    return(
        
        <div className='h-full w-full'>
            
            <MapContainer center={[Number(businessLocation.latitude), Number(businessLocation.longitude)]} zoom={15} className='rounded-xl'>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                    
                />
                <Marker position={[Number(businessLocation.latitude), Number(businessLocation.longitude)]} icon={PinIcon}>
                    <Popup>
                        {businessLocation.businessName}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
    }
export default ViewBusinessLocationMap;