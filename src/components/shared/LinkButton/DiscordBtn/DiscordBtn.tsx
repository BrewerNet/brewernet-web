import Link from 'next/link'
import React from 'react'
import { IoLogoDiscord } from "react-icons/io5";

const DiscordBtn= ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <div className='flex bg-[#07C1FC] text-white w-[300px] rounded-md py-3 px-2 gap-3 overflow-hidden items-center max-w-[250px] max-h-[50px] transition duration-500 hover:bg-white hover:border-[#07C1FC] hover:border-2 hover:text-[#07C1FC]'>
        <IoLogoDiscord className='w-1/5 h-auto' />
        <div className='text-center flex flex-col justify-center items-center w-full'>
          <p className=' font-bold text-xl'>Join Discord</p>
        </div>
      </div>
    </Link>
  )
}

export default DiscordBtn
