import React, { Component } from 'react';
import './App.css';
import Search from "./Components/Search";
import GifImages from "./Components/GifImages"


const API_KEY = "2U6R013PQ5OeUsINDe3w7NXaQWihI78S";

class App extends Component {
  state = {
    images : []
  }
  onEnterinput = async (e) =>{
    const gifvalue = e.target.elements.gifvalue.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?key=${API_KEY}&q=${gifvalue}`)
    const data = await api_call.json();
    this.setState({
        images: data.data
    })
    console.log(this.state.images);
  } 

  componentDidMount=() =>{
    const json = localStorage.getItem("images");
    const images =  JSON.parse(json);
    this.setState({images})
  }
  componentDidUpdate=() =>{
    const images = JSON.stringify(this.state.images);
    localStorage.setItem("images",images )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Search onEnterinput={this.onEnterinput}/>
            <GifImages  gifImg={this.state.images}/>
        </header>
      
      </div>
    );
  }
}

export default App;
