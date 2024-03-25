import Image from 'next/image'
import React from 'react'

import { PageProps } from '@/lib/interfaces'

import { FlexContainer } from '@/components/shared/layout/FlexContainer'

import { TypographyH1 } from '../../components/shared/Typography/Typography'
import banner from '../../../public/banner.svg'
const Homepage: React.FC<PageProps> = () => {
  return (
    <div>
      <div>
        <FlexContainer classname='relative'>
          <Image src={banner} alt='banner image' sizes='100vw' className='w-full h-auto ' />
          <div className='absolute text-white text-center w-1/2 '>
            <div className='lg:text-5xl md:text-3xl mb-12'>BrewerNet</div>
            <div className='lg:text-6xl md:text-4xl  px-12 md:px-6 lg:px-12 mb-7'>Connections Make the World Better</div>
            <div className='lg:text-3xl md:text-lg'>A community uses compassionate tech for innovative life improvements and a brighter future.</div>
          </div>
        </FlexContainer>
      </div>
      <FlexContainer classname='mb-24 '>
        <TypographyH1>Product</TypographyH1>
      </FlexContainer>
    </div>
  )
}

export default Homepage
