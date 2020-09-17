import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAEeJCpUQNf3sQVCEsuu5J6Qn2C-WOovEc");

const containerStyle = {
	width: "100%",
	height: "100vh",
};

const center = {
	lat: 23.777176,
	lng: 90.399452,
};

const Map = () => {
	const [map, setMap] = useState(null);

	useEffect(() => {
		// Get latidude & longitude from address.
		Geocode.fromAddress("Cox's bazar").then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log("Location", lat, lng);
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
				zoom={16}
				onLoad={onLoad}
				onUnmount={onUnmount}
			></GoogleMap>
		</LoadScript>
	);
};

export default Map;
