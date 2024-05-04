'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { TypographyH4 } from '../Typography/Typography'
import { LuMenu } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'
import { GoArrowUpRight } from 'react-icons/go'

function NavButton({ children, link, className = '' }) {
  return (
    <Link href={link} passHref>
      <button className={`inline-flex items-center bg-white hover:bg-main hover:text-white py-1 px-4 rounded ${className}`}>
        <TypographyH4 className='flex w-full'>{children}</TypographyH4>
      </button>
    </Link>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className='flex flex-wrap md:flex-nowrap items-center justify-between px-8 py-2'>
      <Link href='/' passHref>
        <button className='flex-initial'>
          <Image src='/logo/bn-logo-full.png' alt='BrewerNet Logo' width={100} height={100} />
        </button>
      </Link>
      <button data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center p-2 md:hidden text-main' onClick={toggleMenu}>
        {isOpen ? <RxCross1 size={36} /> : <LuMenu size={36} />}
      </button>
      <div
        className={`w-full gap-5 md:flex-grow ${isOpen ? 'flex' : 'hidden'} border-y-4 border-main py-5 md:border-none flex-col md:flex md:flex-row md:gap-8 justify-end items-center md:items-center`}
      >
        <NavButton link='/buy-me-a-coffee'>Buy Me a Coffee</NavButton>
        <NavButton link='/the-coffee-bean'>The Coffee Bean</NavButton>
        <NavButton link='/contact' className='md:border-2 md:border-main md:text-main'>
          contact us <GoArrowUpRight className='ml-1 my-auto' />
        </NavButton>
      </div>
    </div>
  )
}
