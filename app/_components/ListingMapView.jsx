"use client"
import React, { useEffect, useState } from 'react';
import Listing from './Listing';
import { supabase } from '@/utils/supabase/client';
import { toast } from 'sonner';
import GoogleMapSection from './GoogleMapSection';

function ListingMapView({ type }) {
    const [listing, setListing] = useState([]);
    const [searchedAddress, setSearchedAddress] = useState();
    const [bedCount, setBedCount] = useState(0);
    const [bathCount, setBathCount] = useState(0);
    const [parkingCount, setParkingCount] = useState(0);
    const [homeType, setHomeType] = useState();
    const [coordinates, setCoordinates] = useState();

    const getLatestListing = async () => {
        const { data, error } = await supabase
            .from('listing')
            .select(`*,listingImages(
            url,
            listing_id
        )`)
            .eq('active', true)
            .eq('type', type)
            .order('id', { ascending: false });

        if (data) {
            setListing(data);
        }
        if (error) {
            toast('Server Side Error');
        }
    }

    useEffect(() => {
        getLatestListing();
    }, []);

    const handleSearchClick = async () => {
        const searchTerm = searchedAddress?.value?.structured_formatting?.main_text;

        let query = supabase
            .from('listing')
            .select(`*,listingImages(
            url,
            listing_id
        )`)
            .eq('active', true)
            .eq('type', type)
            .gte('bedroom', bedCount)
            .gte('bathroom', bathCount)
            .gte('parking', parkingCount)
            .like('address', '%' + searchTerm + '%')
            .order('id', { ascending: false });

        if (homeType) {
            query = query.eq('propertyType', homeType);
        }

        const { data, error } = await query;
        if (data) {
            setListing(data);
        }
    }

    return (
        <div className='grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.82fr)]'>
            <div className='min-w-0'>
                <Listing
                    type={type}
                    listing={listing}
                    handleSearchClick={handleSearchClick}
                    searchedAddress={(v) => setSearchedAddress(v)}
                    setBathCount={setBathCount}
                    setBedCount={setBedCount}
                    setParkingCount={setParkingCount}
                    setHomeType={setHomeType}
                    setCoordinates={setCoordinates}
                />
            </div>

            <aside className='relative h-[360px] xl:sticky xl:top-28 xl:h-[calc(100vh-8rem)]'>
                <div className='surface h-full overflow-hidden rounded-lg p-2'>
                    <GoogleMapSection
                        listing={listing}
                        coordinates={coordinates}
                    />
                </div>
            </aside>
        </div>
    );
}

export default ListingMapView;
