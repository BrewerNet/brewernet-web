'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'

import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      console.log(open)
      if (window.innerWidth > 768) setOpen(false)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <>
      <div className={styles.navBar}>
        <div className='h-auto w-fit flex flex-row items-center'>
          <Image src='/BrewernetIcon.png' alt='IconImage' width={75} height={75}></Image>
          <div className='text-lg font-bold pb-1'>Brewernet</div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttons}>
            <div className='px-1'>Buy Me a Coffee</div>
            <div className='px-1'>The Coffee Bean</div>
          </div>
          <Image src='/ConnectButton.png' alt='connectButton' width={200} height={75} className='w-fit h-[35px] ' />
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <LuMenu className='h-[35px] w-[35px]' />
          </div>
        </div>
      </div>
      {open && (
        <div className={styles.menu}>
          <RxCross1 onClick={() => setOpen(false)} className='w-[35px] h-[35px] absolute right-10 top-10' />
          <div className='p-5 font-[Mitr] font-semibold'>Buy Me a Coffee</div>
          <div className='p-5 font-[Mitr] font-semibold'>The Coffee Bean</div>
        </div>
      )}
    </>
  )
}
