/**
 * This ABI is trimmed down to just the functions we expect to call for the
 * sake of minimizing bytes downloaded.
 */
const abi = [
  {
    type: 'function',
    name: 'approve',
    inputs: [
      { type: 'address', internalType: 'address' },
      { type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  }
] as const;

export default abi;
