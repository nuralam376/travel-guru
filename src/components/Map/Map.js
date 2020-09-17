import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAEeJCpUQNf3sQVCEsuu5J6Qn2C-WOovEc");

const containerStyle = {
	width: "100%",
	height: "100vh",
};

const Map = ({ destination }) => {
	const [map, setMap] = useState(null);
	const [center, setCenter] = useState({ lat: 23.777176, lng: 90.399452 });

	useEffect(() => {
		// Get latitude & longitude from address.
		Geocode.fromAddress(destination).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				setCenter({
					lat,
					lng,
				});
			},
			(error) => {
				console.error("Error", error);
			}
		);
	}, []);

	const onLoad = useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds();
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return (
		<LoadScript googleMapsApiKey="AIzaSyAEeJCpUQNf3sQVCEsuu5J6Qn2C-WOovEc">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={8}
				onLoad={onLoad}
				onUnmount={onUnmount}
			></GoogleMap>
		</LoadScript>
	);
};

export default Map;
