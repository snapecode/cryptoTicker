import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {

    state = {
        query: '',
    };

    //This allows re-renders on input being changed
    handleInputChange = () => {
        this.setState({
            query: this.searchbar.value
        })
    };

    render() {
        return (
            <form>
                <input placeholder="Search for a Currency..."
                       ref={input => this.searchbar = input}
                       onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default Searchbar
