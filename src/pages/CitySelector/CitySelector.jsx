import { Link, useNavigate } from "react-router-dom";

import imgWorldBg from "../../assets/backgrounds/bw-map.jpeg"
import imgStaffBcn from "../../assets/images/personal.png"
import imgStaffMad from "../../assets/images/personal.png"

import "./split.css"
import "./CitySelector.css"  
import { useState } from "react";


export default function CittySelector() {

  const navigate = useNavigate()


  const [leftClicked, setLeftClicked] = useState(false)
  const [rightClicked, setRightClicked] = useState(false)  

  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  const openWebDelayed = (url, delay = 600) => {

    console.log("Opening", url, "in", delay, "ms")

    setRightClicked(url === 'barcelona')
    setLeftClicked(url === 'madrid')

    setTimeout(() => {
      navigate(`/${url}`)
      console.log("Navigating to", url)
    }, delay)
  }

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



  // Construye la clase del contenedor con flags de hover
  const citySelectorClass =
  "CitySelector" +
  (leftHover ? " leftHover" : "") +
  (rightHover ? " rightHover" : "") +
  (leftClicked ? " leftClicked" : "") +
  (rightClicked ? " rightClicked" : "")



  
  return (<>
    <div         
    
      className={citySelectorClass}    
      onMouseLeave={() => {
        setLeftHover(false);
        setRightHover(false);
        setLeftClicked(false);
        setRightClicked(false);
      }}

    >





    
      <div className="text">
        <h1>SOMOS <br/><span>LA MESS</span></h1>
        <p>Una empresa de transporte sostenible.</p>
        <div className="center">
          <Link to="/nosotros" className="button" relative="path">Conocenos</Link>
        </div>
      </div>





      <div className="split">
        


        <div className="right"
          style={worldBg} 
          onMouseEnter={() => { setRightHover(true); setLeftHover(false); }}
          onMouseUp={()=>openWebDelayed("barcelona")}>  
        </div>
        
        <div 
          className="left"
          onMouseUp={()=>openWebDelayed("madrid")}         
          onMouseEnter={() => { setLeftHover(true); setRightHover(false); }}
        >
          <div className="wrapper" style={worldBg2}>             
            <h2 className="mad">MADRID</h2>
            <img className="staff mad" src={imgStaffMad} alt="staff"/>

          </div>
        </div>

  
  
  
  
      </div>



      <div className="bcnElements">
        <h2 className="bcn">Barcelona</h2>
        <img className="staff bcn" src={imgStaffBcn} alt="staff"/>
      </div>











    </div>
    
  </>)

}