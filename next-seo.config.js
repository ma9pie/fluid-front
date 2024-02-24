import {
  DESCRIPTION,
  OG_IMAGE,
  TITLE,
  TWITTER_USERNAME,
  URL,
} from '@/constants';

const seoConfig = {
  canonical: URL,
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    images: [
      {
        url: OG_IMAGE,
        alt: 'og image',
      },
    ],
  },
  twitter: {
    site: TWITTER_USERNAME,
    handle: TWITTER_USERNAME,
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
