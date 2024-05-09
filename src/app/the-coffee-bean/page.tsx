import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsBuildings } from 'react-icons/bs'
import { FaPeopleGroup } from 'react-icons/fa6'

import { PageProps } from '@/lib/interfaces'

import HeaderSection from '@/components/shared/HeaderSection'
import InfoCard from '@/components/shared/InfoCard'
import IntroSection from '@/components/shared/IntroSection'
import DiscordBtn from '@/components/shared/LinkButton/DiscordBtn'
import TitleSection from '@/components/shared/TitleSection'

const info = {
  headerSection: {
    headerText: 'The Coffee Bean',
    subHeaderText1: 'Bean there, done that, looking for more.',
    subHeaderText2: '“The Coffee Bean” is tailored for professional networking.',
    paragraphText:
      'Hosted on Discord. It acts as a hub for students to collaborate on innovative startup ideas. A notable component of this community is the mentorship program, where experienced professionals offer guidance on career-related topics to students. ',
    buttons: [<DiscordBtn href='https://discord.gg/jsm8FA8E' key='discord'/>]
  },
  titleSection: {
    imgSrc: '/logos/tcb-bubble-logo-full.png',
    imgAlt: "TCB's Logo",
    titlePart1: 'Connect, Collaborate,',
    titlePart2: 'Create, Succeed.',
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
    content:
      '“The Coffee Bean” is set to bridge the gap between university and the workforce. It will offer a place for graduate students to find expert guidance, seek partners for startup ventures, and keep abreast of the latest in job market trends. This platform is definitely going to be an invaluable tool in navigating your career path.',
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
    <div className='bg-white w-full'>
      <div className='bg-main rounded-b-lg md:rounded-b-3xl md:py-20 py-20 md:px-10 px-5'>
        <HeaderSection {...info.headerSection} />
        <hr className='my-10 md:my-20' />
        <TitleSection {...info.titleSection} />
        <div className='mt-20 flex flex-col items-center md:items-stretch md:flex-row md:justify-around gap-10'>
          {info.infoCards.map(card => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
      <IntroSection {...info.introSection} />
    </div>
  )
}

export default TheCoffeeBean
