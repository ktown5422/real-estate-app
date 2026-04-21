import { Button } from '@/components/ui/button'
import { Mail, ShieldCheck, UserRound } from 'lucide-react'
import React from 'react'

function AgentDetail({ listingDetail }) {
  return (
    <div className='surface my-0 rounded-lg p-5'>
      <div className='mb-5 flex items-center gap-4'>
        <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary'>
          <UserRound className='h-7 w-7' />
        </div>
        <div className='min-w-0'>
          <p className='text-xs font-bold uppercase text-slate-500'>Listing contact</p>
          <h2 className='truncate text-lg font-bold text-slate-950'>{listingDetail?.createdBy}</h2>
        </div>
      </div>
      <div className='mb-5 rounded-lg border border-slate-200 bg-white/70 p-3 text-sm text-slate-600'>
        <div className='flex items-center gap-2 font-semibold text-slate-800'>
          <ShieldCheck className='h-4 w-4 text-primary' />
          Verified owner channel
        </div>
        <p className='mt-2 leading-6'>Ask about tour times, disclosures, and next steps directly from this listing.</p>
      </div>
      <Button className="w-full gap-2"><Mail className='h-4 w-4' /> Send Message</Button>
    </div>
  )
}

export default AgentDetail
