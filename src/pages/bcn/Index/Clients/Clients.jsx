import "./Clients.css"

import { clients as clientsData } from "../../../../config_clients"
import { BASENAME } from "../../../../config"

import ico_instagram from "../../../../assets/icons/social/instagram.svg"
import ico_facebook from "../../../../assets/icons/social/facebook.svg"
import ico_twitter from "../../../../assets/icons/social/twitter.svg"
import ico_web from "../../../../assets/icons/social/web.svg"
import ico_youtube from "../../../../assets/icons/social/youtube.svg"
import { useEffect, useRef, useState } from "react"

export default function Clients(){

  const icons = {
    instagram:ico_instagram,
    facebook:ico_facebook,
    twitter:ico_twitter,
    web:ico_web,
    youtube:ico_youtube,
  }


  const repeatedNames = clientsData.map(x=>x.name).filter((name, index, arr) => arr.indexOf(name) !== index)
  if(repeatedNames.length>0){
    console.warn("HAY CLIENTES REPETIDOS", repeatedNames)
  }



  const slideRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);


  const autoScroll = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft += 1;
    }
  };



  useEffect(() => {
    let scrollInterval;

    if (!userInteracted) {
      scrollInterval = setInterval(autoScroll, 10);
    }

    return () => clearInterval(scrollInterval);
  }, [userInteracted]);

  const stopAutoScroll = () => {
    setUserInteracted(true);
  };

  useEffect(() => {
    const currentSlide = slideRef.current;

    if (currentSlide) {
      currentSlide.addEventListener('wheel', stopAutoScroll);
      currentSlide.addEventListener('touchstart', stopAutoScroll);
      currentSlide.addEventListener('mousedown', stopAutoScroll);

      return () => {
        currentSlide.removeEventListener('wheel', stopAutoScroll);
        currentSlide.removeEventListener('touchstart', stopAutoScroll);
        currentSlide.removeEventListener('mousedown', stopAutoScroll);
      };
    }
  }, []);

  const shuffledClients = [...clientsData].sort(() => Math.random() - 0.5);


  return <div className="Clients">

    <div className="text">
      <h2>Nuestros clientes</h2>
      <h3>Ellos confían, tú puedes ser el siguiente.</h3>
    </div>

  <div className="slide" ref={slideRef}>
    {
      shuffledClients.map(({name,img,isSmall,links})=>{

        const imgPath = `${BASENAME}/clients/${img}`
        const bgStyle = {background:`url(${imgPath})`}

        return (
          <div key={name} className="Client">

            <div className="logoWrap">
              <div className={"logo" + (isSmall?" small":"")}style={bgStyle}>

              </div>
            </div>
            <span>{name}</span>

            <div className="contact">
              {
                Object.keys(links).map(key=>{

                  return <a key={name+"-"+key} href={links[key]}>
                    <img src={icons[key]} alt={key} />
                  </a>
                })
              }
            </div>

          </div>
        )
      })
    }
  </div>

  </div>
}