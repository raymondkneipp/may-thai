import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

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
			mapContainerClassName="w-full h-[50vh]"
			options={{
				styles: [
					{
						featureType: 'administrative',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#444444',
							},
						],
					},
					{
						featureType: 'landscape',
						elementType: 'all',
						stylers: [
							{
								color: '#F5F5F4',
							},
							{
								visibility: 'on',
							},
						],
					},
					{
						featureType: 'poi',
						elementType: 'all',
						stylers: [
							{
								visibility: 'off',
							},
						],
					},
					{
						featureType: 'road',
						elementType: 'all',
						stylers: [
							{
								saturation: 0,
							},
							{
								lightness: 0,
							},
						],
					},
					{
						featureType: 'road.highway',
						elementType: 'all',
						stylers: [
							{
								visibility: 'simplified',
							},
						],
					},
					{
						featureType: 'road.arterial',
						elementType: 'labels.icon',
						stylers: [
							{
								visibility: 'off',
							},
						],
					},
					{
						featureType: 'transit',
						elementType: 'all',
						stylers: [
							{
								visibility: 'off',
							},
						],
					},
					{
						featureType: 'water',
						elementType: 'all',
						stylers: [
							{
								visibility: 'off',
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
