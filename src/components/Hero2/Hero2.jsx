import "./Hero2.css"

// import imgWorldBg from "../../assets/backgrounds/world-map.png"
import imgWorldBg from "../../assets/backgrounds/bw-map.jpeg"
import imgStaff from "../../assets/images/personal.png"

export default function Hero2({}){


  const worldBg = {
    background:`linear-gradient(rgba(244, 241, 234, 0.8), rgba(244, 241, 234, 0.8)),    url('${imgWorldBg}')`,
  }
  
  return (<>
  
  <div className="Hero2 bottomSeparator2" style={worldBg}>

    <div className="overlay" data-aos="fade-left" />

    <img src={imgStaff} alt="personal" className="personal" data-aos="fade-left" data-aos-delay="200"/>


    <div className="text">
      <h1>SOMOS <br/><span>LA MESS</span></h1>
      <p>Una empresa de transporte sostenible en Barcelona.</p>
      
    </div>

  </div>
  
  </>)
}