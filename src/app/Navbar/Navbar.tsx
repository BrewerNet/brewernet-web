import Image from 'next/image'
import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className= "h-[10%] w-full flex flex-row items-center justify-between px-2 py-1 ">
      <div className = "h-auto w-fit flex flex-row items-center">
        <Image src = "/BrewernetIcon.png" alt = "IconImage" width={75} height={75}></Image>
        <div className='text-lg font-bold pb-1'>Brewernet</div>
      </div>
      <div className = "w-[40%] h-fit flex flex-row items-center justify-evenly">
        <div className='w-[70%] h-fit flex flex-row justify-evenly font-[Mitr] font-semibold'>
          <div>Buy Me a Coffee</div>
          <div>The Coffee Bean</div>
        </div>
        <Image src = "/ConnectButton.png" alt = "connectButton"  width = {200} height={75} className='w-fit h-[35px]'/>
      </div>
    </div>
  )
}
