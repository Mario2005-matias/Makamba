import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -23.561684, // Latitude da Av. Paulista
  lng: -46.655981, // Longitude da Av. Paulista
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
    <p className="text-gray-400">Carregando mapa...</p>
  );
}
