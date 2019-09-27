import React from 'react';
import axios from 'axios';

class AxioCall extends React.Component {
    state = {
        word: 0
    }
    backCall = () => {
        console.log("sending")
        axios.get("http://localhost:3001/hi")
        .then(function (response) {
            console.log(response);
            let value = response.data;
            return value;
        })
        .then(value => {
            this.setState({ word: value});
            console.log(this.state.word);
        });
    }

  render () {
      return (
        <div>
            <button onClick={this.backCall}>I'm Useless</button>
            <p>{this.state.word}</p>
        </div>
        
      );
  }
    
}
export default AxioCall