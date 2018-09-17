
//First, Lets import React, an Component from react.
//then, import stylesheet
//using axios to pull data from coinmarketcap
import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

class Tickers extends Component {

    //use constructor function to create a component
    //Pass in properties via props
    //state of the component locked to this.state
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },{
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },{
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },{
                    id: "ripple",
                    name: "Ripple",
                    symbol: "XRP",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                }
            ]
        };
    }

    //React offers us a way to execute code right when a
    // component is in view with the componentDidMount() function
    //first fetchCryptocurrencyData, then set an interval every minute
    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 1000);
    }

    //a method that fetches cryptocurrency data.
    //the method uses  Axios to make a GET request to
    //their API, then filter what we want.
    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "litecoin", "ripple", "bitcoin-cash" ];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({data: result});
            })
            .catch(err => console.log(err));
    }



    //render() function returns JSX needed to render the component.
    //key property is needed for React to keep track of each li.
    //We are using the map function for arrays to iterate through each cryptocurrency,--
    // creating li elements, and then outputting the cryptocurrency's id price.
    render() {
        var tickers = this.state.data.map((currency) =>
      <Cryptocurrency data={currency} key={currency.id} />
        );
        //return the div with our 'ul' and tickets and source credit
        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p>Information updated every minute courtesy of coinmarketcap.com</p>
            </div>
        );
    }
}

export default Tickers;