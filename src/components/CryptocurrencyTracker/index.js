// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import CryptocurrenciesList from '../CryptocurrenciesList'
// import {async} from 'rxjs'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({cryptocurrencyList: formattedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyList, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader" className="bg-container-loader">
            <Loader type="TailSpin" color="##ffffff" height={50} width={50} />
          </div>
        ) : (
          <CryptocurrenciesList a={cryptocurrencyList} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
