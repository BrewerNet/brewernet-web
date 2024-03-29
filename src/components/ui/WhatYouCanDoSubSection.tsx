import React, { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'


interface ISubSectionProps {
    icon: IconType
    section_title: string
    children: ReactNode
}

const WhatYouCanDoSubSection: React.FC<ISubSectionProps> = ({ icon, children }) => {
    return (
        <div className='w-full'>
            <div className="bg-[#07C1FC] rounded-lg p-10 md:p-15 ml-5 mr-5 md:max-w-[1200px] my-8 relative">

                <div className="border-0 bg-[#07C1FC] p-2 absolute w-[100px] h-[100px] rounded-full -top-[50px] left-1/2 translate-x-[-50px] flex justify-center items-center">
                    {icon({ size: 50, color: 'white' })}
                </div>
                <div className="mt-3 text-white text-lg h-[100px]">
                    {children}
                </div>

            </div>


        </div>
    )
}

export default WhatYouCanDoSubSection
