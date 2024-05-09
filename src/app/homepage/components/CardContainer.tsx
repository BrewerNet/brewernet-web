import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react';

import { TypographyH3,TypographyLarge } from '../../../components/shared/Typography/Typography';
import { Button } from '../../../components/ui/button';

interface CardContainerProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  altText: string;
  buttonContent:string;
  linkHref:string;
  isImageOnRight:boolean;
}
const CardContainer:React.FC<CardContainerProps> = ({ title, description, imageSrc, altText,buttonContent,linkHref,isImageOnRight=false }) => {
  return (
    <div className={`flex w-full px-10 md:${isImageOnRight?'':'translate-x-8'}`}>
      <Image src={imageSrc} alt={altText} sizes='33vw' className={`object-cover hidden lg:block ${isImageOnRight?'order-last':''}`} width={500} height={500}/>
      <div className={`flex-1 py-20 md:pr-10 text-center lg:text-left ${isImageOnRight ?'md:translate-x-8':''}`}>
        <TypographyH3 className='mb-8 border-none text-sky-400'>{title}</TypographyH3>
        <TypographyLarge className='mb-8 font-light'>{description}</TypographyLarge>
        <Button variant='outline' className='text-sky-400 border-sky-400' asChild>
          <Link href={linkHref}>
            {buttonContent}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CardContainer;
