import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu'

import { SocialLinkProps } from '@/lib/interfaces'

import { TypographyH1, TypographyH3, TypographyH4, TypographySmall } from '../Typography/Typography'

function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <Link href={href} className='text-white hover:text-sub' aria-label={href}>
      <TypographyH4>{children}</TypographyH4>
    </Link>
  )
}

export default function Footer() {
  return (
    <div className='w-full bg-main py-4 md:px-10 px-5'>
      <div className='flex my-4 items-baseline justify-between'>
        <Link href='/contact'>
          <TypographyH1 className='text-sub hover:text-white flex w-full'>
            Contact us <GoArrowUpRight className='ml-3 my-auto' />
          </TypographyH1>
        </Link>
        <div className='flex space-x-4'>
          <SocialLink href='https://www.linkedin.com/company/brewernet/'>
            <LuLinkedin />
          </SocialLink>
          <SocialLink href='https://www.instagram.com'>
            <LuInstagram />
          </SocialLink>
        </div>
      </div>
      <hr className='w-full mx-auto bg-white rounded' />
      <div className='flex my-8 md:items-baseline md:flex-row md:justify-between flex-col gap-5 items-center'>
        <TypographyH4 className='italic text-white font-write'>"Connections Make the World Better"</TypographyH4>
        <div className='flex gap-5'>
          <SocialLink href='/buy-me-a-coffee'>Buy Me a Coffee</SocialLink>
          <SocialLink href='/the-coffee-bean'>The Coffee Bean</SocialLink>
        </div>
      </div>
      <hr className='w-full mx-auto bg-white rounded' />
      <div className='flex mt-4 justify-between'>
        <TypographySmall className='text-gray'>©2024 BrewerNet.co</TypographySmall>
        <TypographySmall className='text-gray'>ALL RIGHTS RESERVED</TypographySmall>
      </div>
    </div>
  )
}
