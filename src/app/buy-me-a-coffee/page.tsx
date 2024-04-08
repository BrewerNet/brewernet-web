import React from 'react'
import { FaGear } from 'react-icons/fa6';
import { GiCoffeeCup } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";

import { PageProps } from '@/lib/interfaces'

import HeroSection from '@/components/shared/HeroSection/HeroSection';
import { FlexContainer } from '@/components/shared/layout/FlexContainer';
import RootContainer from '@/components/shared/layout/RootContainer';
import AppleStoreBtn from '@/components/shared/LinkButton/AppleStoreBtn';
import GooglePlayBtn from '@/components/shared/LinkButton/GooglePlayBtn';
import { TypographyH1, TypographyH2,TypographyH4 } from '@/components/shared/Typography/Typography';
import DescriptionBox from '@/components/ui/DescriptionBox';
import TitleWrapper from '@/components/ui/TitleWrapper';
import WhatYouCanDoSubSection from '@/components/ui/WhatYouCanDoSubSection';


const BuyMeACoffee: React.FC<PageProps> = () => {
  return (
    <RootContainer>
      <TitleWrapper>
        <TypographyH1> Buy Me a Coffee</TypographyH1>
        <TypographyH4 className='font-thin italic mt-5'>“A coffee chat that changes your life.”</TypographyH4>
      </TitleWrapper>

      <HeroSection filepath='/logo/tcb-favicon-c.png' image_description='the-coffee-bean-icon'>
        <div className='flex flex-col justify-center items-center'>
          <TypographyH2 className='border-b-0 mt-1'>Connecting Over Coffee:</TypographyH2>
          <TypographyH2 className='border-b-0 mt-1'>Networking in the Digital Age</TypographyH2>
          <FlexContainer classname='mt-16 gap-10'>
            <AppleStoreBtn href="" />
            <GooglePlayBtn href="" />
          </FlexContainer>
        </div>
      </HeroSection>

      <DescriptionBox section_title='About'>
        <p>"Buy Me a Coffee" is a cutting-edge digital platform transforming the way people network by merging the ease of online interaction with the genuineness of in-person meetings. In a world increasingly reliant on virtual connections, this platform motivates users, especially students and young professionals, to engage in valuable face-to-face discussions over coffee. It's designed to foster authentic relationships, encourage knowledge exchange, and improve networking and social abilities through informal coffee-based meetups.</p>
      </DescriptionBox>

      <div className='justify-center mt-20'>
        <TypographyH2 className='border-b-0 mt-1 text-center'>What you can do</TypographyH2>
        <div className='justify-center flex'>
          <div className='grid grid-cols-1 md:grid-cols-3 w-[1200px] mt-10 gap-5'>
            <WhatYouCanDoSubSection icon={FaGear} section_title="Setup"> 
              <p>Set Up Your Profile and Digital Business Card.</p>
            </WhatYouCanDoSubSection>
            <WhatYouCanDoSubSection icon={IoPeople} section_title="Pairing">
              <p>Connections based on interests, industries, and goals, supporting tag or name searches.</p>
            </WhatYouCanDoSubSection>
            <WhatYouCanDoSubSection icon={GiCoffeeCup} section_title="Coffee Chat"> 
              <p>Upon mutual agreement, a shared calendar facilitates easy scheduling of time and location.</p>
            </WhatYouCanDoSubSection>
          </div>
        </div>
      </div>
      


      <div className='flex flex-col mt-20 mb-20'>
        <TypographyH2 className='border-b-0 mt-1 text-center'>Why BMaC</TypographyH2>
        <div className='justify-center flex w-full'>
          <div className='w-[1200px] mt-10 text-center'>
            <p>"Buy Me a Coffee" is a cutting-edge digital platform transforming the way people network by merging the ease of online interaction with the genuineness of in-person meetings. In a world increasingly reliant on virtual connections, this platform motivates users, especially students and young professionals, to engage in valuable face-to-face discussions over coffee. It's designed to foster authentic relationships, encourage knowledge exchange, and improve networking and social abilities through informal coffee-based meetups.</p> </div>
        </div>
      </div>


    </RootContainer>
  );
}

export default BuyMeACoffee
