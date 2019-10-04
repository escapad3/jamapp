import React, { Component } from 'react';
import Playlist from './playlist';

export default class SearchBox extends Component {
  state = {
    searchString: '',
    songs:[]
  }

  handleChange = (event) => {
    this.setState({searchString: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({searchString: document.getElementById('searchBox').value});
    fetch('https://jam-box.herokuapp.com/search?searchBox=' + this.state.searchString)
      .then((response) => response.json())
      .then((data) => {
        this.setState({songs: data});
      })
      .catch(console.log);
  }

  render () {
    return (
      <div>
        <input type="text" name="searchBox" id="searchBox" refs="searchBox" onChange={this.handleChange} placeholder="Enter a song title to get a playlist!" />
        <input type="button" value="Go" onClick={this.handleSubmit} />
        <Playlist songs={this.state.songs} />
      </div>
    );
  }

}
