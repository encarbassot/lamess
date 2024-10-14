import "./index.css"

// import TextOverImage from "../../components/TextOverImage/TextOverImage.jsx"

import img9 from "../../assets/images/foto-9.webp"


import Hero2 from "./Hero2/Hero2"
import Hero from "./Hero/Hero"
import { Link } from "react-router-dom"
import Clients from "./Clients/Clients"
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production"

export default function Index(){

  const backgroundTarifas = {background:`url(${img9})`}


  return(<>
  
  <div className="PageIndex">

  <section className="HerosColumn">

    

    {/* SOMOS LA MESS */}
    <Hero2/>

    {/* OPEN EVERYDAY */}
    <Hero/> 
   
  </section>




  <div className="bannerTarifas" style={backgroundTarifas}>
    <div className="gradient">
      <div className="maxWidth">
        <div className="content">
          <h1>¡Descubre Nuestras Tarifas y Calcula Tu Envío!</h1>
          <p>Ofrecemos soluciones logísticas rápidas y sostenibles. Consulta nuestras tarifas por zonas y accede al calculador de precios personalizado.</p>
          <div className="row">
            <Link className="button" to={"calculate"} ><b>Calcular envío</b></Link>
            <HashLink className="button" to={"calculate#Tarifas"} ><b>Ver tarifas</b></HashLink>
          </div>


        </div>
      </div>
    </div>
  </div>




    <Clients/>



  </div>


  </>)
}

