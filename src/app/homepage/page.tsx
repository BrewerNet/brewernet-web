import Image from 'next/image'
import React from 'react'

import { PageProps } from '@/lib/interfaces'

import CardContainer from './components/CardContainer'
import TeamSection from './components/TeamSection'
import { cardData, teamData } from './homepageData'
import { FlexContainer } from '../../components/shared/layout/FlexContainer'
import { TypographyH1, TypographyH2, TypographyLarge } from '../../components/shared/Typography/Typography'
import banner from '../../../public/banner.svg'

const Homepage: React.FC<PageProps> = () => {

  return (
    <div>
      <div className='mb-24'>
        <FlexContainer classname='relative'>
          <Image src={banner} alt='banner image' sizes='100vw' className='w-full h-auto ' width={1440} height={740} />
          <div className='absolute text-white text-center w-5/6'>
            <TypographyH2 className='font-normal  mb-6 md:mb-12 border-none'>BrewerNet</TypographyH2>
            <TypographyH1 className='mb-2 md:mb-6'>Connections Make the World Better</TypographyH1>
            <TypographyLarge className='font-normal'>
              A community uses compassionate tech for innovative life improvements and a brighter future.
            </TypographyLarge>
          </div>
        </FlexContainer>
      </div>
      <FlexContainer>
        <TypographyH1>Product</TypographyH1>
      </FlexContainer>
      {cardData.map((card, index) => (
      <CardContainer
        key={index}
        title={card.title}
        description={card.description}
        imageSrc={card.imageSrc}
        altText={card.altText}
        buttonContent={card.buttonContent}
        linkHref={card.linkHref}
        isImageOnRight={card.isImageOnRight}
      />
    ))}
      <FlexContainer classname='mb-16 '>
        <TypographyH1>Team</TypographyH1>
      </FlexContainer>
      <div>
        {teamData.map(team => (
          <TeamSection key={team.title} title={team.title} images={team.images} />
        ))}
      </div>
    </div>
  )
}

export default Homepage
