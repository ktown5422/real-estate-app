"use client"
import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({ selectedAddress, setCoordinates }) {
  return (
    <div className='flex w-full items-center rounded-lg border border-slate-200 bg-white/85 p-1 shadow-sm transition focus-within:ring-2 focus-within:ring-primary'>
      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary'>
        <MapPin className='h-5 w-5' />
      </div>
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
          placeholder: 'Search neighborhood, city, or address',
          isClearable: true,
          className: 'w-full',
          styles: {
            control: (base) => ({
              ...base,
              border: 0,
              boxShadow: 'none',
              minHeight: '40px',
              background: 'transparent',
            }),
            placeholder: (base) => ({
              ...base,
              color: '#64748b',
              fontSize: '14px',
            }),
            input: (base) => ({
              ...base,
              color: '#0f172a',
            }),
            menu: (base) => ({
              ...base,
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(15,23,42,0.16)',
              zIndex: 50,
            }),
          },
          onChange: (place) => {
            if (place) {
              selectedAddress(place);
              geocodeByAddress(place.label)
                .then(result => getLatLng(result[0]))
                .then(({ lat, lng }) => {
                  setCoordinates({ lat, lng })
                })
            } else {
              selectedAddress(null);
            }
          }
        }}
      />
    </div>
  )
}

export default GoogleAddressSearch
