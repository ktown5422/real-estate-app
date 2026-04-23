import { Button } from '@/components/ui/button';
import { Award, Building2, Mail, MapPin, Phone, ShieldCheck, Star, UserRound } from 'lucide-react';
import React from 'react';

const agents = [
  {
    id: 1,
    name: 'Maya Bennett',
    market: 'Houston Inner Loop',
    specialties: ['Luxury homes', 'Relocation', 'Seller strategy'],
    listings: 18,
    closedSales: 42,
    rating: 4.9,
    phone: '(713) 555-0142',
    email: 'maya@nestfind.com',
    accent: 'bg-emerald-50 text-emerald-700',
  },
  {
    id: 2,
    name: 'Jordan Alvarez',
    market: 'Katy and West Houston',
    specialties: ['First-time buyers', 'Town homes', 'New builds'],
    listings: 24,
    closedSales: 57,
    rating: 4.8,
    phone: '(281) 555-0184',
    email: 'jordan@nestfind.com',
    accent: 'bg-amber-50 text-amber-700',
  },
  {
    id: 3,
    name: 'Sofia Patel',
    market: 'Sugar Land and Missouri City',
    specialties: ['Family homes', 'Rentals', 'Negotiation'],
    listings: 15,
    closedSales: 39,
    rating: 4.9,
    phone: '(832) 555-0109',
    email: 'sofia@nestfind.com',
    accent: 'bg-sky-50 text-sky-700',
  },
  {
    id: 4,
    name: 'Ethan Brooks',
    market: 'Downtown and Midtown',
    specialties: ['Condos', 'Investors', 'Short-list tours'],
    listings: 21,
    closedSales: 48,
    rating: 4.7,
    phone: '(713) 555-0117',
    email: 'ethan@nestfind.com',
    accent: 'bg-rose-50 text-rose-700',
  },
];

function AgentsPage() {
  return (
    <main className='app-shell py-6 md:py-8'>
      <section className='grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] lg:items-start'>
        <div className='space-y-5'>
          <div className='inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-xs font-bold uppercase text-primary'>
            <UserRound className='h-3.5 w-3.5' />
            Houston agents
          </div>
          <div>
            <h1 className='text-4xl font-bold tracking-tight text-slate-950 md:text-5xl'>Meet the agents behind Houston&apos;s strongest local moves.</h1>
            <p className='mt-4 max-w-3xl text-base leading-7 text-slate-600'>
              Browse experienced Houston-area agents by market, compare specialties quickly, and connect with someone who fits the way you want to buy, sell, or rent.
            </p>
          </div>
          <div className='grid gap-3 sm:grid-cols-3'>
            <div className='rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm'>
              <p className='text-3xl font-bold text-slate-950'>4</p>
              <p className='mt-1 text-xs font-semibold uppercase text-slate-500'>Featured agents</p>
            </div>
            <div className='rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm'>
              <p className='text-3xl font-bold text-slate-950'>186</p>
              <p className='mt-1 text-xs font-semibold uppercase text-slate-500'>Closed sides</p>
            </div>
            <div className='rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm'>
              <p className='text-3xl font-bold text-slate-950'>4.8+</p>
              <p className='mt-1 text-xs font-semibold uppercase text-slate-500'>Average rating</p>
            </div>
          </div>
        </div>

        <div className='surface rounded-lg p-5 md:p-6'>
          <div className='flex items-start gap-4'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
              <ShieldCheck className='h-6 w-6' />
            </div>
            <div>
              <h2 className='text-lg font-bold text-slate-950'>Local guidance, less guesswork</h2>
              <p className='mt-2 text-sm leading-6 text-slate-600'>
                Each profile highlights Houston market focus, deal volume, and the kind of clients they serve best so you can shortlist faster.
              </p>
            </div>
          </div>
          <div className='mt-5 grid gap-3'>
            <div className='rounded-lg border border-slate-200 bg-white/75 p-4'>
              <div className='flex items-center gap-2 text-sm font-semibold text-slate-700'>
                <Award className='h-4 w-4 text-primary' />
                High-intent specialties
              </div>
              <p className='mt-2 text-sm leading-6 text-slate-600'>Relocation, investors, family homes, rentals, and new construction across Greater Houston.</p>
            </div>
            <div className='rounded-lg border border-slate-200 bg-white/75 p-4'>
              <div className='flex items-center gap-2 text-sm font-semibold text-slate-700'>
                <Building2 className='h-4 w-4 text-primary' />
                Neighborhood coverage
              </div>
              <p className='mt-2 text-sm leading-6 text-slate-600'>Inner Loop, Katy, Sugar Land, Midtown, and surrounding growth corridors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-10'>
        <div className='mb-5 flex items-end justify-between gap-4'>
          <div>
            <h2 className='section-title'>Featured Agents</h2>
            <p className='mt-2 text-sm text-slate-600'>People Houston buyers and renters can actually scan and compare in a minute.</p>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {agents.map((agent) => (
            <article key={agent.id} className='property-card flex h-full flex-col p-5'>
              <div className='flex items-start justify-between gap-3'>
                <div className={`flex h-14 w-14 items-center justify-center rounded-lg text-lg font-bold ${agent.accent}`}>
                  {agent.name.split(' ').map((part) => part[0]).join('')}
                </div>
                <div className='flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700'>
                  <Star className='h-3.5 w-3.5 fill-current text-amber-500' />
                  {agent.rating}
                </div>
              </div>

              <div className='mt-4'>
                <h3 className='text-xl font-bold tracking-tight text-slate-950'>{agent.name}</h3>
                <p className='mt-2 flex items-center gap-2 text-sm text-slate-600'>
                  <MapPin className='h-4 w-4 text-primary' />
                  {agent.market}
                </p>
              </div>

              <div className='mt-4 flex flex-wrap gap-2'>
                {agent.specialties.map((specialty) => (
                  <span key={specialty} className='soft-pill'>{specialty}</span>
                ))}
              </div>

              <div className='mt-5 grid grid-cols-2 gap-3'>
                <div className='rounded-lg bg-slate-100 p-3'>
                  <p className='text-2xl font-bold text-slate-950'>{agent.listings}</p>
                  <p className='text-xs font-semibold uppercase text-slate-500'>Active listings</p>
                </div>
                <div className='rounded-lg bg-slate-100 p-3'>
                  <p className='text-2xl font-bold text-slate-950'>{agent.closedSales}</p>
                  <p className='text-xs font-semibold uppercase text-slate-500'>Closed sales</p>
                </div>
              </div>

              <div className='mt-5 space-y-2 text-sm text-slate-600'>
                <p className='flex items-center gap-2'>
                  <Phone className='h-4 w-4 text-primary' />
                  {agent.phone}
                </p>
                <p className='flex items-center gap-2'>
                  <Mail className='h-4 w-4 text-primary' />
                  {agent.email}
                </p>
              </div>

              <div className='mt-5 flex gap-2'>
                <Button className='flex-1 gap-2'>
                  <Mail className='h-4 w-4' />
                  Contact
                </Button>
                <Button variant="outline" className='flex-1 gap-2'>
                  <Phone className='h-4 w-4' />
                  Call
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AgentsPage;
