"use client"
import { UserButton, UserProfile } from '@clerk/nextjs'
import { Building2 } from 'lucide-react'
import React from 'react'
import UserListing from './_components/UserListing'

function User() {
  return (
    <main className='app-shell w-full py-8'>
        <h1 className='mb-5 text-4xl font-bold tracking-tight text-slate-950'>Profile</h1>
        <UserProfile>
            <UserButton.UserProfilePage
            label='My Listing'
            labelIcon={<Building2 className='h-5 w-5' />}
            url="my-listing"
            >
                <UserListing/>
            </UserButton.UserProfilePage>
        </UserProfile>
    </main>
  )
}

export default User
