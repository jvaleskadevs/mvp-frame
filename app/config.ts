// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://mvp-agent-exp.vercel.app';
export const AgentProxyWalletAddr = '0xD40C37eb6C491A8Dd66d2A2558A3F61c68907030';
export const USDCAddr = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';

