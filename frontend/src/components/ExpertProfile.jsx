import React, { useEffect, useState } from 'react'
import useAuth from "./UseAth";
import { useNavigate } from "react-router-dom";

export default function ExpertProfile() {
  const isAuthenticated = useAuth();
  const userid = localStorage.getItem("userid");
  const navigate = useNavigate();

  const [expertData, setExpertData] = useState({
    Name: "",
    jobField: "",
    workExperience: "",
    bio: "",
    profilePic: "",
  });

  const [img,setimg] = useState("");

  const fetchData = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        // Handle the case where the token is not available
        console.log("No token available");
        return;
      }
      const response = await fetch(
        `http://localhost:3001/expert/experts/${userId}`
      );

      const data = await response.json();

      setExpertData({
        Name: data.Name || "",
        jobField: data.jobFeild || "",
        workExperience: data.workExperience || "",
        bio: data.bio || "",
        profilePic: `http://localhost:3001/uploads/${data.profilePic}` || "https://bootdey.com/img/Content/avatar/avatar7.png",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    if (isAuthenticated == null) return;

    if (isAuthenticated == false) {
      // Handle unauthorized access, e.g., redirect to login page
      navigate("/login");
      return;
    }
    fetchData(userid);
  }, [isAuthenticated]);

  const handleInputChange = (event) => {
    // Handle input changes if needed
    const { name, value } = event.target;
    setExpertData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setimg(file);
    
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    try {
      
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token available");
        return;
      }

      const formData = new FormData();
      formData.append("profilePic", img);
      formData.append("id", userid);
      console.log(formData)

      const response = await fetch("http://localhost:3001/upload/uploadpicex", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      // console.log(data)

      if (response.ok) {
        setExpertData((prevData) => ({
          ...prevData,
          profilePic: "http://localhost:3001/uploads/" + data.user.profilePic,
        }));
        
      } else {
        console.error("Error updating profile picture:", data.error);
      }
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission if needed
    try {
      const token = localStorage.getItem("token");
      console.log(userid)
      if (!token) {
        // Handle the case where the token is not available
        console.log("No token available");
        return;
      }
      const response = await fetch(
        `http://localhost:3001/expert/updateuser/${userid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(expertData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("User updated successfully:", data);
      } else {
        console.error("Error updating user:", data.error);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
    <div className="container bootstrap snippets bootdey">
      <h1 className="text-primary" style={{ color: "black" }}>
        Edit Profile
      </h1>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
          <img
                src={
                  expertData.profilePic
                    
                }
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              ></img>
              <input
                type="file"
                class="form-control"
                onChange={handleFileChange}
              />
              <button type="Submit" value={"submit"} onClick={handleUpload}>
                upload
              </button>
            
          </div>
        </div>

        <div className="col-md-9 personal-info">
          <h3>Personal info</h3>

          <form
            className="form-horizontal"
            role="form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label className="col-lg-3 control-label">Name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="Name"
                  value={expertData.Name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Job field:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="jobField"
                  value={expertData.jobField}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Work Experience:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="workExperience"
                  value={expertData.workExperience}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Bio:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="bio"
                  value={expertData.bio}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <button type="Submit" value={"submit"}>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
