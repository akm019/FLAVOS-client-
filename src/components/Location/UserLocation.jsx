// MapWithGeocoder.js

import React, { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = "pk.eyJ1IjoiYWF5dXNoa20iLCJhIjoiY2x4ZThndHVuMGF4MDJrc2hydjZvMXdsZSJ9.boDYvMd9Z9ljH0slTAuANQ";

const MapWithGeocoder = ({ onAddressSelect }) => {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40],
      zoom: 9,
    });

    mapInstanceRef.current.on("load", () => {
      setMapLoaded(true);
    });

    mapInstanceRef.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      // Remove existing marker if any
      if (marker) {
        marker.remove();
      }

      // Add new marker
      const newMarker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(mapInstanceRef.current);

      setMarker(newMarker);
      onAddressSelect({ latitude: lat, longitude: lng });
    });
  }, [marker, onAddressSelect]);

  return (
    <>
      <SearchBox
        accessToken={accessToken}
        map={mapInstanceRef.current}
        mapboxgl={mapboxgl}
        value={inputValue}
        onChange={(d) => {
          setInputValue(d);
        }}
        marker
      />
      <div id="map-container" ref={mapContainerRef} style={{ height: 300 }} />
    </>
  );
};

export default MapWithGeocoder;
