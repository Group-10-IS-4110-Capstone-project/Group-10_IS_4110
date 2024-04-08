import React, { useEffect, useState } from 'react'
import "./Feed.css"

export default function Feed() {

    const [content, setContent] = useState([]);

    useEffect(() => {
        // Fetch content from the backend when the component mounts
        fetchContent();
      }, []);

      const fetchContent = async () => {
        try {

          const response = await fetch("http://localhost:3001/content/getAllcontent"); // Adjust the endpoint URL as per your backend route
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setContent(data.content);
          } else {
            console.error('Failed to fetch content');
          }
        } catch (error) {
          console.error('Error fetching content:', error);
        }
      };

  return (
    <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container">
<div className="col-md-7">

    {/* <div className="social-feed-box">

        <div className="pull-right social-action dropdown">
            <button data-toggle="dropdown" className="dropdown-toggle btn-white">
                <i class="fa fa-angle-down"></i>
            </button>
            <ul className="dropdown-menu m-t-xs">
                <li><a href="#">Config</a></li>
            </ul>
        </div>
        <div className="social-avatar">
            <a href="" className="pull-left">
                <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
            </a>
            <div className="media-body">
                <a href="#">
                    Andrew Williams
                </a>
                <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
            </div>
        </div>
        <div className="social-body">
            <p>
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Packages and web page editors now use Lorem Ipsum as their
                default model text.
            </p>

            <div className="btn-group">
                <button class="btn btn-white btn-xs"><i class="fa fa-thumbs-up"></i> Like this!</button>
                <button class="btn btn-white btn-xs"><i class="fa fa-comments"></i> Comment</button>
                <button class="btn btn-white btn-xs"><i class="fa fa-share"></i> Share</button>
            </div>
        </div>
        <div className="social-footer">
            <div className="social-comment">
                <a href="" class="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                    <a href="#">
                        Andrew Williams
                    </a>
                    Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                    <br/>
                    <a href="#" className="small"><i class="fa fa-thumbs-up"></i> 26 Like this!</a> -
                    <small class="text-muted">12.06.2014</small>
                </div>
            </div>

            <div class="social-comment">
                <a href="" className="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                    <a href="#">
                        Andrew Williams
                    </a>
                    Making this the first true generator on the Internet. It uses a dictionary of.
                    <br/>
                    <a href="#" className="small"><i class="fa fa-thumbs-up"></i> 11 Like this!</a> -
                    <small class="text-muted">10.07.2014</small>
                </div>
            </div>

            <div className="social-comment">
                <a href="" className="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                     <textarea class="form-control" placeholder="Write comment..."></textarea>
                </div>
            </div>

        </div>

    </div> */}

{content.map((item, index) => (
            <div className="social-feed-box" key={index}>
              {/* <div className="social-avatar">
                <a href="" className="pull-left">
                  <img alt="image" src={item.createdBy.userType === "ExpertModel" ? "https://bootdey.com/img/Content/avatar/avatar1.png" : "https://bootdey.com/img/Content/avatar/avatar2.png"} />
                </a>
                <div className="media-body">
                  <a href="#">
                    {item.createdBy.createdByName}
                  </a>
                  <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                </div>
              </div> */}
              <div className="social-body">
                <p>{item.Description}</p>
                <p>{item.Picture}</p>
                <img src={`http://localhost:3001/uploads/${item.Picture}`} alt="content image" className="img-responsive" />
                <div className="btn-group">
                  <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> Like this!</button>
                  <button className="btn btn-white btn-xs"><i className="fa fa-comments"></i> Comment</button>
                  <button className="btn btn-white btn-xs"><i className="fa fa-share"></i> Share</button>
                </div>
              </div>
            </div>
          ))}

    {/* <div className="social-feed-box">

        <div class="pull-right social-action dropdown">
            <button data-toggle="dropdown" className="dropdown-toggle btn-white">
                <i class="fa fa-angle-down"></i>
            </button>
            <ul className="dropdown-menu m-t-xs">
                <li><a href="#">Config</a></li>
            </ul>
        </div>
        <div className="social-avatar">
            <a href="" className="pull-left">
                <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
            </a>
            <div className="media-body">
                <a href="#">
                    Andrew Williams
                </a>
                <small class="text-muted">Today 4:21 pm - 12.06.2014</small>
            </div>
        </div>
        <div className="social-body">
            <p>
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Packages and web page editors now use Lorem Ipsum as their
                default model text.
            </p>
            <p>
                Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Packages and web page editors now use Lorem Ipsum as their
                default model text.
            </p>
            <img src="https://www.bootdey.com/image/650x280/FFB6C1/000000" class="img-responsive"/>
            <div class="btn-group">
                <button className="btn btn-white btn-xs"><i class="fa fa-thumbs-up"></i> Like this!</button>
                <button className="btn btn-white btn-xs"><i class="fa fa-comments"></i> Comment</button>
                <button className="btn btn-white btn-xs"><i class="fa fa-share"></i> Share</button>
            </div>
        </div>
        <div className="social-footer">
            <div className="social-comment">
                <a href="" className="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                    <a href="#">
                        Andrew Williams
                    </a>
                    Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                    <br/>
                    <a href="#" className="small"><i class="fa fa-thumbs-up"></i> 26 Like this!</a> -
                    <small className="text-muted">12.06.2014</small>
                </div>
            </div>

            <div className="social-comment">
                <a href="" className="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                    <a href="#">
                        Andrew Williams
                    </a>
                    Making this the first true generator on the Internet. It uses a dictionary of.
                    <br/>
                    <a href="#" className="small"><i class="fa fa-thumbs-up"></i> 11 Like this!</a> -
                    <small class="text-muted">10.07.2014</small>
                </div>
            </div>

            <div className="social-comment">
                <a href="" className="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                    <a href="#">
                        Andrew Williams
                    </a>
                    Making this the first true generator on the Internet. It uses a dictionary of.
                    <br/>
                    <a href="#" className="small"><i class="fa fa-thumbs-up"></i> 11 Like this!</a> -
                    <small className="text-muted">10.07.2014</small>
                </div>
            </div>

            <div className="social-comment">
                <a href="" className="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                    <textarea class="form-control" placeholder="Write comment..."></textarea>
                </div>
            </div>

        </div>

    </div> */}

    {/* <div className="social-feed-box">

        <div className="pull-right social-action dropdown">
            <button data-toggle="dropdown" class="dropdown-toggle btn-white">
                <i class="fa fa-angle-down"></i>
            </button>
            <ul className="dropdown-menu m-t-xs">
                <li><a href="#">Config</a></li>
            </ul>
        </div>
        <div className="social-avatar">
            <a href="" className="pull-left">
                <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
            </a>
            <div className="media-body">
                <a href="#">
                    Andrew Williams
                </a>
                <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
            </div>
        </div>
        <div className="social-body">
            <p>
                 Packages and web page editors now use Lorem Ipsum as their
                default model text. Page editors now use Lorem Ipsum as their
                default model text.
            </p>
            <div className="btn-group">
                <button className="btn btn-white btn-xs"><i class="fa fa-thumbs-up"></i> Like this!</button>
                <button className="btn btn-white btn-xs"><i class="fa fa-comments"></i> Comment</button>
                <button className="btn btn-white btn-xs"><i class="fa fa-share"></i> Share</button>
            </div>
        </div>
        <div className="social-footer">


            <div className="social-comment">
                <a href="" className="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                    <a href="#">
                        Andrew Williams
                    </a>
                    Making this the first true generator on the Internet. It uses a dictionary of.
                    <br/>
                    <a href="#" className="small"><i class="fa fa-thumbs-up"></i> 11 Like this!</a> -
                    <small className="text-muted">10.07.2014</small>
                </div>
            </div>

            <div className="social-comment">
                <a href="" className="pull-left">
                    <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </a>
                <div className="media-body">
                    <textarea className="form-control" placeholder="Write comment..."></textarea>
                </div>
            </div> */}
        {/* </div> */}
    {/* </div> */}
</div>
</div>
    </div>
  )
}
