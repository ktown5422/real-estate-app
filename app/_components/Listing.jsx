import { Bath, BedDouble, Heart, MapPin, Ruler, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import GoogleAddressSearch from './GoogleAddressSearch';
import { Button } from '@/components/ui/button';
import FilterSection from './FilterSection';
import Link from 'next/link';

function Listing({
    type,
    listing,
    handleSearchClick,
    searchedAddress,
    setBathCount,
    setBedCount,
    setParkingCount,
    setHomeType,
    setCoordinates
}) {
    const [address, setAddress] = useState();
    const resultLabel = type === 'Rent' ? 'rentals' : 'homes for sale';
    const formatPrice = (price) => price ? Number(price).toLocaleString('en-US') : 'Price on request';

    return (
        <div className='space-y-5'>
            <section className='surface rounded-lg p-4 sm:p-5'>
                <div className='mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
                    <div>
                        <div className='mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-xs font-bold uppercase text-primary'>
                            <Sparkles className='h-3.5 w-3.5' />
                            Curated {type === 'Rent' ? 'leases' : 'listings'}
                        </div>
                        <h1 className='text-3xl font-bold tracking-tight text-slate-950 md:text-5xl'>
                            Find your next place with sharper context.
                        </h1>
                        <p className='mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base'>
                            Search homes, compare essentials quickly, and keep the map in view while you browse.
                        </p>
                    </div>
                    <div className='grid grid-cols-3 gap-2 rounded-lg border border-slate-200 bg-white/80 p-2 text-center shadow-sm sm:min-w-[320px]'>
                        <div className='px-2 py-3'>
                            <p className='text-2xl font-bold text-slate-950'>{listing?.length || 0}</p>
                            <p className='text-xs font-semibold uppercase text-slate-500'>Active</p>
                        </div>
                        <div className='border-x border-slate-200 px-2 py-3'>
                            <p className='text-2xl font-bold text-slate-950'>Live</p>
                            <p className='text-xs font-semibold uppercase text-slate-500'>Map</p>
                        </div>
                        <div className='px-2 py-3'>
                            <p className='text-2xl font-bold text-slate-950'>2026</p>
                            <p className='text-xs font-semibold uppercase text-slate-500'>Style</p>
                        </div>
                    </div>
                </div>

                <div className='grid gap-3 lg:grid-cols-[1fr_auto]'>
                    <GoogleAddressSearch
                        value={address}
                        onChange={setAddress}
                        selectedAddress={(v) => {
                            searchedAddress(v);
                            setAddress(v);
                        }}
                        setCoordinates={setCoordinates}
                    />
                    <Button className="gap-2"
                        onClick={handleSearchClick}
                    >
                        <Search className='h-4 w-4' />
                        Search
                    </Button>
                </div>
            </section>

            <div className='surface rounded-lg p-3'>
                <div className='mb-3 flex items-center gap-2 px-1 text-sm font-bold text-slate-700'>
                    <SlidersHorizontal className='h-4 w-4 text-primary' />
                    Filters
                </div>
                <FilterSection
                    setBathCount={setBathCount}
                    setBedCount={setBedCount}
                    setParkingCount={setParkingCount}
                    setHomeType={setHomeType}
                />
            </div>

            <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
                <div>
                    <h2 className='section-title'>{address ? `${listing?.length || 0} results near ${address?.label}` : `Featured ${resultLabel}`}</h2>
                    <p className='text-sm text-slate-600'>Fresh inventory with the essentials visible at a glance.</p>
                </div>
                <span className='soft-pill w-fit'>{type === 'Rent' ? 'Monthly pricing' : 'Purchase listings'}</span>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3'>
                {listing?.length > 0 ? listing.map((item) => item?.listingImages[0]?.url && (
                    <Link href={'/view-listing/' + item.id} key={item.id}>
                        <article className='property-card cursor-pointer'>
                            <div className='relative'>
                                <Image
                                    src={item?.listingImages[0]?.url}
                                    width={800}
                                    height={240}
                                    className='h-[220px] w-full object-cover'
                                    alt={`Listing Image ${item.id}`}
                                />
                                <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent' />
                                <div className='absolute left-3 top-3 flex gap-2'>
                                    <span className='soft-pill'>{item?.propertyType || 'Home'}</span>
                                </div>
                                <button className='absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:text-primary' aria-label="Save listing">
                                    <Heart className='h-4 w-4' />
                                </button>
                                <div className='absolute bottom-3 left-3 text-white'>
                                    <h3 className='text-2xl font-bold tracking-tight'>${formatPrice(item?.price)}</h3>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <p className='flex min-h-[40px] gap-2 text-sm leading-5 text-slate-600'>
                                    <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                                    <span className='line-clamp-2'>{item.address}</span>
                                </p>
                                <div className='grid grid-cols-3 gap-2'>
                                    <div className='flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-2 text-sm font-semibold text-slate-700'>
                                        <BedDouble className='h-4 w-4' />
                                        {item?.bedroom}
                                    </div>
                                    <div className='flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-2 text-sm font-semibold text-slate-700'>
                                        <Bath className='h-4 w-4' />
                                        {item?.bathroom}
                                    </div>
                                    <div className='flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-2 text-sm font-semibold text-slate-700'>
                                        <Ruler className='h-4 w-4' />
                                        {item?.area}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))
                    : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className='h-[330px] w-full animate-pulse rounded-lg bg-white/70 shadow-sm'>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Listing;
