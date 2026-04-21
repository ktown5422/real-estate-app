import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MarkerItem from './MarkerItem';
const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 8
};


function GoogleMapSection({ coordinates, listing }) {

  const [center, setCenter] = useState({
    lat: 29.76075299384830,
    lng: -95.37666480767598
  })
  const [map, setMap] = useState(null)
  //   const { isLoaded } = useJsApiLoader({
  //     id: 'google-map-script',
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY
  //   })
  useEffect(() => {
    coordinates && setCenter(coordinates)
  }, [coordinates])

  useEffect(() => {
    if (map) {

      map.setZoom(10);
    }
  }, [map]);
  const onUnmount = React.useCallback(function callback(map) {
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
        { /* Child components, such as markers, info windows, etc. */}
        {listing.map((item, index) => (
          <MarkerItem
            key={index}
            item={item}
          />
        ))}
      </GoogleMap>
    </div>
  )
}

export default GoogleMapSection
