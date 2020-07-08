import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render(){
    const gifs = [
      { id: "A6aHBCFqlE0Rq" },
      { id: "A6aHBCFqlE0Rq" }
    ];

    return (
      <div>
        <div className = "left-scene">
          <SearchBar />
          <div className = "selected-gif">
            <Gif id="A6aHBCFqlE0Rq"/>
          </div>
        </div>
        <div className = "right-scene">
          <GifList gifs = {gifs} />
        </div>
      </div>
    );
  }
}

export default App;