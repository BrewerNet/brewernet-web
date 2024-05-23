import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsBuildings } from 'react-icons/bs'
import { FaPeopleGroup } from 'react-icons/fa6'

import { PageProps } from '@/lib/interfaces'

import HeaderSection from '@/components/shared/HeaderSection/HeaderSection'
import InfoCard from '@/components/shared/InfoCard/InfoCard'
import IntroSection from '@/components/shared/IntroSection/IntroSection'
import DiscordBtn from '@/components/shared/LinkButton/DiscordBtn'
import TitleSection from '@/components/shared/TitleSection/TitleSection'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrewerNet | TCB'
}

const info = {
  headerSection: {
    headerText: 'The Coffee Bean',
    subHeaderText1: 'Bean there, done that, looking for more.',
    subHeaderText2: (
      <>
        <div>“The Coffee Bean”</div> is tailored for professional networking.
      </>
    ),
    paragraphText:
      'Hosted on Discord. It acts as a hub for students to collaborate on innovative startup ideas. A notable component of this community is the mentorship program, where experienced professionals offer guidance on career-related topics to students. ',
    buttons: [<DiscordBtn href='https://discord.gg/jsm8FA8E' key='discord' />]
  },
  titleSection: {
    imgSrc: '/logos/tcb-bubble-logo-full.png',
    imgAlt: "TCB's Logo",
    titlePart1: 'Network, Engage,',
    titlePart2: 'Share, Grow.',
    paragraphText: 'A Career-Focused Discord Community for Work, Acdamic and Beyond'
  },
  infoCards: [
    {
      icon: <BiWorld size='50px' />,
      title: 'Networking',
      description: 'Connect with job seekers, seniors, and HR to exchange strategies and understand market trends.'
    },
    {
      icon: <FaPeopleGroup size='50px' />,
      title: 'Career guidance ',
      description: 'Seek advice and guidance on career decisions and pathways from experienced consultants.'
    },
    {
      icon: <BsBuildings size='50px' />,
      title: 'Start-up',
      description: 'Access chances to collaborate in startups, benefiting from diverse expertise for project success.'
    }
  ],
  introSection: {
    content: (
      <>
        <span>
          <span className='font-extrabold text-main'>“The Coffee Bean”</span> is set to bridge the gap{' '}
        </span>
        <span>between university and the workforce. It will </span>
        <span>
          offer a place for <span className='font-write text-main underline font-bold italic'>graduate students to find expert </span>
        </span>
        <span>
          <span className='font-write text-main underline font-bold italic'>guidance, seek partners for startup ventures, and keep </span>
        </span>
        <span>
          <span className='font-write text-main underline font-bold italic'>abreast of the latest in job market trends</span>. This{' '}
        </span>
        <span>platform is definitely going to be an invaluable</span>
        <span>
          tool in <span className='font-write text-red'>navigating your career path</span>.
        </span>
      </>
    ),
    icons: [
      { src: '/icons/icon-6.png', alt: 'Icon 1' },
      { src: '/icons/icon-7.png', alt: 'Icon 2' },
      { src: '/icons/icon-8.png', alt: 'Icon 3' },
      { src: '/icons/icon-9.png', alt: 'Icon 4' },
      { src: '/icons/icon-10.png', alt: 'Icon 5' }
    ],
    link: 'Join TCB Discord',
    href: 'https://discord.gg/jsm8FA8E'
  }
}

const TheCoffeeBean: React.FC<PageProps> = () => {
  return (
    <div className='bg-main w-full'>
      <div className='bg-main py-20 lg:px-10 md:px-8 px-5 max-w-[1024px] mx-auto'>
        <HeaderSection {...info.headerSection} />
        <hr className='my-10 md:my-20' />
        <TitleSection {...info.titleSection} />
        <div className='mt-10 flex flex-col items-center lg:items-stretch lg:flex-row md:justify-around gap-10'>
          {info.infoCards.map(card => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
      <div className='bg-white'>
        <IntroSection {...info.introSection} />
      </div>
    </div>
  )
}

export default TheCoffeeBean
