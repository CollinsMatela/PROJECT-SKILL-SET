import React from "react";
import Map from "../Components/Map";
import LeftSideBar from "../Components/LeftSidebar";

export default function MapPage() {
  return (
    <div className="relative h-screen w-full bg-white">
      <Map /> {/* map behind */}
      <LeftSideBar/>
    </div>
  );
}
