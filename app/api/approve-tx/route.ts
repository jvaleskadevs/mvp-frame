import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData } from 'viem';
import { polygon } from 'viem/chains';
import USDCABI from '../../_contracts/USDCABI';
import { AgentProxyWalletAddr, USDCAddr } from '../../config';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: process.env.NEYNAR_API_KEY });

  if (!isValid) return new NextResponse('Message not valid', { status: 500 });  

  let state = {
    amount: +message.input || 0
  }
  if (!state.amount) return new NextResponse('Amount is not valid', { status: 500 }); 

  const data = encodeFunctionData({
    abi: USDCABI,
    functionName: 'approve',
    args: [AgentProxyWalletAddr, BigInt(state.amount)]
  });

  const txData: FrameTransactionResponse = {
    chainId: `eip155:${polygon.id}`,
    method: 'eth_sendTransaction',
    params: {
      abi: [],
      data,
      to: USDCAddr,
      value: '0'
    }
  };
  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
