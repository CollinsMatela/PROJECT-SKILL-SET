import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";


const LocationPicker = () => {
    const [position, setPosition] = useState(null);
    const ClickPosition = ({setPosition}) => {
          useMapEvents({ click(e) {setPosition({lat: e.latlng.lat, lng: e.latlng.lng})}
        })
    return null;
    }

    return(
        <div >
            
            <h3 className="text-gray-400 text-lg">Click your exact location on the map</h3>
            {position && (<>
             <div className="bg-gray-100 w-full rounded-xl p-2 mb-2">
                <h1 className="text-blue-500 text-sm font-bold">Selected Coordinates:</h1>
                <h1 className="text-gray-400 text-sm font-bold">Latitude: {position.lat} | Longitude: {position.lng}</h1>
             </div>
             </>)}
            <MapContainer center={[14.5995, 120.9842]} zoom={13} style={{ height: "400px", width: "800px" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <ClickPosition setPosition={setPosition}/>
                {position && (<Marker position={[position.lat, position.lng]}/>)}
            </MapContainer>
            
            
             
        </div>
    )
}

export default LocationPicker;