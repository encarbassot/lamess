import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './elio-react-components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';
import Footer from './components/Footer/Footer';

//navbar
import img_logo from "./assets/logo/logo-hands-small.svg"

function App() {
  useEffect(() => {
      AOS.init();
    }, [])


    const links = [
      { to: "/nosotros", text: "Sobre nosotros" },
      { to: "/calculate", text: "Calcula tu envío" },
      { to: "https://lamess.lobolink.eu/lobo/#!//coreLogin/", text: "Zona clientes" },
    ]

  return (
    <>

      <div className='App'>
        <ScrollRestoration/>

        <Navbar links={links} logo={img_logo}/>

        <div className='App__content'>
          <Outlet />
        </div>
        
        <Footer />
      </div>

        <WhatsappButton/>
    </>
  )
}

export default App
