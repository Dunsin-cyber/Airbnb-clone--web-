import ReactMapGL from "react-map-gl";
import { useState } from "react";

function Map() {
	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		longitude: -122.4376,
		latitude: 37.7577,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle='mapbox://styles/dunsin/cl48dp2he000w14of7rftrdya'
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewport}
		></ReactMapGL>
	);
}

export default Map;
