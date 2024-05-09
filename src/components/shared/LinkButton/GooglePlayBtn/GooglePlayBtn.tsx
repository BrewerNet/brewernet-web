import Link from 'next/link'
import React from 'react'
import { FaGooglePlay } from 'react-icons/fa6'

const GooglePlayBtn = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <div className='flex bg-black text-white w-[200px] max-w-[250px] max-h-[50px] rounded-md py-3 px-2 gap-3 overflow-hidden'>
        <FaGooglePlay className='w-1/5 h-auto' />
        <div className='text-center flex flex-col justify-center items-center font-main'>
          <div>Download on the </div>
          <div className='font-bold text-xl'>Google Play</div>
        </div>
      </div>
    </Link>
  )
}

export default GooglePlayBtn
