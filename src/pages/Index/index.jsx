import "./index.css"

// import TextOverImage from "../../components/TextOverImage/TextOverImage.jsx"

import img1 from "../../assets/images/foto-1.webp"
import img2 from "../../assets/images/foto-2.webp"
import img3 from "../../assets/images/foto-3.webp"
import img4 from "../../assets/images/foto-4.webp"
import img5 from "../../assets/images/foto-5.webp"
import img6 from "../../assets/images/foto-6.webp"
import img7 from "../../assets/images/foto-7.webp"
import img8 from "../../assets/images/foto-8.webp"
import img9 from "../../assets/images/foto-9.webp"


import Hero2 from "../../components/Hero2/Hero2"
import Hero from "../../components/Hero/Hero"
import { Link } from "react-router-dom"
import ImageText from "../../components/content/ImageText/ImageText"
import Slider from "../../components/Slider/Slider"
import Clients from "../../components/Clients/Clients"
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


    <Slider>

    <ImageText image={img4}>
      <div data-aos="fade-left" className="Text">
        <div className="content">
          <h2><b>Compromiso</b> y <b>Servicio</b></h2>
          <p>Estamos comprometidos en ofrecer un servicio <b>rápido</b> y <b>eficiente</b>, llevando todo tipo de <b>productos</b>, desde <b>alimentos frescos</b> hasta <b>bicicletas</b> y <b>documentos</b>. Nos especializamos en <b>entregas directas</b> en la ciudad de <b>Barcelona</b>, utilizando <b>cargobikes</b> y ofreciendo <b>soluciones sostenibles</b>.</p>
        </div>
      </div>
    </ImageText>

    <ImageText image={img5}>
      <div data-aos="fade-left" className="Text">
        <div className="content">
          <h2><b>Enfoque en B2B</b> y <b>Experiencia</b></h2>
          <p>Con más de <b>10 años</b> de experiencia en el sector, nos enfocamos en el <b>B2B</b>. Colaboramos con <b>artesanos</b> e <b>importadores</b> que distribuyen a los mejores <b>locales</b> de la ciudad. Nos apasiona trabajar en <b>Barcelona</b>, haciendo lo que más nos gusta: ¡ir en <b>bicicleta</b>!</p>
        </div>
      </div>
    </ImageText>

    <ImageText image={img6}>
      <div data-aos="fade-left" className="Text">
        <div className="content">
          <h2><b>Tarifas</b> y <b>Servicios Personalizados</b></h2>
          <p>Ofrecemos diferentes <b>tarifas</b> según el tipo de <b>transporte</b> y también <b>servicios personalizados</b> para <b>eventos</b> o <b>necesidades específicas</b>. Trabajamos con empresas que necesitan <b>soluciones logísticas</b> a medida y siempre estamos dispuestos a adaptar nuestros servicios para cada <b>cliente</b>.</p>
          <Link className="button" to={"calculate"} ><b>Calcula tu envio</b></Link>
        </div>
      </div>
    </ImageText>

    <ImageText image={img7}>
      <div data-aos="fade-left" className="Text">
        <div className="content">
          <h2><b>Flota de Bicicletas</b></h2>
          <p>Contamos con una flota de <b>bicicletas cargobikes</b> capaces de transportar hasta <b>100 kg</b>. Este tipo de <b>vehículos</b> nos permite ser más <b>rápidos</b> que una <b>furgoneta</b> en un entorno <b>urbano</b>. Además, usamos <b>cajas isotérmicas</b> para conservar la <b>temperatura ideal</b> de cada producto, asegurando entregas en <b>perfectas condiciones</b>.</p>
        </div>
      </div>
    </ImageText>

    <ImageText image={img8}>
      <div data-aos="fade-left" className="Text">
        <div className="content">
          <h2><b>Conciencia Social</b> y <b>Sostenibilidad</b></h2>
          <p>Nuestra <b>conciencia social</b> y <b>sostenible</b> nos distingue de la competencia. Siempre buscamos <b>soluciones ecológicas</b> para nuestros clientes, trabajando en <b>bicicleta</b> y reduciendo el <b>impacto medioambiental</b>. Además, nos comprometemos a ofrecer <b>soluciones logísticas personalizadas</b>, adaptándonos a las necesidades específicas de cada <b>negocio</b>.</p>
        </div>
      </div>
    </ImageText>

    <ImageText image={img2}>
      <div data-aos="fade-left" className="Text">
        <div className="content">
          <h2><b>Transporte en la Evolutiva Barcelona</b></h2>
          <p><b>Barcelona</b> es una ciudad en <b>constante evolución</b>, y nosotros evolucionamos con ella. Ofrecemos todo tipo de <b>servicios de transporte sostenible</b> en la ciudad, desde la <b>hostelería</b> hasta <b>eventos especiales</b>, ajustando nuestras <b>soluciones logísticas</b> para acompañar este <b>crecimiento</b> y satisfacer las <b>demandas del mercado</b>.</p>
        </div>
      </div>
    </ImageText>
  </Slider>




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

