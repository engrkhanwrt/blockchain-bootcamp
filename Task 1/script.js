const enableBtn = document.getElementById('enable-btn');
const toAddress = document.getElementById('add'); 
const etherAmount = document.getElementById('ether'); 
const sendBtn = document.getElementById('send');
let account;
async function detectMetamask() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
};


function etherToHex(etherAmount) {
  const wei = 1000000000000000000
  let etherAmontValue = etherAmount * wei;
  etherAmontValue = etherAmontValue. toString(16.);
  etherAmontValue = '0x'+ etherAmontValue;
  console.log(etherAmontValue)
  return etherAmontValue
}
enableBtn.addEventListener('click', detectMetamask)
sendBtn.addEventListener('click', ()=>{
    etherAmontValue = etherToHex(etherAmount.value)
    ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: account,
          to: toAddress.value,
          value: etherAmontValue,
          gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
          gas: '0x55F0', // customizable by user during MetaMask confirmation.
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
})
