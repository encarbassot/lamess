


import "./CalculatorPreview.css"

import imgScreenshotBcn from "../../assets/images/calculator.png"
import useDelayNavigate from "../../utils/useDelayNavigate";
import useAnimatedDiv from "../../utils/useAnimatedDiv";

export default function CalculatorPreview(){

  const navigate = useDelayNavigate()


  const {
    isClicked, isScrolled, isMounted, isIdle,
    setIsClicked, activityHandlers
  } = useAnimatedDiv({
    idleMs: 3500,
    topThreshold: 1  });


  function go(){
    setIsClicked(true)
    navigate("calculate")
    setTimeout(()=>{
      setIsClicked(false)
    },600)
  }

  return <div 
    {...activityHandlers}
    className={"CalculatorPreview" + (isClicked?" click":"") + (isScrolled?" scroll":"") + (isMounted?" mounted":"") + (isIdle?" idle":"")} 
    onMouseUp={()=>go()}
    >
    CALCULA TU ENVÍO
    <img src={imgScreenshotBcn} alt="" />

  </div>

}