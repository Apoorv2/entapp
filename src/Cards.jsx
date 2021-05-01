import React from "react";
import {useState} from "react";
import Popup from "./components/popup.js";

function Card(props){
    console.log(props);
    const [buttonpopup ,setbuttonpopup]=useState(false);
    return (
      <>
          <div className="cards">
          <main>
              <div className="card">
                  
                  <img src={props.imgsrc} alt="mypic" className="card_img" />
                  
                  <div  className="card_info">
                 
                  <h5 className="card_catagory">{props.title}</h5>
                
                  <h3 className="card_title">{props.sname}</h3>
                  <a href={props.link} target="blank">
                   <button>Watch Now</button>
                  </a>
                
                  <button className="card_social" onClick={()=>setbuttonpopup(true)}>Share</button>
                  </div> 
              </div>
              </main>
              <Popup className="crad-btn" trigger={buttonpopup} setTrigger={setbuttonpopup}>
                    <h3 style={{backgroundColor:"white"}}>File Shared!</h3>
              </Popup>
          </div>
      </>
    );
}

export default Card;