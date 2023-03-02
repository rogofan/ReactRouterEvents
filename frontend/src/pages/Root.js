import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import React from "react";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
