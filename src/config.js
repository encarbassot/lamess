export const BASENAME = ""



export const bcnPrices = {
  defaultPickUpFee: 2,
  defaultPickUpFeeHoliday: 3,
  driverHourlyRateWeekday: 19,
  driverHourlyRateWeekend: 25,
  driverHourlyRateHoliday: 30,
}

export const madPrices = {
  defaultPickUpFee: 0,
  defaultPickUpFeeHoliday: 0,
  driverHourlyRateWeekday: 19,
  driverHourlyRateWeekend: 25,
  driverHourlyRateHoliday: 30,
}


export const zonesFeesBCN = [
  {
    name:"Zona 1",
    zipCodes:  ["08006","08007","08008","08009","08010","08011","08012","08013","08021","08025","08036","08037"],
    color:"#1abc9c",
    // pickUpPrice:2, //optional
    // pickUpPriceHoliday:3, //optional
    dropPrice:4.5,
    dropPriceHoliday:7.5,
  },
  {
    name:"Zona 2",
    zipCodes:["08001","08002","08003","08015","08018","08026","08029"],
    color:"#EAC80D",
    // pickUpPrice:2, //optional
    // pickUpPriceHoliday:3, //optional
    dropPrice:6.5,
    dropPriceHoliday:9.5,
  },
  {
    name:"Zona 3",
    zipCodes:["08004","08005","08014","08016","08019","08020","08027","08028","08030","08041"],
    color:"#F39C12",
    // pickUpPrice:2, //optional
    // pickUpPriceHoliday:3, //optional
    dropPrice:7.5,
    dropPriceHoliday:10.5,
  },
  {
    name:"Zona 4",
    zipCodes:["08017","08022","08023","08024","08031","08032","08033","08034","08035","08042"],
    color:"#E74C3C",
    // pickUpPrice:2, //optional
    // pickUpPriceHoliday:3, //optional
    dropPrice:8.5,
    dropPriceHoliday:11.5,
  },
]


export const zonesFeesMAD = [
  {
    name:"Zona 1 – Centro cercano (≤15 min)",
    zipCodes:  ["28001", "28004", "28005", "28008", "28012", "28013", "28014", "28015"],
    color:"#1abc9c",
    // pickUpPrice:2, //optional
    // pickUpPriceHoliday:3, //optional
    dropPrice:5.5,
    dropPriceHoliday:8.5,
  },
  {
    name:"Zona 2 – Semicentro (15-25 min)",
    zipCodes:["28002", "28003", "28006", "28007", "28009", "28010", "28011", "28017", "28019", "28045"],
    color:"#EAC80D",
    // pickUpPrice:2, //optional
    // pickUpPriceHoliday:3, //optional
    dropPrice:7.5,
    dropPriceHoliday:10.5,
  },
  {
    name:"Zona 3 – Media distancia (25-35 min)",
    zipCodes:["28016", "28018", "28020", "28025", "28027", "28028", "28029", "28030", "28039", "28040"],
    color:"#F39C12",
    // pickUpPrice:2, //optional
    // pickUpPriceHoliday:3, //optional
    dropPrice:10,
    dropPriceHoliday:13.5,
  },
  {
    name:"Zona 4 – Periferia urbana (35-45 min)",
    zipCodes:["28022", "28031", "28032", "28033", "28034", "28035", "28036", "28037", "28038", "28041"],
    color:"#E74C3C",
    // pickUpPrice:2, //optional
    // pickUpPriceHoliday:3, //optional
    dropPrice:13,
    dropPriceHoliday:16.5,
  },
  // {
  //   name:"Zona 5 – Límite de Madrid capital (45-55 min)",
  //   zipCodes:[],
  //   color:"#000",
  //   // pickUpPrice:2, //optional
  //   // pickUpPriceHoliday:3, //optional
  //   dropPrice:15,
  //   dropPriceHoliday:18.5,
  // },
]

// MAPBOX SECRET TOKEN sk.eyJ1IjoiZWxpb3B1dG8iLCJhIjoiY20waDllc245MDhrcTJpc2d5ZWd6dzd6NiJ9.DRuikDFZazBNQ1LCEXL5Kw
export const MAPBOX_TOKEN = "pk.eyJ1IjoiZWxpb3B1dG8iLCJhIjoiY2p1cHo1Z3I0MW15MTRjbXFodTlseXc3biJ9.D9YCt_RIg81scuWdwN4Ybg"





// INFORMACION DE CONTACTO
export const contacto_correo = "lucas@lamess.es"
export const contacto_telefono = "+34 930 070 113"
export const contacto_whatsapp ="+34930070113"




// INFORMACION DE CONTACTO AUTOGENERADA
export const contacto_link_correo = `mailto:${contacto_correo}`
export const contacto_link_telefono = `tel:${contacto_telefono.replaceAll(" ","")}`
export const contacto_link_whatsapp = "https://wa.me/"+(contacto_whatsapp.replace("+","").replaceAll(" ",""))



