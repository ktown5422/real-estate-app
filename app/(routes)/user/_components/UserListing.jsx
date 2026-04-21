import { Button } from '@/components/ui/button';
import { supabase } from '@/utils/supabase/client'
import { useUser } from '@clerk/nextjs'
import { Bath, BedDouble, Eye, MapPin, Pencil, Ruler, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner';
function UserListing() {

    const { user } = useUser();
    const [listing, setListing] = useState();
    useEffect(() => {
        user && GetUserListing();
    }, [user])
    const GetUserListing = async () => {
        const { data, error } = await supabase
            .from('listing')
            .select(`*,listingImages(url,listing_id)`)
            .eq('createdBy', user?.primaryEmailAddress.emailAddress);
        setListing(data);
    }

    /**
     * Delete Property 
     */
    const deleteListing = async (id) => {
        //Delete Images  Record First
        await supabase
            .from('listingImages')
            .delete()
            .eq('listing_id', id);

        //Delete Actual Listing

        const { data, error } = await supabase
            .from('listing')
            .delete()
            .eq('id', id);

        toast('Record deleted!');
        GetUserListing();


    }
    return (
        <div>
            <h2 className='mb-4 text-2xl font-bold tracking-tight text-slate-950'>Manage your listings</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {listing && listing.map((item) => (
                    <div className='property-card relative p-3' key={item.id}>
                        <h2 className='absolute m-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-white'>{item.active ? 'Published' : 'Draft'}</h2>
                        <Image src={item?.listingImages[0] ?
                            item?.listingImages[0]?.url
                            : '/placeholder.svg'
                        }
                            width={800}
                            height={150}
                            className='h-[190px] w-full rounded-lg object-cover'
                            alt={item?.address || 'Listing image'}
                        />
                        <div className='flex mt-2 flex-col gap-2'>
                            <h2 className='text-2xl font-bold tracking-tight text-slate-950'>${Number(item?.price || 0).toLocaleString('en-US')}</h2>
                            <h2 className='flex gap-2 text-sm leading-5 text-slate-600'>
                                <MapPin className='h-4 w-4 shrink-0 text-primary' />
                                {item?.address}</h2>
                            <div className='flex gap-2 mt-2 justify-between'>
                                <h2 className='flex gap-2 text-sm bg-slate-100 
                         rounded-lg p-2 w-full text-slate-600 justify-center items-center font-semibold'>
                                    <BedDouble className='h-4 w-4' />
                                    {item?.bedroom}
                                </h2>
                                <h2 className='flex gap-2 text-sm bg-slate-100 
                         rounded-lg p-2 w-full text-slate-600 justify-center items-center font-semibold'>
                                    <Bath className='h-4 w-4' />
                                    {item?.bathroom}
                                </h2>
                                <h2 className='flex gap-2 w-full text-sm bg-slate-100 
                         rounded-lg p-2 text-slate-600 justify-center items-center font-semibold'>
                                    <Ruler className='h-4 w-4' />
                                    {item?.area}
                                </h2>
                            </div>
                            <div className='flex gap-2 justify-between'>
                                <Link href={'/view-listing/' + item.id} className="w-full">
                                    <Button size="sm" variant="outline" className="w-full gap-2">
                                        <Eye className='h-4 w-4' /> View</Button>
                                </Link>
                                <Link href={'/edit-listing/' + item.id} className="w-full">
                                    <Button size="sm" className="w-full gap-2"><Pencil className='h-4 w-4' /> Edit</Button>
                                </Link>

                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="destructive" className="w-full" aria-label="Delete listing">
                                            <Trash className='h-4 w-4' />
                                        </Button>

                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Ready to Delete?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Do you really want to Delete the listing?
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => deleteListing(item.id)} >
                                                Continue
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserListing
