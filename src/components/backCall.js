import React from 'react';
import axios from 'axios';

class AxioCall extends React.Component {
    state = {
        word: 0
    }
    backpull = () => {
        console.log("sending")
        var self = this;
        axios.get("http://localhost:3001/hi")
        .then(function (response) {
            let info = response.data;
            console.log(info);
            let specific = info[0].name;
            console.log(specific)
            //this.setState({ word: specific });
            return specific;
            //let value = response.data;
            //return response;
        })
        .then(function (specific) {
            console.log(specific);
            //this.valueUpdate(specific);
            self.setState({ word: specific });
        })
        .catch(value => {
            console.log("error");
            //this.setState({ word: value});
            //console.log(this.state.word);
        });
    }
    valueUpdate = (data) => {
        this.setState({ word: data });
    }
    keyPress = () => {
        //let apiData = this.backpull();
        //console.log(this.backpull);
    }

  render () {
      return (
        <div>
            <button onClick={this.backpull}>I'm Useless</button>
            <p>{this.state.word}</p>
        </div>
        
      );
  }
    
}
export default AxioCall