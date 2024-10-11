import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';
import Footer from './components/Footer/Footer';
import Navbar2 from './components/Navbar2/Navbar2';


function App() {
  useEffect(() => {
      AOS.init();
    }, [])

  return (
    <>

      <div className='App'>
        <ScrollRestoration/>

        {/* <Navbar/> */}
        <Navbar2/>

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
