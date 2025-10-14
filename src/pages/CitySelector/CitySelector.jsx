import { Link } from "react-router-dom";

import imgWorldBg from "../../assets/backgrounds/bw-map.jpeg"
import imgStaffBcn from "../../assets/images/personal.png"
import imgStaffMad from "../../assets/images/personal.png"

import "./split.css"
import "./CitySelector.css"  


export default function CittySelector() {




  
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




        <div class="split">
          
          <div class="right" style={worldBg}>  
        
            <Link className="bcn" to={"barcelona"} ><b>Barcelona</b></Link>
            <img className="staff bcn" src={imgStaffBcn} alt="staff"/>

          </div>
          
          <div class="left">
            <div class="wrapper" style={worldBg2}> 
              
            <Link className="mad" to={"madrid"} ><b>Madrid</b></Link>
            <img className="staff mad" src={imgStaffMad} alt="staff"/>

              
            </div>
          </div>

        </div>

      </div>
    
    </>)

}