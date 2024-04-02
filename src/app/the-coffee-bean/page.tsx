import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

import { PageProps } from '@/lib/interfaces'

import HeroSection from '@/components/shared/HeroSection/HeroSection'
import { FlexContainer } from '@/components/shared/layout/FlexContainer'
import RootContainer from '@/components/shared/layout/RootContainer'
import DiscordBtn from '@/components/shared/LinkButton/DiscordBtn'
import { TypographyH1,TypographyH2, TypographyH4 } from '@/components/shared/Typography/Typography'
import DescriptionBox from '@/components/ui/DescriptionBox'
import TitleWrapper from '@/components/ui/TitleWrapper'
import WhatYouCanDoSubSection from '@/components/ui/WhatYouCanDoSubSection'

const TheCoffeeBean: React.FC<PageProps> = () => {
  return (
    <RootContainer>
      <TitleWrapper>
        <TypographyH1> The Coffee Bean</TypographyH1>
        <TypographyH4 className='font-thin italic mt-5'>"Bean there, done that, looking for more"</TypographyH4>
      </TitleWrapper>

      <HeroSection filepath='/logo/tcb-favicon-c.png' image_description='the-coffee-bean-icon'>
        <div>
          <TypographyH2 className='border-b-0 mt-1'>A Student-Focused</TypographyH2>
          <TypographyH2 className='border-b-0 mt-1'>Discord Community For</TypographyH2>
          <TypographyH2 className='border-b-0 mt-1'>Academia and Beyond</TypographyH2>
          <FlexContainer classname='mt-16 gap-10'>
            <DiscordBtn href="" />
          </FlexContainer>
        </div>
      </HeroSection>

      <DescriptionBox section_title='About'>
        <p>“The Coffee Bean”, hosted on Discord, is tailored for student networking. It acts as a hub for students to collaborate on innovative startup ideas. A notable component of this community is the mentorship program, where experienced professionals offer guidance on career-related topics to students. Moreover, it functions as an incubator for student-led startups, providing essential advice and assistance in job hunting. Accessible and free of charge, this server is open to students from diverse academic institutions.</p>
      </DescriptionBox>

      <div className='justify-center mt-20'>
        <TypographyH2 className='border-b-0 mt-1 text-center'>What you can do</TypographyH2>
        <div className='justify-center flex'>
          <div className='grid grid-cols-1 md:grid-cols-3 w-[1200px] mt-10 gap-5'>
            <WhatYouCanDoSubSection icon={TbWorld} section_title="Networking"> 
              <p>Engage with other job seekers to share strategies and grasp market trends.</p>
            </WhatYouCanDoSubSection>
            <WhatYouCanDoSubSection icon={FaHandshakeAngle} section_title="Career Guidance">
              <p>Gain advice and insights from seasoned consultants on career queries.</p>
            </WhatYouCanDoSubSection>
            <WhatYouCanDoSubSection icon={FaBuilding} section_title="Startup"> 
              <p>Access chances to collaborate in startups, benefiting from diverse expertise for project success.</p>
            </WhatYouCanDoSubSection>
          </div>
        </div>
      </div>
      


      <div className='flex flex-col mt-20 mb-20'>
        <TypographyH2 className='border-b-0 mt-1 text-center'>What you can do</TypographyH2>
        <div className='justify-center flex w-full'>
          <div className='w-[1200px] mt-10 text-center'>
            <p>“The Coffee Bean” is set to bridge the gap between university and the workforce. It will offer a place for graduate students to find expert guidance, seek partners for startup ventures, and keep abreast of the latest in job market trends. This platform is definitely going to be an invaluable tool in navigating your career path.</p>
          </div>
        </div>
      </div>


    </RootContainer>
  )
}

export default TheCoffeeBean
