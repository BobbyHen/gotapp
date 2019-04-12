import React, { Component } from 'react';
var unirest = require('unirest');


const quotesSection = {
  paddingTop: "150px",
  height: "400px",
  width: "60%",
  color: "#333"
}


class Translator extends Component {

  state = {
    loading: true,
  }
  
 
  async componentDidMount(){
    
    unirest.post("https://dothraki.p.rapidapi.com/dothraki.json?text=hello")
    .header("X-RapidAPI-Host", "dothraki.p.rapidapi.com")
    .header("X-RapidAPI-Key", "56503966f2mshddf3450c6228902p1dad62jsne219e041516d")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .end(function (result) {
      console.log(result.body);
      
      
    });

    this.setState({loading: false });
    
  }
  render(){
    return(
      <div className="quotesSection">
        <em>{this.state.loading ? <div> Loading...</div> : <div> bbbbbbbbb </div>}</em>
      </div>
    );

  }

}



export default Translator;
