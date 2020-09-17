import React, { useCallback, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
	width: "400px",
	height: "400px",
};

const center = {
	lat: -3.745,
	lng: -38.523,
};

const Map = () => {
	const [map, setMap] = useState(null);

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
				zoom={18}
				onLoad={onLoad}
				onUnmount={onUnmount}
			></GoogleMap>
		</LoadScript>
	);
};

export default Map;
