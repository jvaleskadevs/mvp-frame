export const AgentProxyWalletABI = [{"type":"constructor","inputs":[{"name":"agentAddr","type":"address","internalType":"address"},{"name":"polywallet","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"CLAIM_FEE","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"PERCENTAGE_SCALE","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"USDC","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IERC20"}],"stateMutability":"view"},{"type":"function","name":"VESTING_PERIOD","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"balances","inputs":[{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"claimShares","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"claimingEnabled","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"collectAgentFees","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"collectedFees","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"deposit","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"depositsEnabled","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"getContractBalance","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getPoolInfo","inputs":[],"outputs":[{"name":"totalDeposits","type":"uint256","internalType":"uint256"},{"name":"currentBalance","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getUserBalance","inputs":[{"name":"user","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getUserShare","inputs":[{"name":"user","type":"address","internalType":"address"}],"outputs":[{"name":"userBalance","type":"uint256","internalType":"uint256"},{"name":"percentage","type":"uint256","internalType":"uint256"},{"name":"claimableAmount","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"lastPolyDepositAmount","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"polyDeposit","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"polyProxyWallet","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"polyWithdraw","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setClaimingStatus","inputs":[{"name":"_enabled","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setDepositsStatus","inputs":[{"name":"_enabled","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"timestamps","inputs":[{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"totalDeposits","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"ClaimingStatusChanged","inputs":[{"name":"enabled","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"vestingEnds","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"DepositsStatusChanged","inputs":[{"name":"enabled","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"FeesCollected","inputs":[{"name":"collector","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"PolyDeposit","inputs":[{"name":"polyWallet","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"PolyWithdrawn","inputs":[{"name":"polyWallet","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"SharesClaimed","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"fee","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"OwnableInvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"OwnableUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"}]},{"type":"error","name":"ReentrancyGuardReentrantCall","inputs":[]},{"type":"error","name":"USDCTransferError","inputs":[]}] as const;