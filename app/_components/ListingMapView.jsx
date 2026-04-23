"use client"
import React, { useCallback, useEffect, useState } from 'react';
import Listing from './Listing';
import { supabase } from '@/utils/supabase/client';
import { toast } from 'sonner';
import GoogleMapSection from './GoogleMapSection';
import dummyData from '@/utils/dummyData';

const parseCount = (value) => {
    const parsedValue = Number.parseInt(value, 10);
    return Number.isFinite(parsedValue) ? parsedValue : 0;
};

const sortListingsByIdDesc = (a, b) => String(b.id).localeCompare(String(a.id));

function ListingMapView({ type }) {
    const [listing, setListing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchedAddress, setSearchedAddress] = useState();
    const [bedCount, setBedCount] = useState(0);
    const [bathCount, setBathCount] = useState(0);
    const [parkingCount, setParkingCount] = useState(0);
    const [homeType, setHomeType] = useState();
    const [coordinates, setCoordinates] = useState();

    const createListingQuery = useCallback(() => supabase
        .from('listing')
        .select(`*,listingImages(
            url,
            listing_id
        )`)
        .eq('active', true)
        .eq('type', type)
        .order('id', { ascending: false }), [type]);

    const fetchListings = useCallback(async () => {
        setLoading(true);
        const searchTerm = searchedAddress?.label?.trim();
        const minimumBedroomCount = parseCount(bedCount);
        const minimumBathroomCount = parseCount(bathCount);
        const minimumParkingCount = parseCount(parkingCount);
        let query = createListingQuery()
            .gte('bedroom', minimumBedroomCount)
            .gte('bathroom', minimumBathroomCount)
            .gte('parking', minimumParkingCount);

        if (searchTerm) {
            query = query.ilike('address', `%${searchTerm}%`);
        }

        if (homeType) {
            query = query.eq('propertyType', homeType);
        }

        const { data, error } = await query;

        if (error) {
            toast('Unable to fetch listings');
            setLoading(false);
            return;
        }

        const filteredDummyListings = dummyData
            .filter((item) => item.active && item.type === type)
            .filter((item) => item.bedroom >= minimumBedroomCount)
            .filter((item) => item.bathroom >= minimumBathroomCount)
            .filter((item) => item.parking >= minimumParkingCount)
            .filter((item) => !homeType || item.propertyType === homeType)
            .filter((item) => !searchTerm || item.address?.toLowerCase().includes(searchTerm.toLowerCase()));

        setListing([...(data || []), ...filteredDummyListings].sort(sortListingsByIdDesc));
        setLoading(false);
    }, [bathCount, bedCount, createListingQuery, homeType, parkingCount, searchedAddress]);

    useEffect(() => {
        fetchListings();
    }, [fetchListings]);

    const handleSearchClick = async () => {
        await fetchListings();
    }

    return (
        <div className='grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.82fr)]'>
            <div className='min-w-0'>
                <Listing
                    type={type}
                    loading={loading}
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
