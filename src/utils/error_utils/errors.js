class GeoFailed extends Error{
  constructor(){
    super();
    this.message = 'Error: The Geolocation service failed';
  }
}

class GeoAbsence extends Error{
  constructor(){
    super();
    this.message = 'Error: Your browser doesn\'t support geolocation';
  }
}

export default {
  GeoFailed,
  GeoAbsence
}