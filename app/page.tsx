import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'tx',
      label: 'send usdc',
      target: `${NEXT_PUBLIC_URL}/api/approve-tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/approve-tx`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/all_the_usdc.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'type the amount..',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/approve-tx`,
});

export const metadata: Metadata = {
  title: 'mvp',
  description: 'mvp agent is an experimental autonomous agent that can operate premier league (epl) games in polymarket',
  openGraph: {
    title: 'mvp',
    description: 'mvp agent is an experimental autonomous agent that can operate premier league (epl) games in polymarket',
    images: [`${NEXT_PUBLIC_URL}/all_the_usdc.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>mvp is farcaster frame</h1>
    </>
  );
}
