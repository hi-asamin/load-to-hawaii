import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@/config/constants';

type GoogleMapProps = {
  lat: number;
  lng: number;
};

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const GoogleMapComponent: React.FC<GoogleMapProps> = (props) => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={props} zoom={10}>
        <Marker position={props} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
