import Image, { StaticImageData } from 'next/image'
import React from 'react';

import { FlexContainer } from '../../../components/shared/layout/FlexContainer';
import { TypographyH3,TypographyLarge } from '../../../components/shared/Typography/Typography';
import { Button } from '../../../components/ui/button';

interface CardContainerProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  altText: string;
  buttonContent:string;
  isImageOnRight:boolean;
}
const CardContainer:React.FC<CardContainerProps> = ({ title, description, imageSrc, altText,buttonContent,isImageOnRight=false }) => {
  return (
    <FlexContainer classname={`px-10 md:${isImageOnRight?'':'translate-x-8'}`}>
      <Image src={imageSrc} alt={altText} sizes='33vw' className={`hidden md:block ${isImageOnRight?'order-last':''}`} width={500} height={500}/>
      <div className={`py-20 md:pr-10 max-w-2xl text-center md:text-left ${isImageOnRight ?'md:translate-x-8':''}`}>
        <TypographyH3 className='mb-8 border-none text-sky-400'>{title}</TypographyH3>
        <TypographyLarge className='mb-8 font-normal'>{description}</TypographyLarge>
        <Button variant='outline' className='text-sky-400 border-sky-400'>
          {buttonContent}
        </Button>
      </div>
    </FlexContainer>
  );
};

export default CardContainer;
