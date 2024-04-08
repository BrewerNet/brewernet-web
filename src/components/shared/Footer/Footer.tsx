import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuFacebook, LuInstagram, LuLinkedin,LuTwitter } from 'react-icons/lu';

import { TypographyLead, TypographySmall } from '../Typography/Typography';

export default function Footer() {
  return (
    <div className='bottom-0 left-0 static h-[15%] w-full bg-[#07C1FC] flex flex-col items-center'>
      <div className='flex flex-row justify-between align-top px-3 lg:px-[3%] max-w-[1280px] w-full'>
        <div className='w-[60%] h-[80%] left-0 flex flex-row justify-start items-center'>
          <Image src='/brewernet-favicon.png' alt="icon" width={100} height={100} className='h-full w-auto' />
          <TypographyLead className='font-bold text-white text-wrap w-2/3 lg:text-2xl'>
            Connections Make the World Better
          </TypographyLead>
        </div>
        <div className='w-fit flex flex-col items-end justify-evenly'>
          <div className='flex flex-row justify-evenly items-center text-white text-sm'>
            <Image src='/bmac-favicon.png' alt='bmac icon' width={50} height={50} />
            <Link href="/buy-me-a-coffee">
                <TypographySmall>Buy Me a Coffee</TypographySmall>
            </Link>
          </div>
          <div className='flex flex-row justify-evenly items-center text-white text-sm'>
            <Image src='/tcb-favicon.png' alt='tcb icon' width={50} height={50} />
            <Link href="/the-coffee-bean">
              <TypographySmall>The Coffee Bean</TypographySmall>
            </Link>
          </div>
          <div className='flex flex-row w-4/5 items-center justify-evenly text-white'>
            <LuFacebook />
            <LuTwitter />
            <LuLinkedin />
            <LuInstagram />
          </div>
        </div>
      </div>
      <div className='h-1/5 w-full border-t flex justify-center'>
        <div className='max-w-[1280px] w-full flex flex-row justify-between text-white text-xs px-3 lg:px-[3%] border-0'>
          <TypographySmall>@2024, Brewerner Pty Ltd.</TypographySmall>
          <TypographySmall>All Rights Reserved.</TypographySmall> 
        </div>
      </div>
    </div>
  );
}
