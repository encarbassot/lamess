import { useLocation, useNavigate } from 'react-router-dom';
import './BackBtn.css';
import useDelayNavigate from '../../utils/useDelayNavigate';

import icoBack from "../../assets/icons/actions/back.svg"
import icoHome from "../../assets/icons/actions/home.svg"
import icoBcn from "../../assets/icons/actions/bcn.svg"
import icoMad from "../../assets/icons/actions/mad.svg"
import { useEffect, useRef, useState } from 'react';
import useAnimatedDiv from '../../utils/useAnimatedDiv';
  
export default function BackBtn({to="/",children}) {

  const navigate = useDelayNavigate()
  const { pathname } = useLocation();


  const {
    isClicked, isScrolled, isIdle,
    setIsClicked, activityHandlers
  } = useAnimatedDiv({
    idleMs: 3200,
    topThreshold: 1,
    resetDeps: [pathname], // al cambiar de ruta se reinicia el idle
  });


  const icon = (() => {
    if (pathname === "/barcelona" || pathname === "/madrid") return icoHome;
    if (pathname.startsWith("/barcelona")) return icoBcn;
    if (pathname.startsWith("/madrid")) return icoMad;
    return null
  })();
  
  function back() {
    setIsClicked(true);
    const segments = pathname.split("/").filter(Boolean);
    segments.pop();
    const parentPath = "/" + segments.join("/");
    navigate(parentPath || "/", () => setIsClicked(false));
    setTimeout(() => setIsClicked(false), 800);
  }
  
  return (
    <button 
      {...activityHandlers}
      className={`BackBtn`+ (isClicked ? " click" : "")+(isScrolled ? " is-scrolled" : "")+(isIdle ? " is-idle" : "")}
      aria-label="Back" 
      onClick={()=>back()}
      onMouseUp={()=>setIsClicked(true)}
    >
      {children}
      {icon && <img src={icon} />}
      <img src={icoBack} alt="" />
    </button>
  );
}
  