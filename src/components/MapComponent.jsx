import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import marker from '../images/icon-location.svg';

const MapComponent = ({ data, location, firstLocation }) => {
  const containerStyle = {
    height: '100vh',
    width: '100vw',
  };

  const center = {
    lat: location
      ? parseFloat(data.latitude)
      : parseFloat(firstLocation.latitude),
    lng: location
      ? parseFloat(data.longitude)
      : parseFloat(firstLocation.longitude),
  };
  const position = {
    lat: location
      ? parseFloat(data.latitude)
      : parseFloat(firstLocation.latitude),
    lng: location
      ? parseFloat(data.longitude)
      : parseFloat(firstLocation.longitude),
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        options={{ gestureHandling: 'greedy' }}
        id='map-example'
        center={center}
        mapContainerStyle={containerStyle}
        zoom={14}
      >
        <MarkerF icon={marker} position={position}></MarkerF>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
