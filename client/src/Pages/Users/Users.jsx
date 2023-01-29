import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1
          style={{
            fontWeight: "500",
            color: "rgb(151 40 3)",
            fontFamily: "sans-serif",
          }}
        >
          Users
        </h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
