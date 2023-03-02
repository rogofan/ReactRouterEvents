import { Outlet } from "react-router-dom";
import React from "react";
import EventsNavigation from "../components/EventsNavigation";
function RootLayoutNavigation() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayoutNavigation;
