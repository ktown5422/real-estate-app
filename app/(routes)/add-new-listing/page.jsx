"use client"
import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import { supabase } from '@/utils/supabase/client';
import { useUser } from '@clerk/nextjs';
import { ArrowRight, Loader, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

function AddNewListing() {
    const [selectedAddress, setSelectedAddress] = useState();
    const [coordinates, setCoordinates] = useState();
    const { user } = useUser();
    const [loader, setLoader] = useState(false);
    const router = useRouter();

    const nextHandler = async () => {
        setLoader(true)
        const { data, error } = await supabase
            .from('listing')
            .insert([
                {
                    address: selectedAddress.label,
                    coordinates: coordinates,
                    createdBy: user?.primaryEmailAddress.emailAddress
                },
            ])
            .select();

        if (data) {
            setLoader(false)
            console.log("New Data added,", data);
            toast("New Address added for listing");
            router.replace('/edit-listing/' + data[0].id);
        }
        if (error) {
            setLoader(false)
            console.log('Error');
            toast("Server side error")
        }

    }
    return (
        <main className='app-shell flex min-h-[calc(100vh-120px)] items-center justify-center py-10'>
            <div className='w-full max-w-2xl'>
                <div className='mb-6 text-center'>
                    <span className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                        <MapPin className='h-6 w-6' />
                    </span>
                    <h1 className='text-4xl font-bold tracking-tight text-slate-950'>Start a new listing</h1>
                    <p className='mt-3 text-slate-600'>Add the property address first. You will enrich the listing details on the next screen.</p>
                </div>
                <div className='surface flex w-full flex-col gap-5 rounded-lg p-5 md:p-8'>
                    <h2 className='text-sm font-bold uppercase text-slate-500'>Property address</h2>
                    <GoogleAddressSearch
                        selectedAddress={(value) => setSelectedAddress(value)}
                        setCoordinates={(value) => setCoordinates(value)}
                    />
                    <Button
                        className="gap-2"
                        disabled={!selectedAddress || !coordinates || loader}
                        onClick={nextHandler}
                    >
                        {loader ? <Loader className='animate-spin' /> : <>Next <ArrowRight className='h-4 w-4' /></>}
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default AddNewListing
