

import "./Hero.css"

import imgOpen from "../../../assets/images/titles/OPEN.png"
import LogoSpray from "../../../assets/logo/logo-spray.svg"
import img3 from "../../../assets/images/foto-3.webp"


export default function Hero(){

  const bgHeroStyle = {
    backgroundImage : `linear-gradient(#0008, #0008), url(${img3})`
  }


  return  <div className="Hero" style={bgHeroStyle}>

  <div className="HeroWrapper">
    <div>

    </div>
    <div className="info" data-aos="zoom-in">

      {/* <img src={LogoSpray} alt="" className="logo" /> */}
      <div className="column center">
        <img src={imgOpen} alt="" className="titleOpen" />
        <div>
          <p>SABADOS & DOMINGOS</p>
          <p>6:00 - 20:00</p>
        </div>
      </div>
    </div>
  </div>

</div>
}