import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

const GIPHYAPIKEY = "xUH8Z5fEtwemLT8VgPGSdKtaLqvfd6y6"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "A6aHBCFqlE0Rq"
    }
  }

  search = (query) => {
    giphy(GIPHYAPIKEY).search({
      q:  query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // Res contains gif data!
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render(){
    return (
      <div>
        <div className = "left-scene">
          <SearchBar searchFunction = {this.search}/>
          <div className = "selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className = "right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;