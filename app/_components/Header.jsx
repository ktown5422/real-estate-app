"use client"
import { Button } from '@/components/ui/button'
import { SignOutButton, useUser } from '@clerk/nextjs'
import { Building2, ChevronDown, Home, LogIn, Menu, Plus, Search, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
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

  const navItems = [
    { label: 'Buy', href: '/', active: path == '/', icon: Home },
    { label: 'Rent', href: '/rent', active: path == '/rent', icon: Search },
    { label: 'Agents', href: '/agents', active: path == '/agents', icon: UserRound },
  ];

  return (
    <header className='fixed left-0 top-0 z-30 w-full border-b border-white/70 bg-white/80 backdrop-blur-xl'>
      <div className='app-shell flex h-20 items-center justify-between'>
      <div className='flex gap-4 md:gap-10 items-center'>
        <Link className='group flex items-center gap-3' href={'/'}>
          <span className='flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white shadow-[0_14px_32px_rgba(31,112,96,0.24)]'>
            <Building2 className='h-5 w-5' />
          </span>
          <span className='leading-tight'>
            <span className='block text-lg font-bold tracking-tight text-slate-950'>NestFind</span>
            <span className='hidden text-xs font-semibold uppercase text-slate-500 sm:block'>Modern homes</span>
          </span>
        </Link>

        <ul className='hidden rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-sm md:flex'>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} key={item.label}>
                <li className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${item.active ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`}>
                  <Icon className='h-4 w-4' />
                  {item.label}
                </li>
              </Link>
            )
          })}
        </ul>

        <div className='flex md:hidden'>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">
            <Menu className='h-6 w-6' />
          </Button>
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <Link href={'/add-new-listing'}>
          <Button className="hidden gap-2 md:flex"><Plus className='h-5 w-5' /> List a Home</Button>
        </Link>
        {isSignedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1.5 pr-3 shadow-sm transition hover:bg-white'>
                <Image src={user?.imageUrl} width={34} height={34} alt='user profile' className='rounded-full' />
                <ChevronDown className='h-4 w-4 text-slate-500' />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-52 rounded-lg">
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
            <Button variant="outline" className="gap-2"><LogIn className='h-4 w-4' /> Login</Button>
          </Link>
        )}
      </div>

      {menuOpen && (
        <div className='absolute left-4 right-4 top-[88px] z-10 flex flex-col rounded-lg border border-slate-200 bg-white p-2 shadow-xl md:hidden'>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} key={item.label}>
                <Button variant="ghost" className={`w-full justify-start gap-2 ${item.active ? 'bg-accent text-primary' : ''}`}>
                  <Icon className='h-4 w-4' />
                  {item.label}
                </Button>
              </Link>
            )
          })}
          <Link href={'/add-new-listing'} className='mt-2'>
            <Button className="w-full gap-2"><Plus className='h-4 w-4' /> List a Home</Button>
          </Link>
        </div>
      )}
      </div>
    </header>
  )
}

export default Header;
