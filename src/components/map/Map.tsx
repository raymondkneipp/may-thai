import { ADDRESS } from "@constants";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

export function Map() {
  const center = useMemo(
    () => ({
      lat: 39.193337569787815,
      lng: -84.24132654605579,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="w-full min-h-screen bg-stone-200"
      options={{
        styles: [
          {
            featureType: "poi",
            elementType: "lables",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
