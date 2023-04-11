import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";



export const AddMarkerToClick = (props) => {

    const [markers, setMarkers] = useState([]);

    const map = useMapEvents({
        click(e) {
            const newMarker = e.latlng
            setMarkers([newMarker]);

        }

    })


    useEffect(() => {
        props.setPosition(markers)

    }, [markers])


    return (
        <>
            {markers.map(marker =>
                <Marker key={marker} position={marker}>
                    <Popup>Marker is here</Popup>
                </Marker>
            )}
        </>
    )
}