import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -8.8390607, // Latitude de Luanda, Angola
  lng: 13.2894393, // Longitude de Luanda, Angola
};

export function MapaInterativo() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyByG9tfW-lGNcVa-91_Jf9QwV6xnuPsAaE', // <-- Troque por sua chave válida
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <p className="text-gray-400 text-center">Carregando mapa...</p>
  );
}