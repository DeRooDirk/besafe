import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
//import googleMapStyles from './GetStartedButton';

//const mapStyle = {//
 //  maxWidth: "50px",
//   maxHeight: "50px",

 //};
 



const AnyReactComponent = ({ text }) => (
    <div style={{
      position: 'relative', color: 'white', 
      height: 40, top: -20, left: -30,
      
       
        
    }}>
      {text}
    </div>
  );
class Completed extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };

        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getAddress = this.getAddress.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser");
        }
    }

    getCoordinates(position) {

        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.getAddress();
    }

    getAddress() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${"AIzaSyBdfaU7EEWWxNDsxoRAmH18acG7vi75Zk4"}`)
            .then(response => response.json())
            .then(data => console.log(data))
            // .then(data => this.setState({
            //     userAddress: data.results[0].formatted_address
            // }))
            .catch(error => alert(error))
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
            default: alert("An unknown error occurred.");
        }
    }

    render() {
        return (
            <div >
                <h2>Your Location:</h2>
                <button onClick={this.getLocation}>Get Location</button>
                <h4>Coordinates:</h4>
                <p>Latitude: {this.state.latitude}</p>
                <p >Longitude: {this.state.longitude}</p>
                <h2>Google Map:</h2>
                <p >Address: {this.state.userAddress}</p>
                <div   style={{height: '400px', width: '400px'}}>
                    <Map 
                        google={this.props.google}
                        zoom={11}
                        style={{height: '400px', width: '400px' ,margin : '0 auto'}}
                        >
                        <AnyReactComponent
                            lat= {this.state.latitude}
                            lng= {this.state.longitude}
                            text={'Kreyser Avrora'}
                           
                             
                            />

                    
                        <Marker
                            onClick={this.onMarkerClick}
                        />
                    </Map>
                    </div>
                {/* {
                    this.state.latitude && this.state.longitude ? 
                    <img src={`https://maps.googleapis.com/maps/api/js?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${'AIzaSyBdfaU7EEWWxNDsxoRAmH18acG7vi75Zk4'}`/>
                    :
            null;
    } */}
            </div >
        )
    }
}
//Completed.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBdfaU7EEWWxNDsxoRAmH18acG7vi75Zk4'
})(Completed);
