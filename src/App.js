import React from 'react';
import './App.css';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      rndNum: Math.floor(Math.random() * 100),
      link: ""
    };
    this.handleClick = this.handleClick.bind(this);
 };
  
  handleClick() { fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then((results)=>results.json()).then((result)=>{
    let index = Math.floor(Math.random() * 100);
      this.setState({
        quote: result.quotes[this.state.rndNum].quote,
        author: result.quotes[this.state.rndNum].author,
        rndNum: index,
        link: "https://twitter.com/intent/tweet?text="+result.quotes[this.state.rndNum].quote+" -"+result.quotes[this.state.rndNum].author
      });
    });
  }

  render() {
    const bodyStyle = {
      textAlign: "center",
      border: "solid 5px black",
      borderRadius: "5em",
      backgroundColor: "#3CAEA3",
      width: "75%",
      margin: "auto",
      boxShadow: "2px 2px 10px black"
    }
    const h1Style = {
      color: "blue",
      padding: ".5em",
      textShadow: "0px 0px 10px white"
    }
    const textStyle = {
      padding: "1em",
      fontWeight: "bold",
      fontFamily: 'Merienda, cursive'
    }
    const btnStyle = {
      padding: "1em",
      margin: "1em",
      backgroundColor: "blue",
      color: "white",
      borderRadius: "1em",
      boxShadow: "2px 2px 10px black"
    }
    return (
      <div style={bodyStyle}>
        <h1 style={h1Style}>Random Quote Generator</h1>
        <div id="quote-box">
          <p id="text" style={textStyle}>"{this.state.quote}"</p>
          <p id="author" style={textStyle}> - {this.state.author}</p>
          <button onClick={this.handleClick} id="new-quote" style={btnStyle}>New Quote</button>
          <button style={btnStyle}><a id="tweet-quote" href={this.state.link} target="_blank"><i class="fab fa-twitter" style={{color: "white"}}></i></a></button>
        </div>
      </div>
    );
  }
};

export default MyApp;
