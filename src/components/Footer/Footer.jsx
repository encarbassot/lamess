import "./Footer.css"

import icoLocation from "../../assets/icons/actions/location.svg"

import logoSquare from "../../assets/logo/logo-square.svg"
import { contacto_correo, contacto_link_correo, contacto_link_telefono, contacto_link_whatsapp, contacto_telefono, contacto_whatsapp } from "../../config"

import ico_instagram from "../../assets/icons/social/instagram.svg"
import ico_facebook from "../../assets/icons/social/facebook.svg"
import ico_twitter from "../../assets/icons/social/twitter.svg"
import ico_linkedin from "../../assets/icons/social/linkedin.svg"

export default function Footer(){



  return <footer className="Footer">
      <div className="Wrapper max-width">



        <div className="topWrapper">

          <div className="section logo">
            <img src={logoSquare} alt="" />
            <p>© 2023 La Mess. Todos los derechos reservados.</p>
          </div>









          <div className="section contact">

            <h2>CONTACTO</h2>

            <p>
              TELEFONO: <a href={contacto_link_telefono}>{contacto_telefono}</a>
            </p>
            <p>
              CORREO: <a href={contacto_link_correo}>{contacto_correo}</a>
            </p>
            <p>
              WHATSAPP: <a href={contacto_link_whatsapp}>{contacto_whatsapp}</a>
            </p>

            <div className="social">
              <a href="https://www.facebook.com/people/La-Mess/100084871881289/" target="_blank" title="Facebook">
                <img src={ico_facebook} alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/company/fem-ho-amb-bici/" target="_blank" title="Linkedin">
                <img src={ico_linkedin} alt="Linkedin" />
              </a>
              <a href="https://www.instagram.com/lamess_bcn/" target="_blank" title="Instagram">
                <img src={ico_instagram} alt="Instagram" />
              </a>
              <a href="https://x.com/FemhoambBici" target="_blank" title="Twitter">
                <img src={ico_twitter} alt="Twitter" />
              </a>
            </div>
          </div>







        </div>



        <div className="section location">

          <h2>dirección</h2>

            <iframe 
                className="map"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Calle%20Bruc%2063,%20Local+(LA%20MESS)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                title="Google Map"
            >
                <a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a>
            </iframe>


            <a className="media" href="https://www.google.es/maps/place/C.+del+Bruc,+63,+Eixample,+08009+Barcelona" target="_blank" rel="noopener noreferrer">
              <img src={icoLocation} alt="" />
              <span>Carrer del bruc, 63, Barcelona</span>
            </a>
        </div>



    </div>
    <div className="refooter">
      <p>Pàgina web de <a href="https://fabrega.cat" target="_blank">fabrega.cat</a></p>
    </div>
  </footer>
}