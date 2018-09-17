
import React, {Component} from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {


    //use object destructuring, data is a property containing all the
    //data needed for a single cryptocurrency, that we will
    // eventually pass in from the parent component.
    render() {
        var {
            id,
            name,
            symbol,
            price_usd,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
        } = this.props.data;

        //JSX markup to be returned for 1 cryptocurrency
        //price fixed to 2 decimals
        return (
            <li className={"cryptocurrency " + id}>
                <p className="cryptocurrency-name">{name} ({symbol})</p>
                <h1>${ (+price_usd).toFixed(2) }</h1>
                <p>{percent_change_1h}% 1hr</p>
                <p>{percent_change_24h}% 24hrs</p>
                <p>{percent_change_7d}% 7days</p>
            </li>
        );
    }
}

export default Cryptocurrency;