"use client"
import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({ selectedAddress, setCoordinates, value, onChange, placeholder = 'Search neighborhood, city, or address' }) {
  const handleChange = async (place) => {
    onChange?.(place);
    selectedAddress?.(place);

    if (!place) {
      setCoordinates?.(null);
      return;
    }

    try {
      const results = await geocodeByAddress(place.label);
      const { lat, lng } = await getLatLng(results[0]);
      setCoordinates?.({ lat, lng });
    } catch (error) {
      console.error('Error getting coordinates:', error);
      setCoordinates?.(null);
    }
  }

  return (
    <div className='flex w-full items-center rounded-lg border border-slate-200 bg-white/85 p-1 shadow-sm transition focus-within:ring-2 focus-within:ring-primary'>
      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary'>
        <MapPin className='h-5 w-5' />
      </div>
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
          value,
          placeholder,
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
          onChange: handleChange
        }}
      />
    </div>
  )
}

export default GoogleAddressSearch
