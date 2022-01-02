fetch('https://api.cryptonator.com/api/ticker/btc-usd')
	.then((res) => {
		console.log('response', res);
	})
	.catch((e) => {
		console.log('erroer!', e);
	});
