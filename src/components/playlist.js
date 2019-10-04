import React, { Component } from 'react';

export default class Playlist extends Component {
  render () {
    const { songs } = this.props;
    const playlist = songs.map(song => {
      return (
        <p>{song.name}</p>
      )
    })
    return (
      <div>
        { playlist }
      </div>
    );
  }

  // componentDidMount() {
  //   fetch('http://localhost:8080/profile/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({username: data.displayName})
  //     })
  //     .catch(console.log)
  // }
}
