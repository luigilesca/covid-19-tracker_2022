import React from "react";

import { Navbar, Footer } from "../../components";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Dashboard;
