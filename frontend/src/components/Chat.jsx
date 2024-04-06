import React, { useEffect, useState } from "react";
import "./Chat.css";

export default function () {
  const [experts, setExperts] = useState([]);
  const [selectedExpert, setSelectedExpert] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/expert/")
      .then((res) => res.json())
      .then((res) => setExperts(res));
  }, []);

  const handleExpertClick = (expert) => {
    setSelectedExpert(expert);
    fetchExpertDetails(expert._id);
  };

  const fetchExpertDetails = async (expertId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/expert/experts/${expertId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch expert details");
      }
      const expertDetails = await response.json();
      setSelectedExpert({
        ...selectedExpert,
        profilePic: expertDetails.profilePic,
        Name: expertDetails.Name,
      });
    } catch (error) {
      console.error("Error fetching expert details:", error);
    }
  };

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <div id="plist" className="people-list">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="bi bi-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
                <ul className="list-unstyled chat-list mt-2 mb-0">
                  {experts.map((expert) => (
                    <li
                      key={expert._id}
                      className={`clearfix ${
                        selectedExpert === expert ? "selected" : ""
                      }`}
                      onClick={() => handleExpertClick(expert)}
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">{expert.Name}</div>
                        <div className="status">
                          {" "}
                          <i className="fa fa-circle offline"></i> left 7 mins
                          ago{" "}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="chat">
                <div className="chat-header clearfix">
                  <div className="row">
                    <div className="col-lg-6">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#view_info"
                      >
                        <img
                          src={selectedExpert ? selectedExpert.profilePic : ""}
                          alt="avatar"
                        />
                      </a>
                      <div className="chat-about">
                        <h6 className="m-b-0">
                          {selectedExpert ? selectedExpert.Name : ""}
                        </h6>
                        {/* Other details if available */}
                      </div>

                      {/* <div className="chat-about">
                        <h6 className="m-b-0">
                          {selectedExpert ? selectedExpert.Name : ""}
                        </h6>
                        <small>
                          Last seen:{" "}
                          {selectedExpert ? selectedExpert.LastSeen : ""}
                        </small>
                      </div> */}
                    </div>
                    <div className="col-lg-6 hidden-sm text-right">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i class="bi bi-camera"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-primary"
                      >
                        <i class="bi bi-images"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-info"
                      >
                        <i class="bi bi-gear"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-warning"
                      >
                        <i class="bi bi-question-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="chat-history">
                  <ul className="m-b-0">
                    <li className="clearfix">
                      <div className="message-data text-right">
                        <span className="message-data-time">
                          10:10 AM, Today
                        </span>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="avatar"
                        />
                      </div>
                      <div class="message other-message float-right">
                        {" "}
                        Hi Aiden, how are you? How is the project coming along?{" "}
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="message-data">
                        <span className="message-data-time">
                          10:12 AM, Today
                        </span>
                      </div>
                      <div className="message my-message">
                        Are we meeting today?
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="message-data">
                        <span className="message-data-time">
                          10:15 AM, Today
                        </span>
                      </div>
                      <div className="message my-message">
                        Project has been already finished and I have results to
                        show you.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat-message clearfix">
                  <div className="input-group mb-0">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i class="bi bi-send"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter text here..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
