import "./HeroTarifas.css"

import img1 from "../../../assets/images/foto-1.webp"

export default function HeroTarifas(){

  const bg = {background:`linear-gradient(#0005, #0005), url(${img1})`}

  return (
    <div className="HeroTarifas">
      <div className="bg" style={bg}>
        <div className="text">
          <h1>Nuestras Tarifas</h1>
        </div>
      </div>
    </div>
  )
}