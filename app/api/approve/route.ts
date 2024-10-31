import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body);

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }
  
  let state = {
    amount: +message.input || 0
  }
  if (!state.amount) return new NextResponse('Amount is not valid', { status: 500 }); 

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: "tx",
          label: "send usdc",
          target: `${NEXT_PUBLIC_URL}/api/tx`,
          postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/approved.png`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/approved`,
      state: {
        amount: state.amount
      }
    })
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
