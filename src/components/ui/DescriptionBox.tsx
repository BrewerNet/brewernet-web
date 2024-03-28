import React, { ReactNode } from 'react'


interface IDescriptionProps {
    section_title: string
    children: ReactNode
}
  
const DescriptionBox: React.FC<IDescriptionProps> = ({ section_title, children }) => {
    return(
        <div className='w-full flex justify-center'>
            <div className="bg-[#07C1FC] rounded-lg p-10 md:p-15 ml-5 mr-5 md:max-w-[1200px] my-8 relative">

                <div className="border-[#07C1FC] border-4 bg-white p-2 rounded-[20px] absolute left-10 h-16 -top-8 min-w-[150px] flex items-center justify-center">
                    <p className="font-bold text-xl text-[#07C1FC] text-center">{section_title}</p>
                </div>
                <div className="mt-3 text-white text-lg">
                    {children}
                </div>

            </div>

        </div>
    )
}

export default DescriptionBox
