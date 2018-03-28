function crytoMoneda(data) {
    return `
    <tr>
      <td>
        ${data.name}
      </td>
      <td>
        ${data.rank}
      </td>
      <td>
        ${data.symbol}
      </td>
      <td>
        ${data.price_usd}$ 
      </td>
      <td>
        ${data.price_btc}
      </td>
      <td>
        ${data.total_supply}$ 
      </td>
      <td>
        ${data.available_supply}$ 
      </td>
      <td>
        ${notNull(data.max_supply)}
      </td>
      <td>
        ${data.market_cap_usd}$ 
      </td>
      <td ${color(data.percent_change_1h)}>
        ${data.percent_change_1h}% 
      </td>
      <td ${color(data.percent_change_24h)}>
        ${data.percent_change_24h}%
      </td>
      <td ${color(data.percent_change_7d)}>
        ${data.percent_change_7d}%
      </td>
    </tr>
  `
}

function notNull(n) {
    if (n === null) return ''
    return n
}

function color(number) {
    const result = Number(number)
    if (result < 0) {
        return `
        style='color: red;'
      `
    } else {
        return `
        style='color: green;'
      `
    }
}

const coins = document.getElementById('c')
$('#send').click(() => {
    coins.innerHTML = ''
    let limit = Number($('#limit').val())
    let start = Number($('#start').val())
    fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=${limit}&start=${start}`).then((data) => {
        console.log(data)
        data.json().then((data) => {
            data.forEach(c => {
                coins.innerHTML += crytoMoneda(c)
            })
        })
    })
})