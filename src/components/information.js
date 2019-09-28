import React from 'react';

class CoinData extends React.Component {
    
  render () {
      return (
        <div>
            <p>Token Name: {this.props.name}</p>
            <p>Token Symbol: {this.props.symbol}</p>
            <p>price in USD: ${this.props.priceinusd}</p>
            <p>Circulating Supply: {this.props.circulatingsupply}</p>
            <p>Total Supply: {this.props.totalsupply}</p>
        </div>
        
      );
  }
    
}
export default CoinData