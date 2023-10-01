import useShowReceptionDetails from '@/hooks/reception/useShowReceptionDetails';
import { faqIconImg, registryIconImg, rsvpIconImg } from '@/assets';
import { SLUGS } from '@/components/App/slugs';

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

const REGISTRY_URL =
  'https://www.myregistry.com/wedding-registry/ryann-woods-and-ryan-ham-chico-ca/3655387';

export default function useNavItems() {
  const showRecpetionDetails = useShowReceptionDetails();

  const navItems: INavItem[] = [
    {
      path: SLUGS.rsvp,
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
      path: SLUGS.faq,
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
      url: REGISTRY_URL,
    },
  ];

  if (!showRecpetionDetails) {
    return navItems;
  }

  navItems[0].path = SLUGS.reception;
  return navItems.filter((item) => item.path !== SLUGS.faq);
}
