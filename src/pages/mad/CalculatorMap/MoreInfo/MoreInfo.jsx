

import { defaultPickUpFee, defaultPickUpFeeHoliday, driverHourlyRateHoliday, driverHourlyRateWeekday, driverHourlyRateWeekend, zonesFees } from "../../../../config"
import "./MoreInfo.css"


export default function MoreInfo(){


  return <>
  <section className="moreInfo" id="Tarifas">

    <h1>Tarifas por zonas</h1>


    <div className="card">
      <h2>Recogida</h2>
      <div className="versus">
        <h4>LABORABLES <span>{defaultPickUpFee}€</span></h4>
        <h4>FESTIVOS <span>{defaultPickUpFeeHoliday}€</span></h4>
      </div>
    </div>



	


    <div className="card">
      <h2>Entrega</h2>


      <div className="pricingsZones">
        {
          zonesFees.map(({name,dropPrice,dropPriceHoliday,zipCodes,color},i)=>{
            
            const price = dropPrice.toFixed(2).split(".")
            
            return(
            <article className="plan" key={i}>
              <header className="type" style={{backgroundColor:color}}>
                {name}
              </header>


                <div className="price">
                  <div className="mainPrice">
                    <span>€</span><big>{price[0]}
                      <sup>{price[1]}
                      <p className="muted bottomCorner">laborables</p>
                      </sup>
                    </big>
                  </div>
                  <div className="secondPrice">
                    <p>{dropPriceHoliday.toFixed(2)}€ <span className="muted">festivos</span></p>
                  </div>
                </div>
                
                <div className="content">
                  <ul>
                    <li>*precio por entrega</li>
                  </ul>
                </div>
                <footer>
                  <span>CODIGOS POSTALES</span>
                  <div className="postalCodes">
                    {zipCodes.map(x=><span key={x} className="cp muted">{x}</span>)}
                  </div>
                </footer>
            </article>
          )})
        }
      </div>

      
    </div>



      <h1>Tarifas por hora</h1>
    <div className="card">

      <div className="versus3">
        <div>
          <h2>LABORABLES</h2>
          {driverHourlyRateWeekday}€/H
        </div>

        <div>
          <h2>SÁBADOS</h2>
          {driverHourlyRateWeekend}€/H
        </div>

        <div>
          <h2>FESTIVOS</h2>
          {driverHourlyRateHoliday}€/H
        </div>
      </div>
    </div>




      <h1>Más información</h1>
    <article className="card">
      <ul className="more-info-list">
        <li>Entregas con menos de 24h de antelación, +50% de recargo.</li>
        <li>Cargas superiores a 30kg: +0,10€/Kg.</li>
        <li>Lluvia: +30% de recargo.</li>
        <li>Las devoluciones se cobrarán como una entrega extra.</li>
        <li>Todos los pedidos están asegurados por 7€/Kg. Se puede contratar un seguro por el total del valor aparte.</li>
      </ul>
    </article>

    <div className="card">
      <div>Existe un recargo por tiempo de espera de 0.20€/min.</div>
      <div>No se llevará ningún paquete que por su peso o medida genere riesgo para el conductor.</div>
      <div>Fuera de las zonas se aplica la tarifa por horas.</div>
    </div>
  </section>






  </>

}