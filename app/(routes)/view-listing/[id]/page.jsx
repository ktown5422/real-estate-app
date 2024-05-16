"use client";
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/utils/supabase/client';
import Slider from '../_components/Slider';
import Details from '../_components/Details';

function ViewListing({ params }) {
    const [listingDetail, setListingDetail] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getListingDetail = async () => {
            try {
                const { data, error } = await supabase
                    .from('listing')
                    .select('*, listingImages(url, listing_id)')
                    .eq('id', params.id)
                    .eq('active', true);

                if (data) {
                    console.log('///---', data);
                    setListingDetail(data);
                }
                if (error) {
                    setError('Server side error!');
                }
            } catch (error) {
                console.error('Error fetching listing detail:', error.message);
                setError('Error fetching listing detail');
            } finally {
                setLoading(false);
            }
        };

        getListingDetail();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='px-4 md:px-32 lg:px-56 py-5'>
            <Slider imageList={listingDetail[0]?.listingImages} />
            <Details listingDetail={listingDetail[0]} />
        </div>
    );
}

export default ViewListing;

