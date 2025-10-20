import { useNavigate } from "react-router-dom";

export default function useDelayNavigate(ms = 600) {
  const navigate = useNavigate();
  

  function delayNavigate(to, callback) {
    setTimeout(() => {
      if (to === undefined || to === null) navigate(-1);
      else navigate(to); 
      
      if(typeof callback === "function") callback()
      
    }, ms);
  }

  return delayNavigate;
}