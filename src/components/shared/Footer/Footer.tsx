import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu'
import { GoArrowUpRight } from 'react-icons/go'
import { TypographyH1, TypographyH3, TypographyH4, TypographySmall } from '../Typography/Typography'

function SocialLink({ href, children }) {
  return (
    <Link href={href} className='text-white hover:text-sub' aria-label={href}>
      <TypographyH4>{children}</TypographyH4>
    </Link>
  )
}

export default function Footer() {
  return (
    <div className='w-full bg-main px-8 py-4'>
      <div className='flex my-4 items-baseline justify-between'>
        <Link href='/contact'>
          <TypographyH1 className='text-sub hover:text-white flex w-full'>
            Contact us <GoArrowUpRight className='ml-3 my-auto' />
          </TypographyH1>
        </Link>
        <div className='flex space-x-4'>
          <SocialLink href='https://www.facebook.com'>
            <LuFacebook />
          </SocialLink>
          <SocialLink href='https://www.linkedin.com'>
            <LuLinkedin />
          </SocialLink>
          <SocialLink href='https://www.instagram.com'>
            <LuInstagram />
          </SocialLink>
          <SocialLink href='https://www.twitter.com'>
            <LuTwitter />
          </SocialLink>
        </div>
      </div>
      <hr className='w-full mx-auto bg-white rounded' />
      <div className='flex my-8 md:items-baseline md:flex-row md:justify-between flex-col gap-5 items-center'>
        <TypographyH3 className='italic text-white'>"Connections Make the World Better"</TypographyH3>
        <div className='flex gap-5'>
          <SocialLink href='/buy-me-a-coffee'>Buy Me a Coffee</SocialLink>
          <SocialLink href='/the-coffee-bean'>The Coffee Bean</SocialLink>
        </div>
      </div>
      <hr className='w-full mx-auto bg-white rounded' />
      <div className='flex mt-4 justify-between'>
        <TypographySmall className='text-white'>©2024 Brewernet Pty Ltd.</TypographySmall>
        <TypographySmall className='text-white'>ALL RIGHTS RESERVED</TypographySmall>
      </div>
    </div>
  )
}
