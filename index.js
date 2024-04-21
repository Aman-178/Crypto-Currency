const bitcoinPrice = document.getElementById('bitcoinprice');
const ethereumPrice = document.getElementById('enthereumprice');
const dogecoinPrice = document.getElementById('dogcoinprice');

function updatePrice() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data. Please check your API or network.');
            }
            return response.json();
        })
        .then(data => {
            bitcoinPrice.textContent = data.bitcoin.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            ethereumPrice.textContent = data.ethereum.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            dogecoinPrice.textContent = data.dogecoin.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        })
        .catch(error => {
            console.error('Error:', error.message);
            bitcoinPrice.textContent = 'Unavailable';
            ethereumPrice.textContent = 'Unavailable';
            dogecoinPrice.textContent = 'Unavailable';
        });
}

updatePrice();
