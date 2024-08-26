"use client"
import { Button } from '@/components/ui/button'
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import { Plus, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='p-6 px-4 md:px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>
      <div className='flex gap-4 md:gap-12 items-center'>
        <Link href={'/'}>
          <Image src={'/logo.svg'} width={100} height={0} alt='logo' className='w-auto h-auto' />
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-6 lg:gap-10'>
          <Link href={'/'} >
            <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path == '/' && 'text-primary'}`}>For Sell</li>
          </Link>
          <Link href={'/rent'} >
            <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path == '/rent' && 'text-primary'}`}>For Rent</li>
          </Link>
          <li className='hover:text-primary font-medium text-sm cursor-pointer'>Agent Finder</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='flex md:hidden'>
          <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className='h-6 w-6' />
          </Button>
        </div>
      </div>

      {/* User and Post Ad Section */}
      <div className='flex gap-2 items-center'>
        <Link href={'/add-new-listing'}>
          <Button className="hidden md:flex gap-2"><Plus className='h-5 w-5' /> Post Your Ad</Button>
        </Link>
        {isSignedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image src={user?.imageUrl} width={35} height={35} alt='user profile' className='rounded-full' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={'/user'}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/user#/my-listing'}>
                  My Listing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SignOutButton>Logout</SignOutButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href={'/sign-in'}>
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col md:hidden z-10'>
          <Link href={'/'} >
            <Button variant="ghost" className={`w-full text-left py-2 ${path == '/' ? 'text-primary' : ''}`}>
              For Sell
            </Button>
          </Link>
          <Link href={'/rent'} >
            <Button variant="ghost" className={`w-full text-left py-2 ${path == '/rent' ? 'text-primary' : ''}`}>
              For Rent
            </Button>
          </Link>
          <Button variant="ghost" className='w-full text-left py-2'>
            Agent Finder
          </Button>
        </div>
      )}
    </div>
  )
}

export default Header;
