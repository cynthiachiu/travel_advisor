import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { OpenStreetMapProvider } from 'react-leaflet-geosearch';
import { GeoSearchControl } from 'leaflet-geosearch';
import "react-leaflet-geosearch/lib/react-leaflet-geosearch.css";


import useStyles from './styles';
import "./map.css";
import { useEffect } from 'react';


const SearchField = ({ setBounds }) => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
        provider: provider,
        style: 'button',
        autoComplete: true,
    });

    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    return null;
};

const MapComponent = ({ setCoordinates, setBounds, coordinates }) => {

    const map = useMapEvents({
        dragend: (e) => {
            setCoordinates({ lat: e.target.getCenter().lat, lng: e.target.getCenter().lng });
            setBounds({ ne: e.target.getBounds()._northEast, sw: e.target.getBounds()._southWest });
            console.log("drag e ", e.target.getBounds()._northEast)
        },
    });

    return null;
}

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    const classes = useStyles();

    if (coordinates.lat) {
        return (
            <div className="test">

                <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} onMoveEnd={(e) => { console.log(e) }} >

                    <MapComponent setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />

                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        places?.map((place, i) => (
                            place.latitude && place.longitude && (
                                <Marker
                                    position={[Number(place.latitude), Number(place.longitude)]}
                                    key={i}
                                    id={i}
                                    data={i}
                                    eventHandlers={{
                                        click: (e) => setChildClicked(e),
                                    }}
                                >
                                    <Popup>
                                        <Paper elevation={0} className={classes.paper}>
                                            <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                                {place.name}
                                            </Typography>
                                            <img
                                                className={classes.pointer}
                                                src={place.photo ? place.photo.images.thumbnail.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                                                alt={place.name}
                                            />
                                            <Rating size="small" value={Number(place.rating)} readOnly />
                                        </Paper>
                                    </Popup>
                                </Marker>
                            )
                        ))
                    }

                    <SearchField setBounds={setBounds} />

                </MapContainer>
            </div>
        );
    } else {
        return null;
    }
}

export default Map;