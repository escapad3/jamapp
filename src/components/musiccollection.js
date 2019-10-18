import React, { Component } from 'react';

export default class MusicCollection extends Component {
  render () {
    const { playlists } = this.props;
    const collection = playlists.map(playlist => {
      return (
        <p>{playlist.name}</p>
      )
    })
    return (
      <div>
        { collection }
      </div>
    );
  }
}
