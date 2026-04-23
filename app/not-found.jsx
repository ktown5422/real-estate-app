import Link from 'next/link';
import { Compass, Home, Search } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

function NotFoundPage() {
  return (
    <main className='app-shell flex min-h-screen items-center justify-center py-10'>
      <section className='panel panel-pad w-full max-w-2xl text-center'>
        <div className='icon-badge'>
          <Compass className='h-6 w-6' />
        </div>
        <p className='eyebrow mx-auto mb-4 w-fit'>Houston Navigation Miss</p>
        <h1 className='text-4xl font-bold tracking-tight text-slate-950 md:text-5xl'>That page isn&apos;t on the map.</h1>
        <p className='mx-auto mt-4 max-w-xl section-copy'>
          The page you were looking for doesn&apos;t exist or may have moved. Head back to Houston listings, rentals, or local agents.
        </p>
        <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <Link href='/'>
            <Button className='w-full gap-2 sm:w-auto'>
              <Home className='h-4 w-4' />
              Browse Homes
            </Button>
          </Link>
          <Link href='/rent'>
            <Button variant="outline" className='w-full gap-2 sm:w-auto'>
              <Search className='h-4 w-4' />
              View Rentals
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
