


import "./CalculatorPreview.css"

import IcoWhatsapp from "../../assets/icons/social/whatsapp.svg?react"
import { contacto_link_whatsapp } from "../../config"

import imgScreenshotBcn from "../../assets/images/calculator.png"
import { useEffect, useState } from "react";
import useDelayNavigate from "../../utils/useDelayNavigate";

export default function CalculatorPreview(){

  const navigate = useDelayNavigate()

  const [isClicked, setIsClicked] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted,setIsMounted] = useState(false)


  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(()=>{
    setIsMounted(true)
  },[])



  function go(){
    setIsClicked(true)
    navigate("calculate")
    setTimeout(()=>{
      setIsClicked(false)
    },600)
  }

  return <div 
    className={"CalculatorPreview" + (isClicked?" click":"") + (isScrolled?" scroll":"") + (isMounted?" mounted":"")} 
    onMouseUp={()=>go()}
    >
    CALCULA TU ENVÍO
    <img src={imgScreenshotBcn} alt="" />

  </div>

}