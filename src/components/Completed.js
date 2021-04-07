import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import style from "../module/Geo.module.css";
import { Link } from "react-router-dom";
class Completed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
    };

    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getAddress = this.getAddress.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }

  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.getAddress();
  }

  getAddress() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
        this.state.latitude
      },${
        this.state.longitude
      }&sensor=false&key=${"AIzaSyBdfaU7EEWWxNDsxoRAmH18acG7vi75Zk4"}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      // .then(data => this.setState({
      //     userAddress: data.results[0].formatted_address
      // }))
      .catch((error) => alert(error));
  }

  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }

  render() {
    return (
      <>
        <div className={style.GeosuperWrap}>
          <div className={style.GeobigWrap}>
            <h2 className={style.geoLoc}>Your Location:</h2>
            <button className="btn btn-set gButton" onClick={this.getLocation}>Get Location</button>
            <h4 className={style.geoLoc}>Coordinates:</h4>
            <p className={style.geoLoc}>Latitude: {this.state.latitude}</p>
            <p className={style.geoLoc}>Longitude: {this.state.longitude}</p>
            <h2 className={style.geoLoc} >Google Map:</h2>
            
            <p    className={style.geoLoc}>Address: {this.state.userAddress}</p>
            <div className="map">
              <Map
                google={this.props.google}
                zoom={19}
                style={{ maxHeight: "200px", width: "100%", margin: "0 auto" }}
              >
                <Marker onClick={this.onMarkerClick} />
              </Map>
            </div>
            <div className={style.buttonsSettinsWrap}>
            <Link to="/Settings">           
              <span className="btn btn-set">
                <i className="fa fa-wrench"></i>
              </span>
            </Link>
            <Link to="/Home">              
              <span className="btn btn-set">                
                <i className="fa fa-home"></i>
              </span>
            </Link>
            <Link to="/Feed">              
              <span className="btn btn-set">                
                <i class="fa fa-comments"></i>
              </span>
            </Link>
            <Link to="/Home">             
              <span className="btn btn-set">
                <i class="fa fa-phone"></i>
              </span>
            </Link>
          </div>
        </div>
          </div>
        
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBdfaU7EEWWxNDsxoRAmH18acG7vi75Zk4",
})(Completed);
