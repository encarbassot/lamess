export default class Zone{


  constructor(coordinates) {
    this.coordinates = coordinates
  }

  getPolygonCoordinates() {
    return this.coordinates
  }

  isPointInside(point) {
    const [px, py] = point

    const { maxLat, minLat, maxLng, minLng } = this.getBoundaries()
    // First check if the point is within the bounding box
    if (px < minLat || px > maxLat || py < minLng || py > maxLng) {
      return false
    }

    let inside = false

    for (let i = 0, j = this.coordinates.length - 1; i < this.coordinates.length; j = i++) {
      const [xi, yi] = this.coordinates[i]
      const [xj, yj] = this.coordinates[j]

      const intersect = ((yi > py) !== (yj > py)) &&
        (px < (xj - xi) * (py - yi) / (yj - yi) + xi)

      if (intersect) inside = !inside
    }

    return inside
  }

  getBoundaries(){
    // Extract latitudes and longitudes
    const latitudes = this.coordinates.map(coord => coord[0])
    const longitudes = this.coordinates.map(coord => coord[1])
  
    // Calculate max and min latitudes and longitudes
    const maxLat = Math.max(...latitudes)
    const minLat = Math.min(...latitudes)
    const maxLng = Math.max(...longitudes)
    const minLng = Math.min(...longitudes)

    return {maxLat,minLat,maxLng,minLng}
  }

  getBoundingCoordinates() {
    const  {maxLat,minLat,maxLng,minLng} = this.getBoundaries()
    return [[maxLat,maxLng],[maxLat,minLng],[minLat,maxLng],[minLat,minLng]]
  }


  deletePoint([lat,lng]){
    this.coordinates = this.coordinates.filter(([x,y])=>x!=lat || y!=lng)

    this.log()
  }

  log(){
    const result = this.coordinates.map(cords=>cords.reverse().map(x=>x.toFixed(6)).join(",")+",0")


    console.log(result.join("\n"))
  }

}
