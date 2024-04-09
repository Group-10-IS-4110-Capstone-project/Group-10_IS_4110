import React, { useEffect, useState } from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import "./UnderNav_Bar.css";
import { Link } from "react-router-dom";

export default function ExpertNav_Bar() {
  const userId = localStorage.getItem("userid");
  const [expertDataPic, setExpertDataPic] = useState({
    profilePic: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token available");
          return;
        }
        const response = await fetch(
          `http://localhost:3001/expert/experts/${userId}`
        );
        const data = await response.json();
        console.log(data);
        setExpertDataPic({
          profilePic: data.profilePic
            ? `http://localhost:3001/uploads/${data.profilePic}`
            : "https://bootdey.com/img/Content/avatar/avatar7.png",
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleLogout = () => {
    // Remove token and user ID from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userid");

    // Navigate to login page
    window.location.href = "/login";
  };
  return (
    <div>
      <div className="user-navbar">
        <img
          src={expertDataPic.profilePic}
          alt=""
          className="nav-icon-1"
        />
        <div className="user-navbar-1">
          <Link to={"/homeEx"}>
            <img src={icon2} alt="" className="nav-icon2" />
          </Link>
          <Link to={"/chatEx"}>
            <img src={icon3} alt="" className="nav-icon2" />
          </Link>
          <Link to={"/feedEx"}>
            <img src={icon4} alt="" className="nav-icon2" />
          </Link>
          <Link to={"/profileEx"}>
            <img src={icon5} alt="" className="nav-icon2" />
          </Link>
        </div>
        <button className="nav-logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
