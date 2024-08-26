"use client"
import React, { useEffect, useState } from 'react';
import Listing from './Listing';
import { supabase } from '@/utils/supabase/client';
import { toast } from 'sonner';
import GoogleMapSection from './GoogleMapSection';
import dummyData from '@/utils/dummyData';

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
        <div className='flex flex-col md:flex-row gap-8'>
            {/* Listing section */}
            <div className='flex-1'>
                <Listing
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

            {/* Google Map Section */}
            <div className='flex-1 relative md:static h-[300px] md:h-auto'>
                <div className='w-full h-full md:w-[350px] lg:w-[450px] xl:w-[650px]'>
                    <GoogleMapSection
                        listing={listing}
                        coordinates={coordinates}
                    />
                </div>
            </div>
        </div>
    );
}

export default ListingMapView;
