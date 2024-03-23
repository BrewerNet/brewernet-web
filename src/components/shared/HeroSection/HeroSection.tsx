import Image from 'next/image'
import React, { ReactNode } from 'react'

import { DEFAULT_IMAGE_HEIGHT, DEFAULT_IMAGE_WIDTH } from '@/lib/constant'

import { FlexContainer } from '../layout/FlexContainer'

interface HeroProps {
  filepath: string
  image_description?: string
  children: ReactNode
}

const HeroSection: React.FC<HeroProps> = ({ filepath, image_description, children }) => {
  return (
    <div className='py-10'>
      <FlexContainer>
        <div className='grid grid-cols-2 gap-10'>
          <div className='w-1/2 flex items-center justify-center mx-auto'>
            <Image src={filepath} alt={image_description || ''} width={DEFAULT_IMAGE_WIDTH} height={DEFAULT_IMAGE_HEIGHT} className='w-full' />
          </div>
          <div className='text-center'>{children}</div>
        </div>
      </FlexContainer>
    </div>
  )
}

export default HeroSection
