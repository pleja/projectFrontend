import React from 'react';
import axios from 'axios';
import CoinData from './information.js';
import { Button } from 'react-bootstrap';
import '../App.css';


class AxioCall extends React.Component {
    state = {
        searched: false,
        query: "",
        circulatingSupply: 0,
        totalSupply:  0,
        name: "",
        symbol: "",
        priceInUsd: 0,
        marketCap: 0,
        lastUpdate: 0,
        latestTime: 0
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
                if (info[i].symbol === search || info[i].name === search || info[i].slug === search ) {
                    let price = info[i].quote.USD.price;
                    let date = info[i].last_updated;
                    let cap = info[i].quote.USD.market_cap;
                    let newDate = "";
                    let time = "";                    
                    for (let b = 0; b < date.length; b++) {
                        if (b < 10) {
                            newDate = newDate + date[b];

                        } else if (b > 10 && b < date.length - 5) {
                            time = time + date[b];
                        }
                    }
                    let shortPrice = self.removeDecimals(price);
                    let marketcap = self.removeDecimals(cap);
                    self.setState({
                        searched: true, 
                        circulatingSupply: info[i].circulating_supply,
                        totalSupply:  info[i].total_supply,
                        name: info[i].name,
                        symbol: info[i].symbol,
                        priceInUsd: shortPrice,
                        marketCap: marketcap,
                        latestDate: newDate,
                        latestTime: time
                    });
                    return;
                } else {
                    self.setState({ searched: false });
                }
            }
   
        }).catch(error => {
            console.log("error");
            
        });
    }
    
    removeDecimals = (num) => {
        let numbers = Math.round(num * 100) / 100;
        return numbers;
    }

    handleSearch = (event) => {
        event.preventDefault();
        let words = this.state.query;
        if (words.length === 3) {
            words = words.toUpperCase();
        }
        this.backpull(words);
    }
    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

  render () {
      return (
        <div className="workBox">
            <div className="Texts">Coin Market Cap Top 100</div>
            <div>
                <input className="divStyle" type="text" value={this.state.query} onChange={this.handleChange}></input>
                <Button onClick={this.handleSearch} variant="primary" size="lg" block> Search </Button>
            </div>
                
            
            
            {this.state.searched ? <CoinData 
                name={this.state.name}
                symbol={this.state.symbol}
                priceinusd={this.state.priceInUsd}
                marketcap={this.state.marketCap}
                circulatingsupply={this.state.circulatingSupply}
                totalsupply={this.state.totalSupply}
                latestdate={this.state.latestDate}
                latesttime={this.state.latestTime}
                 />: <p className='TextsTwo'>Please enter valid query</p>}

                

        </div>
        
      );
  }
    
}
export default AxioCall