
import GoogleMapSection from '@/app/_components/GoogleMapSection'
import { Button } from '@/components/ui/button'
import { Bath, BedDouble, CarFront, Drill, Home, LandPlot, MapPin, Share } from 'lucide-react'

import React from 'react'
import AgentDetail from './AgentDetail'

function Details({listingDetail}) {
  const features = [
    { icon: Home, label: listingDetail?.propertyType, title: 'Type' },
    { icon: Drill, label: listingDetail?.builtIn ? `Built in ${listingDetail?.builtIn}` : 'Year unavailable', title: 'Build' },
    { icon: LandPlot, label: `${listingDetail?.area || '--'} sq.ft`, title: 'Area' },
    { icon: BedDouble, label: `${listingDetail?.bedroom || '--'} Bed`, title: 'Bedrooms' },
    { icon: Bath, label: `${listingDetail?.bathroom || '--'} Bath`, title: 'Bathrooms' },
    { icon: CarFront, label: `${listingDetail?.parking || '--'} Parking`, title: 'Parking' },
  ];

  return listingDetail&&(
    <div className='my-6 grid gap-6 lg:grid-cols-[1fr_340px]'>
    <div className='space-y-6'>
    <section className='surface rounded-lg p-5 md:p-6'>
    <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
        <div>
            <span className='soft-pill mb-3 inline-flex'>{listingDetail?.type || 'Listing'}</span>
            <h1 className='text-4xl font-bold tracking-tight text-slate-950'>$ {Number(listingDetail?.price || 0).toLocaleString('en-US')}</h1>
            <p className='mt-3 flex gap-2 text-base leading-6 text-slate-600'>
                <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                {listingDetail?.address}
            </p>
        </div>
        <Button className="gap-2"> <Share className='h-4 w-4' /> Share</Button>
    </div>
    </section>

     <section className='surface rounded-lg p-5 md:p-6'>
        <h2 className='section-title'>Key Features</h2>
        <div className='mt-4 grid grid-cols-2 gap-3 md:grid-cols-3'>
            {features.map((feature) => {
                const Icon = feature.icon;
                return (
                    <div className='rounded-lg border border-slate-200 bg-white/75 p-4' key={feature.title}>
                        <Icon className='mb-3 h-5 w-5 text-primary' />
                        <p className='text-xs font-bold uppercase text-slate-500'>{feature.title}</p>
                        <p className='mt-1 text-sm font-bold text-slate-950'>{feature.label}</p>
                    </div>
                )
            })}
        </div>
    </section> 
    <section className='surface rounded-lg p-5 md:p-6'>
        <h2 className='section-title'>What&apos;s Special</h2>
        <p className='mt-3 leading-7 text-slate-600'>{listingDetail?.description}</p>
    </section>
    <section className='surface rounded-lg p-2'>
        <div className='px-3 py-3'>
            <h2 className='section-title'>Find On Map</h2>
        </div>
        <div className='h-[420px] overflow-hidden rounded-lg'>
        <GoogleMapSection
        coordinates={listingDetail.coordinates}
        listing={[listingDetail]}
        />
        </div>
    </section>
    </div>
    <aside className='lg:sticky lg:top-28 lg:self-start'>
       <AgentDetail listingDetail={listingDetail} />
    </aside>
</div>
  )
}

export default Details
