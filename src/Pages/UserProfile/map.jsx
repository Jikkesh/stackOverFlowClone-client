import React, {useEffect ,useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

const MapContainer = (props) => {
  const [latitude, setLatitude] = useState(null); 
  const [longitude, setLongitude] = useState(null); 

  const users = useSelector((state) => state.usersReducer)
  const {id} = useParams();
  const User = users.filter((user) => user._id === id)[0];
  

useEffect(  () => {

    if(User){
        setLatitude(User.latitude)
        setLongitude(User.longitude)
        console.log(latitude , longitude);
    }

}, [User, latitude, longitude]);

  return (
    <div className="map-container">
      {latitude !== null && longitude !== null &&
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{
          lat: latitude,
          lng: longitude,
        }}
      >
        <Marker className="Marker" position={{ lat: latitude, lng: longitude }} />
      </Map>
}
    </div>
  );
      
};


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDruX40RFOpi5hFw-deyEWSIz4VoTBql50', 
})(MapContainer);
