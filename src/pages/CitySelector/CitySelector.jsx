import { Link, useNavigate } from "react-router-dom";

import imgWorldBg from "../../assets/backgrounds/bw-map.jpeg"
import imgStaffBcn from "../../assets/images/personal.png"
import imgStaffMad from "../../assets/images/personal.png"

import "./split.css"
import "./CitySelector.css"  
import { useState } from "react";
import useOpenWebDelayed from "../../utils/useOpenWebDelayed";


export default function CittySelector() {
  const navigate = useNavigate()

  const [leftClicked, setLeftClicked] = useState(false)
  const [rightClicked, setRightClicked] = useState(false)
  const openWebDelayed = useOpenWebDelayed(setLeftClicked, setRightClicked)



  const worldBg = {
    background: `
      linear-gradient(
        rgba(139, 195, 74, 0.45),   /* verde lima suave */
        rgba(56, 142, 60, 0.45)     /* verde bosque */
      ),
      url('${imgWorldBg}')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  const worldBg2 = {
    background: `
      linear-gradient(
        rgba(102, 187, 106, 0.2),
        rgba(27, 94, 32, 0.25)
      ),
      url('${imgWorldBg}')
    `,
    backgroundSize: '110% 110%',
    backgroundPosition: 'center 10px', // or "center -10px"
  };

  return (<>
    <div className="CitySelector">
      {/* <div className="background bcn"></div> */}

      <div className="text">
        <h1>SOMOS <br/><span>LA MESS</span></h1>
        <p>Una empresa de transporte sostenible.</p>
        <div className="center">
          <Link to="/nosotros" className="button">Conocenos</Link>
        </div>
      </div>

      {/* 
      
    
      <span className="separator"></span>

      
    <div className="background mad"></div> */}




        <div className="split">
          
          <div className={"right"+(rightClicked?" click":"")} to={"barcelona"} style={worldBg} onMouseUp={()=>openWebDelayed("barcelona")}>  
        
            <h2 className="bcn" ><b>Barcelona</b></h2>
            <img className="staff bcn" src={imgStaffBcn} alt="staff"/>

          </div>
          
          <div className={"left"+(leftClicked?" click":"")} to={"madrid"} onMouseUp={()=>openWebDelayed("madrid")}>
            <div className="wrapper" style={worldBg2}> 
              
            <h2 className="mad" ><b>Madrid</b></h2>
            <img className="staff mad" src={imgStaffMad} alt="staff"/>

              
            </div>
          </div>

        </div>

      </div>
    
    </>)

}