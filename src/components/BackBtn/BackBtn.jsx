import { useLocation, useNavigate } from 'react-router-dom';
import './BackBtn.css';
import useDelayNavigate from '../../utils/useDelayNavigate';

import icoBack from "../../assets/icons/actions/back.svg"
import icoHome from "../../assets/icons/actions/home.svg"
import icoBcn from "../../assets/icons/actions/bcn.svg"
import icoMad from "../../assets/icons/actions/mad.svg"
import { useEffect, useState } from 'react';
  
export default function BackBtn({to="/",children}) {

  const navigate = useDelayNavigate()
  const { pathname } = useLocation();

  const [isClicked, setIsClicked] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const icon = (() => {
    if (pathname === "/barcelona" || pathname === "/madrid") return icoHome;
    if (pathname.startsWith("/barcelona")) return icoBcn;
    if (pathname.startsWith("/madrid")) return icoMad;
    return null
  })();
  

  function back() {
    setIsClicked(true);
  
    // Pop last part of the current path (e.g. /barcelona/nosotros -> /barcelona)
    const segments = pathname.split("/").filter(Boolean);
    segments.pop(); // remove the last segment
    const parentPath = "/" + segments.join("/");
  
    // Navigate with delay
    navigate(parentPath || "/", () => {
      setIsClicked(false);
    });
  
    // fallback reset in case callback didn’t trigger
    setTimeout(() => setIsClicked(false), 800);
  }
  
  return (
    <button 
      className={`BackBtn${isClicked ? " click" : ""}${isScrolled ? " is-scrolled" : ""}`}
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
  