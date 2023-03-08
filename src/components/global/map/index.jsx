import { useState, memo, useEffect, useMemo, useRef } from "react";
import Images from "@/themes/images";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
const mapStyles = require("./style.json");

const options = {
	gestureHandling: "greedy",
	panControl: false,
	zoomControl: false,
	scaleControl: false,
	streetViewControl: false,
	overviewMapControl: false,
	disableDefaultUI: false,
	mapTypeControl: false,
	fullscreenControl: false,
	backgroundColor: "#fff",
	styles: mapStyles,
};

function Map({
	selectedPlace,
	isMultiple,
	markers,
	data = {},
	containerclass = "",
	mapclass = "",
	selectedLocation = {},
}) {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyDjQoK_P6Be8f1xXotSnl5ffbHRTFIko3w",
	});

	const [center, setCenter] = useState({ lat: 44.603134, lng: 41.358235 });
	const [map, setMap] = useState(null);
	const [zoom, setZoom] = useState(10);
	const [selectedSlug, setSelectedSlug] = useState("");
	const mapRef = useRef(null);

	useEffect(() => {
		const currentCenter = selectedLocation?.position?.lat
			? selectedLocation.position
			: selectedPlace?.lat
			? selectedPlace
			: center;

		setSelectedSlug(selectedPlace);
		setCenter(currentCenter);
		mapRef?.current?.onLoad?.();
	}, [selectedLocation, selectedPlace]);

	console.log({ selectedPlace, markers });

	const renderMarkers = useMemo(() => {
		return (
			<>
				{markers?.length > 0 &&
					markers?.map((item) => (
						<>
							{item?.slug == selectedSlug ? (
								<CustomMarker item={item} key={item?.id} selectedSlug={true} />
							) : (
								<CustomMarker item={item} key={item?.id} selectedSlug={false} />
							)}
						</>
					))}
			</>
		);
	}, [selectedPlace, selectedSlug, markers]);

	return (
		<div className={containerclass}>
			{isLoaded && (
				<GoogleMap
					key={selectedPlace}
					onLoad={(map) => setMap(map)}
					options={{
						...options,
						...{
							zoomControlOptions: {
								position: window.google.maps.ControlPosition.LEFT_BOTTOM,
								style: window.google.maps.ZoomControlStyle.SMALL,
							},
						},
					}}
					mapContainerClassName={mapclass}
					center={center}
					zoom={zoom}
					onZoomChanged={() => {
						if (map) {
							if (map.zoom !== zoom) {
								setZoom(map.zoom);
							}
						}
					}}
					ref={mapRef}
				>
					{isMultiple ? (
						renderMarkers
					) : (
						<MarkerF
							position={data.position}
							icon={{
								url: Images.MapMarker.src,
								scaledSize: new google.maps.Size(55, 55),
							}}
							cursor="auto"
						/>
					)}
				</GoogleMap>
			)}
		</div>
	);
}

export default Map;

const CustomMarker = ({ key, item, selectedSlug }) => {
	return (
		<MarkerF
			key={key}
			position={item.position}
			icon={{
				url: Images.MapMarker.src,
				scaledSize: new google.maps.Size(
					selectedSlug ? 55 : 32,
					selectedSlug ? 55 : 32
				),
			}}
			cursor="auto"
		/>
	);
};
