import React from 'react';
import axios from 'axios';

class AxioCall extends React.Component {
    state = {
        query: "",
        circulatingSupply: 0,
        totalSupply:  0,
        name: "",
        symbol: "",
        priceInUsd: 0
    }
    backpull = (search) => {
        console.log("sending")
        var self = this;
        axios({
            method: 'get',
            url: "http://localhost:3001/hi",
        }).then(function (response) {
            let info = response.data.data;
            console.log(info);
            for (var i = 0; i < info.length; i++) {
                console.log(info[i]);
                if (info[i].symbol === search ) {
                    console.log(info[i]);
                    self.setState({ 
                        circulatingSupply: info[i].circulating_supply,
                        totalSupply:  info[i].total_supply,
                        name: info[i].name,
                        symbol: info[i].symbol,
                        priceInUsd: info[i].quote.USD.price
                    });
                    return;
                }
            }

            
            
            
        }).catch(error => {
            console.log("error");
            
        });
    }
    handleSearch = (event) => {
        event.preventDefault();
        this.backpull(this.state.query);
    }
    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

  render () {
      return (
        <div>
            <form onSubmit={this.handleSearch}>
                <input type="text" value={this.state.query} onChange={this.handleChange}></input>
                <button >I'm Useless</button>
            </form>
            <p>Token Name: {this.state.name}</p>
            <p>Token Symbol: {this.state.symbol}</p>
            <p>price in USD: ${this.state.priceInUsd}</p>
            <p>Circulating Supply: {this.state.circulatingSupply}</p>
            <p>Total Supply: {this.state.totalSupply}</p>
        </div>
        
      );
  }
    
}
export default AxioCall