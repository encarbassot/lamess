import { Link } from "react-router-dom";

import imgWorldBg from "../../assets/backgrounds/bw-map.jpeg"
import imgStaffBcn from "../../assets/images/personal.png"
import imgStaffMad from "../../assets/images/personal.png"

import "./CitySelector.css"  


export default function CittySelector() {




  
  const worldBg = {
    background:`linear-gradient(rgba(244, 241, 234, 0.8), rgba(244, 241, 234, 0.8)),    url('${imgWorldBg}')`,
  }
  
  return (<>
    <div className="CitySelector" style={worldBg}>
  
      <img className="staff bcn" src={imgStaffBcn} alt="staff"/>
      <img className="staff mad" src={imgStaffMad} alt="staff"/>
      
      <div className="text">
        <h1>SOMOS <br/><span>LA MESS</span></h1>
        <p>Una empresa de transporte sostenible en Barcelona.</p>
        <div className="center">
          <Link to="/nosotros" className="button">Conocenos</Link>
        </div>
      </div>
    
      <span className="separator"></span>

      <Link className="button" to={"madrid"} ><b>Madrid</b></Link>
      <Link className="button" to={"barcelona"} ><b>Barcelona</b></Link>
    </div>
    
    </>)

}