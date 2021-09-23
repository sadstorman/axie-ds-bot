const { default: fetch } = require('node-fetch');
const fechtSLP = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/smooth-love-potion`

    const resp = await fetch(url);
    if (!resp.ok) throw 'No se pudo realizar la peticion...';

    const { market_data } = await resp.json();
    const { current_price, price_change_percentage_24h } = market_data;
    const { usd } = current_price;

    return { usd, price_change_percentage_24h };
}

const intervaloSLPprice = (client) => {
    setInterval(() => {
        fechtSLP().then((resp) => {
            client.user.setActivity(`${resp.usd.toFixed(3)}$ => ${parseInt(resp.price_change_percentage_24h).toFixed(1)}%`);
        });
    }, 60000);
};

module.exports = {
    fechtSLP,
    intervaloSLPprice
}
