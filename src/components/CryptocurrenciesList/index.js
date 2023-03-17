// Write your JS code here

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {a} = props

  return (
    <div>
      <h1>Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div>
        <ul>
          <li>Coin Type</li>
          <li>USD</li>
          <li>EURO</li>
        </ul>

        <ul>
          {a.map(each => (
            <CryptocurrencyItem
              cryptocurrencyItemDetails={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
