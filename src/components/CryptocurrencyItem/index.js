// Write your JS code here
const CryptocurrencyItem = props => {
  const {cryptocurrencyItemDetails} = props
  const {
    usdValue,
    euroValue,
    currencyName,
    currencyLogo,
  } = cryptocurrencyItemDetails

  return (
    <li>
      <img src={currencyLogo} alt={currencyName} />
      <p>{currencyName}</p>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
