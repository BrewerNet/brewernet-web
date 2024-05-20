import Image from 'next/image'

import { PageProps } from '@/lib/interfaces'

import { Button } from '@/components/ui/button'


const Page: React.FC<PageProps> = () => {
  return (
    <main>
      <section className='flex my-[240px]'>
        <div>
          <div className='text-primary text-center text-[64px] font-main font-medium py-[108px]'>BrewerNet</div>
          <div className='relative '>
            <div className='bg-primary text-white align-middle font-sub text-[24px] font-medium w-[300px] text-center p-[20px] mx-32'>
              <div className=' bg-slate-400 w-20 h-20 block rounded-full ' />
              Have Coffee With us <span> {'>'}</span>
            </div>
          </div>
        </div>

        <div>
          <span> "</span>
          <span> Connection Make the World Better</span>
          <span> A community uses compassionate tech for innovative life improvements and a brighter future.</span>
        </div>
      </section>

      <div>
        <span> The Coffee Bean </span>
        <span> # community</span>
        <div> Connect, Collaborate, Create, Succeed</div>
        <Image src='https://picsum.photos/1920/1080?random=1' alt='hero' width={800} height={290} />
        <div> .. </div>
        <div>
          <span>The Coffee Bean</span> is a social networking community on Discord created to provide students with a space to discuss homework. This server is completely
          free and open to students from all educational institutions.
        </div>
        <Button variant="outline"> Learn More +</Button>
      </div>
    </main>
  )
}

export default Page
