import Link from 'next/link'
import React from 'react'
import { FaApple } from 'react-icons/fa6'

const AppleStoreBtn = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <div className='flex bg-black text-white w-[200px] max-w-[250px] max-h-[50px] rounded-md py-3 px-2 gap-3 overflow-hidden'>
        <FaApple className='w-1/5 h-auto' />
        <div className='text-center flex flex-col justify-center items-center font-main'>
          <div className='font-thin'>Download on the </div>
          <div className='font-bold text-xl'>App Store</div>
        </div>
      </div>
    </Link>
  )
}

export default AppleStoreBtn
