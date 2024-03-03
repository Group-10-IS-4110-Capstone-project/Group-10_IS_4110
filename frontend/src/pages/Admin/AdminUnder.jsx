import React from "react"; 
import './AdminUnder.css'
import Button from "react-bootstrap/Button";
import white from "../../assets/white_background.jpg";

function AdminUnder() {
    return (

<div className="admin-page">

    <div className="overlap-group-wrapper">

        <div className="overlap-group">

            <div className="group">

                <div className="rectangle" />
A
                <div className="div" />

            </div>

                <div className="under">
               
                    Undergraduate
                    </div>


                <div className="expert">
                <a href="http://localhost:3000/AdminEx">
                Expert
                  </a>
                    
                
                </div>

                <div className="chat">Chat</div>

                <div className="Cont">Content</div>

                <div className="text-wrapper-5">Undergraduate</div>

                <img

                className="line"

                alt="Line"

                src={white}/>

                <div className="rectangle-2" />

                <div className="rectangle-3" />

                <div className="rectangle-4" />

                <div className="rectangle-5" />

                <div className="rectangle-6" />

                <div className="rectangle-7" />

                <div className="text-wrapper-6">
                <Button className="butn" variant="primary" >
                Remove
                </Button>{" "}
        
                    
                    </div>

                <div className="text-wrapper-7">
               
            
                <Button className="butn" variant="primary" >
                Remove
                </Button>{" "}
                    </div>

                <div className="text-wrapper-8"> <Button className="butn" variant="primary" >
                Remove
                </Button>{" "}</div>

                <div className="text-wrapper-9"> <Button className="butn" variant="primary" >
                Remove
                </Button>{" "}</div>

                <div className="text-wrapper-10"> <Button className="butn" variant="primary" >
                Remove
                </Button>{" "}</div>

                <div className="rectangle-8" />

                <div className="rectangle-9" />

                <div className="rectangle-10" />

                <div className="rectangle-11" />

                <div className="rectangle-12" />

                <div className="rectangle-13" />

                <div className="text-wrapper-11">
                    View users
                </div>

                <div className="text-wrapper-12">A.B.C. Silva</div>

                <div className="text-wrapper-13">A.B.C. Silva</div>

                <div className="text-wrapper-14">A.B.C. Silva</div> 
                <div className="text-wrapper-15">A.B.C. Silva</div>

                <div className="text-wrapper-16">A.B.C. Silva</div>

                <div className="add-users"><Button className="butn" variant="primary" >
                Add users
                </Button>{" "}</div>

                </div>

            </div>

            </div>
);
};

export default AdminUnder