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
        return <div className='app-shell py-10'><div className='h-[420px] animate-pulse rounded-lg bg-white/70 shadow-sm' /></div>;
    }

    if (error) {
        return <div className='app-shell py-10 text-red-600'>Error: {error}</div>;
    }

    return (
        <main className='app-shell max-w-6xl py-6'>
            <Slider imageList={listingDetail[0]?.listingImages} />
            <Details listingDetail={listingDetail[0]} />
        </main>
    );
}

export default ViewListing;
