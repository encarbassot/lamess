

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'
import "./styles/fonts.css"
import "./styles/toolkit.css"

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './pages/bcn/Index/index.jsx'
// import About from './pages/bcn/About/About.jsx'
import { BASENAME } from './config.js'
import Nosotros from './pages/bcn/Nosotros/Nosotros.jsx'
import CittySelector from './pages/CitySelector/CitySelector.jsx'
import CalculatorMap from './pages/bcn/CalculatorMap/CalculatorMap.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <CittySelector />, 
  },
  {
    path: '/barcelona',
    element: <App />,
    children: [
      { path: '', element: <Index /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'calculate', element: <CalculatorMap /> },
    ],
  },
  // {
  //   path: '/madrid',
  //   element: <App />,
  //   children: [
  //     { path: '', element: <Index /> },
  //     { path: 'nosotros', element: <Nosotros /> },
  //     { path: 'calculate', element: <CalculatorMap /> },
  //   ],
  // },
], {
  basename: BASENAME,
})








createRoot(document.getElementById('root')).render(
  // <Context>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  //  </Context> 
  ,
)





