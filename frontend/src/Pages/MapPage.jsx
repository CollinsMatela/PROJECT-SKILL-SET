import React from "react";
import Map from "../Components/Map";
import MapSideBar from "../Components/MapSideBar";

export default function MapPage() {
  return (
    <div className="relative h-screen w-full bg-white">
      <Map /> {/* map behind */}
      <MapSideBar/>
    </div>
  );
}
