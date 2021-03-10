import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox"
import {Box, TextField} from "@material-ui/core"
const libraries = ["places"];
const mapContainerStyle = { height: "50vh", width: "90vw",}
const options = {disableDefaultUI: true,  zoomControl: true}
const center = {
    lat: 19.42129,
    lng: -99.16313,
}

function MapsContainer() {
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const onMapClick = React.useCallback((event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div>
            <h1 class="mapProps"></h1>
            <Search />
            <GoogleMap mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                onClick={onMapClick}
                onLoad={onMapLoad}
                options={options} 
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.time.toISOString()}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        icon={{
                            url: '/beer.svg',
                            scaledSize: new window.google.maps.Size(40, 40),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(20, 20),
                        }}
                        onClick={() => {
                            setSelected(marker);
                        }}

                    />
                ))}
                {selected ? (<InfoWindow position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => { setSelected(null) }}>
                    <div>
                        <h2>Beer near you</h2>
                        <p>Spotted {formatRelative(selected.time, new Date())}</p>
                    </div>
                </InfoWindow>) : null};
            </GoogleMap>
        </div>
    )
}


function Search() {
    const {ready, value, suggestions:{status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestoOptions: {
            location: {
                lat:()=> 19.42129,
                lng:()=> -99.16313
            }, 
            radius: 200 * 1000, 
        },

    });
    return <Box class="mapProps" onSelect={(address) => { 
    console.log(address);
    }}>
    <TextField id="filled-basic" label="..." variant="outlined"  
        value={value} 
        onChange={(e)=>{ 
        setValue(e.target.value)
    }}
    disable={!ready}
    placeholder="Enter an address"/>
   


    </Box>
}
export default MapsContainer;
