import React from "react";
import Map from "../Components/Map";
import MapSideBar from "../Components/MapSideBar";
import LeftSidebar from "../Components/LeftSidebar";

export default function MapPage() {
  return (
    <section className="relative h-screen w-full bg-white justify-end items-center flex flex-col ">
      
        <Map /> {/* map behind */}
      
      <MapSideBar/>
      <LeftSidebar/>
    </section>
  );
}
