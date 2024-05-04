import bmacLogo from '../../../public/logo/bmac-app-logo-full.png'
import tcbLogo from '../../../public/logo/tcb-app-logo-full.png'
import placeholderImage from '../../../public/place-holder-image.png'

export const teamData = [
  {
    title: 'Marketing',
    images: [
      { src: placeholderImage, alt: 'Marketing Image 1' },
      { src: placeholderImage, alt: 'Marketing Image 2' },
      { src: placeholderImage, alt: 'Marketing Image 3' }
    ]
  },
  {
    title: 'Research',
    images: [
      { src: placeholderImage, alt: 'Research Image 1' },
      { src: placeholderImage, alt: 'Research Image 2' },
      { src: placeholderImage, alt: 'Research Image 2' }
    ]
  },
  {
    title: 'IT',
    images: [
      { src: placeholderImage, alt: 'IT Image 1' },
      { src: placeholderImage, alt: 'IT Image 2' },
      { src: placeholderImage, alt: 'IT Image 2' }
    ]
  },
  {
    title: 'Design',
    images: [
      { src: placeholderImage, alt: 'Design Image 1' },
      { src: placeholderImage, alt: 'Design Image 2' }
    ]
  }
]
export const cardData = [
  {
    title: 'The Coffee Bean',
    description:
      'The Coffee Bean is a social networking community on Discord created to provide students with a space to discuss homework, share campus life, and connect with teammates for academic projects, side projects, or startup ventures. This server is completely free and open to students from all educational institutions.',
    imageSrc: tcbLogo,
    altText: 'tcb-favicon-c',
    buttonContent: 'about TCB',
    linkHref: 'the-coffee-bean',
    isImageOnRight: false
  },
  {
    title: 'Buy Me a Coffee',
    description:
      'Buy Me a Coffee is an innovative platform designed to revolutionize networking by blending digital connections with real-world interactions. Our goal is to encourage individuals to engage in meaningful conversations over coffee, fostering genuine relationships and knowledge sharing.',
    imageSrc: bmacLogo,
    altText: 'bmac-logo',
    buttonContent: 'about BMac',
    linkHref: 'buy-me-a-coffee',
    isImageOnRight: true
  }
]
