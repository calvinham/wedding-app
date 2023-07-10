import { faqIconImg, registryIconImg, rsvpIconImg } from '@/assets';

export type INavItem = {
  path: string;
  img: {
    src: string;
    dimensions: {
      height: number;
      width: number;
    };
  };
  minWidth: number;
  url?: string;
};

const navItems: INavItem[] = [
  {
    path: 'rsvp',
    img: {
      src: rsvpIconImg,
      dimensions: {
        height: 24,
        width: 34,
      },
    },
    minWidth: 89,
  },
  {
    path: 'faq',
    img: {
      src: faqIconImg,
      dimensions: {
        height: 24,
        width: 24,
      },
    },
    minWidth: 64,
  },
  {
    path: 'registry',
    img: {
      src: registryIconImg,
      dimensions: {
        height: 24,
        width: 20,
      },
    },
    minWidth: 113,
    url: 'https://www.myregistry.com/wedding-registry/ryann-woods-and-ryan-ham-chico-ca/3655387',
  },
];

export default navItems;
