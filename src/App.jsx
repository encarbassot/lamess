import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';
import Footer from './components/Footer/Footer';

//navbar
import img_logo from "./assets/logo/logo-hands-small.svg"

import icoBack from "./assets/icons/actions/back.svg"
import BackBtn from "./components/BackBtn/BackBtn"
import CalculatorPreview from './components/CalculatorPreview/CalculatorPreview';

function App() {
  useEffect(() => {
      AOS.init();
    }, [])


    const links = [
      { to: "/nosotros", text: "Sobre nosotros" },
      { to: "/calculate", text: "Calcula tu envío" },
      { to: "https://lamess.lobolink.eu/lobo/#!//coreLogin/", text: "Zona clientes" },
    ]

    const { pathname } = useLocation();

    const isVisible = pathname === "/barcelona" || pathname === "/madrid";

  return (
    <>




    

        <BackBtn/>

      <div className='App'>


        <ScrollRestoration/>

        {/* <Navbar links={links} logo={img_logo}/> */}

        <div className='App__content'>
          <Outlet />
        </div>
        
        <Footer />
      </div>

        <WhatsappButton/>

        {isVisible && 
          <CalculatorPreview />
        }
        
    </>
  )
}

export default App
