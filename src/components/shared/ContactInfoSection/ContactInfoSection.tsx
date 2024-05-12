'use client'
import React, { useState } from 'react'
import { TypographyH4, TypographyParagraph } from '@/components/shared/Typography/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faHandshake } from '@fortawesome/free-solid-svg-icons'

const ContactInfoSection = ({ description }) => {
  const [selected, setSelected] = useState('query')

  const handleButtonClick = (button: string) => {
    setSelected(button)
  }

  return (
    <div className='flex flex-col text-center items-center justify-center py-5 px-2 md:px-10 md:py-10 bg-main'>
      <div className='flex items-center justify-center flex-row overflow-x-hidden h-1/4'>{/* Image components will be inserted here, if needed */}</div>
      <div className='flex flex-col justify-center items-center pt-10 pb-5 px-10 w-full'>
        <div className='flex justify-around w-full h-16 max-w-2xl bg-gray bg-opacity-40 rounded-2xl'>
          <button
            onClick={() => handleButtonClick('query')}
            className={`${selected === 'query' ? 'flex-1 bg-gray rounded-2xl w-full h-full' : 'flex-1 rounded-md'}`}
          >
            <TypographyH4 className='text-white'>Query</TypographyH4>
          </button>
          <button
            onClick={() => handleButtonClick('affiliate')}
            className={`${selected === 'affiliate' ? 'flex-1 bg-gray rounded-2xl w-full h-full' : 'flex-1 rounded-md'}`}
          >
            <TypographyH4 className='text-white'>Affiliate</TypographyH4>
          </button>
        </div>
        <div className='relative py-8'>
          <FontAwesomeIcon
            icon={selected === 'query' ? faCircleInfo : faHandshake}
            className='absolute w-60 h-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-sub text-opacity-10'
          />
          <div className='flex flex-col justify-center items-center text-left w-full py-10 md:flex-row md:gap-x-10 md:max-w-3xl'>
            <TypographyParagraph className='text-white z-10'>{description[selected].desc}</TypographyParagraph>
          </div>
        </div>
        <button
          className='bg-gray bg-opacity-40 text-sub py-4 px-8 hover:text-main hover:bg-sub rounded-2xl'
          onClick={() => (window.location.href = `mailto:${description[selected].email}`)}
        >
          <TypographyH4>{description[selected].email}</TypographyH4>
        </button>
      </div>
    </div>
  )
}

export default ContactInfoSection
