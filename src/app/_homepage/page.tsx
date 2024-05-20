'use client'

import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

import { PageProps } from '@/lib/interfaces'

import { Card, CardContent } from '@/components/ui/card'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Carousel } from '@/components/ui/carousel'

import CardContainer from './components/CardContainer'
import TeamSection from './components/TeamSection'
import { cardData, teamData } from './homepageData'
import { FlexContainer } from '../../components/shared/layout/FlexContainer'
import { TypographyH1 } from '../../components/shared/Typography/Typography'



const StoryCarousel = () => {

  const AUTO_PLAY_INTERVAL = 6000
  return (
    <Carousel plugins={[Autoplay({ delay: AUTO_PLAY_INTERVAL })]} opts={{ loop: true }} className='max-w-[1440px] mx-auto'>
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className='border-transparent bg-primary w-full h-auto aspect-video'>
              <CardContent className='flex aspect-auto items-center justify-center p-6'>
                <img src={`https://picsum.photos/1920/1080?random=${index}`} alt={`Slide ${index}`} className='max-w-[500px] w-full h-auto' />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

const Homepage: React.FC<PageProps> = () => {
  return (
    <div>
      <StoryCarousel />
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
