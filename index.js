const fetchBitcoinPrice = async () => {
	try {
		const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
		let bitcoinPrice = document.querySelector('#bitcoinPrice');
		btcPrice = parseFloat(res.data.ticker.price).toFixed(2);
		bitcoinPrice.innerText = `$${btcPrice}`;
	} catch (e) {
		console.log('ERROR', e);
	}
};
fetchBitcoinPrice();
