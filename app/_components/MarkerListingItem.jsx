import { Button } from '@/components/ui/button'
import { Bath, BedDouble, MapPin, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MarkerListingItem({item,closeHandler}) {
  return item?.listingImages[0]?.url&& (
    <div className='property-card relative w-[220px] cursor-pointer'>
            <div>
                <button className='absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm' onClick={()=>closeHandler()} aria-label="Close listing">
                    <X className='h-4 w-4' />
                </button>
                    <Image src={item?.listingImages[0]?.url}
                    width={800}
                    height={150}
                    className='h-[130px] w-full object-cover'
                    alt={item?.address || 'Map listing image'}
                    />
                    <div className='flex flex-col gap-3 p-3 bg-white'>
                        <h2 className='text-xl font-bold tracking-tight text-slate-950'>${Number(item?.price || 0).toLocaleString('en-US')}</h2>
                        <h2 className='flex gap-2 text-xs leading-5 text-slate-600'>
                            <MapPin className='h-4 w-4 shrink-0 text-primary'/>
                        {item.address}</h2>
                        <div className='flex gap-2 justify-between'>
                            <h2 className='flex gap-2 text-sm bg-slate-100 
                            rounded-lg p-2 w-full text-slate-600 justify-center items-center font-semibold'>
                                <BedDouble className='h-4 w-4'/>
                                {item?.bedroom}
                            </h2>
                            <h2 className='flex gap-2 text-sm bg-slate-100 
                            rounded-lg p-2 w-full text-slate-600 justify-center items-center font-semibold'>
                                <Bath className='h-4 w-4'/>
                                {item?.bathroom}
                            </h2>
                           
                        </div>
                       <Link href={'/view-listing/'+item.id} className='w-full'>
                       <Button size="sm" className="w-full">View Detail</Button>
                        </Link> 
                    </div>
                </div>  
    </div>
  )
}

export default MarkerListingItem
