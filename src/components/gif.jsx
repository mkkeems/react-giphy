import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    console.log(event.target);
    // this.props.searchFunction(event.target.value);
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;

    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif