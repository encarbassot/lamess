import "./Navbar2.css"



import logoSquare from "../../assets/logo/logo-square-black.svg"
import { Link } from "react-router-dom"

export default function Navbar2(){



  return <nav className="Navbar2">

    <div className="left">
      <Link to="/">
        <img src={logoSquare} alt="" className="logo" />
      </Link>
    </div>

    <div className="right">
      {/* <Link>Nosotros</Link> */}
      <Link to="/calculate">Calcula tu envio</Link>
    </div>


  </nav>
}