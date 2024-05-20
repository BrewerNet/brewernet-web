'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

import styles from './IntroSection.module.css'

import { IntroSectionProps } from '@/lib/interfaces'

import { TypographyH3 } from '@/components/shared/Typography/Typography'

const IntroSection: React.FC<IntroSectionProps> = ({ content, icons, link, href }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      { root: null, threshold: 0.2 }
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div ref={ref} className='bg-white w-full'>
      <div className='max-w-[1024px] mx-auto flex flex-col-reverse lg:flex-row lg:px-20 md:px-20 px-8 py-20 gap-10 lg:items-center'>
        <div className='flex flex-col justify-center mx-auto gap-10'>
          <p className={`${styles.intro} ${isVisible ? styles.animateStart : styles.animateDisappear}`}>{content}</p>
          <Link className='hover:text-main md:self-start self-center' href={href}>
            <TypographyH3 className='w-full flex border-b-2 border-black hover:border-main'>
              {link} <GoArrowUpRight className='ml-1 my-auto' />
            </TypographyH3>
          </Link>
        </div>
        <div className='flex flex-row justify-evenly lg:flex-col lg:justify-center lg:items-center'>
          {icons.map((icon, index) => (
            <div key={index}>
              <Image src={icon.src} alt={icon.alt} width={100} height={100} className='w-[40px] lg:w-[80px] lg:mb-10' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntroSection
