import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const PlayerPage = () => {
  return (
    <div className="player-page">
      <Topbar />
      <Sidebar />
      {/* <Navbar /> */}
    </div>
  );
};

export default PlayerPage;
