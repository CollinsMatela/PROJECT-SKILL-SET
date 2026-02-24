import React from "react";
import Map from "../Components/Map";
import MapNavigation from "../Components/MapNavigation";
import LeftSidebar from "../Components/LeftSidebar";

export default function MapPage() {
  return (
    <section className="relative h-screen w-full bg-white justify-end items-center flex flex-col ">
      <MapNavigation/>
      <Map /> {/* map behind */}
      <LeftSidebar/>
    </section>
  );
}
