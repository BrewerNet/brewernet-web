import Link from 'next/link'
import React from 'react'
import { IoLogoDiscord } from 'react-icons/io5'

import { TypographyH3 } from '@/components/shared/Typography/Typography'

const DiscordBtn = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <div className='flex bg-sub text-main w-[300px] rounded-md py-3 px-2 gap-3 overflow-hidden items-center max-w-[250px] max-h-[50px] hover:bg-main hover:sub hover:border-2 hover:border-sub hover:text-sub'>
        <IoLogoDiscord className='w-1/5 h-auto' />
        <div className='text-center flex flex-col justify-center items-center w-full'>
          <TypographyH3 className='font-main'>JOIN US</TypographyH3>
        </div>
      </div>
    </Link>
  )
}

export default DiscordBtn
