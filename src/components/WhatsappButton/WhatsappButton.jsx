


import "./WhatsappButton.css"

import IcoWhatsapp from "../../assets/icons/social/whatsapp.svg?react"
import { contacto_link_whatsapp } from "../../config"


export default function WhatsappButton(){


  return <div className="WhatsappButton">

    <a href={contacto_link_whatsapp} target="_blank">
      <IcoWhatsapp className="ico"/>

    </a>

  </div>

}