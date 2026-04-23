import React, { useEffect, useState } from 'react'
import { GoogleMap } from '@react-google-maps/api';
import MarkerItem from './MarkerItem';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 8
};

const defaultCenter = {
  lat: 29.76075299384830,
  lng: -95.37666480767598
};

const hasValidCoordinates = (value) => (
  Number.isFinite(value?.lat) && Number.isFinite(value?.lng)
);

function GoogleMapSection({ coordinates, listing }) {

  const [center, setCenter] = useState(defaultCenter)
  const [map, setMap] = useState(null)
  const markerListings = (listing || []).filter((item) => hasValidCoordinates(item?.coordinates));

  useEffect(() => {
    setCenter(hasValidCoordinates(coordinates) ? coordinates : defaultCenter)
  }, [coordinates])

  useEffect(() => {
    if (map) {
      map.setZoom(10);
    }
  }, [map]);

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return (
    <div className='h-full min-h-[340px] overflow-hidden rounded-lg'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={map => setMap(map)}
        onUnmount={onUnmount}
        gestureHandling="greedy"
      >
        {markerListings.map((item) => (
          <MarkerItem
            key={item.id}
            item={item}
          />
        ))}
      </GoogleMap>
    </div>
  )
}

export default GoogleMapSection
