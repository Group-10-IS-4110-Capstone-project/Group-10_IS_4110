import React from "react";

import './AdminContent.css'
import Button from "react-bootstrap/Button";
import white from "../../assets/white_background.jpg";
import AddC from "../../assets/AddC_Vector.png";
import Crea from "../../assets/Creat_Vector.png";
import Edi from "../../assets/EditC_Vector.png";
import Dele from "../../assets/Dele_Vector.png";
import publ from "../../assets/Publi_Vector.png";
import delead from "../../assets/DeleAdd_Vector.png";



const AdminContent = () => {
  return (
    <div className="admin-page">

    <div className="overlap-group-wrapper">

        <div className="overlap-group">

            <div className="group">

                <div className="rectangle" />

                <div className="div" />

            </div>

                <div className="under">
                  
                <a href="http://localhost:3000/AdminUnder">
                Undergraduate
                  </a>
                    
                    </div>


                <div className="expert">
                <a href="http://localhost:3000/AdminEx">
                Expert
                  </a>
                    
                
                </div>

                <div className="chat">Chat</div>

                <div className="Cont">Content</div>

                <div className="exp">Content</div>

                <img

                className="line"

                alt="Line"

                src={white}/>




        <div className="group33">
                <div className="penSquare">
                    <img
                        alt=""
                        className="vector"
                        src={AddC}
                    />
                </div>

                <p className="addContent">
                Add Content
                <br />
                </p>
      </div>
      
      <div className="group36">

                

                <p className="publishContent">
                Publish Content
                <br />
                </p>

      </div>

      <div className="group39">

        <p className="editContent">Edit content</p>
      </div>
      <div className="group37">

        <p className="createAdvertisement">
          Create Advertisement
          <br />
        </p>
      </div>
      <div className="group35">

        <p className="deleteContent">
          Delete Content
          <br />
        </p>
      </div>
      <div className="group38">

        <div className="rectangle125" />
        <p className="deleteAdvertisement">
          Delete Advertisement
          <br />
        </p>
      </div>
      
      <img
        alt=""
        className="vectorTwo"
        src={Dele}
      />
      <img
        alt=""
        className="vectorThree"
        src={publ}
      />
      <img
        alt=""
        className="vectorFour"
        src={Crea}
      />
      <img
        alt=""
        className="vectorFive"
        src={delead}
      />
      <img
        alt=""
        className="vectorSix"
        src={Edi}
      />
              

               

     
                

               
                </div>

            </div>

            </div>
  );
};

export default AdminContent