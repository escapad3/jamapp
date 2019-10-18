// import React, { Component } from 'react';
// import Playlist from './playlist';
//
// export default class SearchBox extends Component {
//   state = {
//     searchString: '',
//     songs:[]
//   }
//
//   handleChange = (event) => {
//     this.setState({searchString: event.target.value});
//   }
//
//   handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('https://jam-box.herokuapp.com/playlist?name=' + 'liked')
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({songs: data});
//       })
//       .catch(console.log);
//   }
//
//   render () {
//     return (
//       <div>
//         <input type="button" value="V" onClick={this.handleSubmit} />
//         <Playlist songs={this.state.songs} />
//       </div>
//     );
//   }
//
// }
