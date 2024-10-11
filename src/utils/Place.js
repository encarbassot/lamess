export default class Place{

  constructor(place){
    // console.log("PLACE",place)
    const {place_name,center} = place
    this.name = place_name.replaceAll("Barcelona, Barcelona, Spain","").replaceAll("Barcelona","").replaceAll("Spain","")
    this.center = [center[1],center[0]]
  }
}