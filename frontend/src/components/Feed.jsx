import React, { useEffect, useState } from "react";
import "./Feed.css";

export default function Feed() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetch content from the backend when the component mounts
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/content/getAllcontent"
      ); // Adjust the endpoint URL as per your backend route
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // setContent(data.content);
        setContent(data.content.reverse());
      } else {
        console.error("Failed to fetch content");
      }
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="col-md-7">
          

          {content.map((item, index) => (
            <div className="social-feed-box" key={index}>
              <div className="social-avatar">
                <a href="" className="pull-left">
                  {/* <img alt="image" src={item.createdBy.userType === "ExpertModel" ? "https://bootdey.com/img/Content/avatar/avatar1.png" : "https://bootdey.com/img/Content/avatar/avatar2.png"} /> */}
                </a>
                <div className="media-body">
                  <a href="#">{/* {item.createdBy.createdByName} */}</a>
                  <small className="text-muted">{item.updatedAt}</small>
                </div>
              </div>
              <div className="social-body">
                <p>{item.Subject}</p>
                <p>{item.Description}</p>
                <img
                  src={`http://localhost:3001/${item.Picture}`}
                  alt="content image"
                  className="img-responsive"
                />
                <div className="btn-group">
                  <button className="btn btn-white btn-xs">
                    <i className="fa fa-thumbs-up"></i> Like this!
                  </button>
                  <button className="btn btn-white btn-xs">
                    <i className="fa fa-comments"></i> Comment
                  </button>
                  <button className="btn btn-white btn-xs">
                    <i className="fa fa-share"></i> Share
                  </button>
                </div>
              </div>
            </div>
          ))}

         
        </div>
      </div>
    </div>
  );
}
