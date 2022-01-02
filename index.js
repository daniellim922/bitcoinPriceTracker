const fetchBitcoinPrice = async () => {
	try {
		const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
		console.log(res.data.ticker.price);
	} catch (e) {
		console.log('ERROR', e);
	}
};
fetchBitcoinPrice();
