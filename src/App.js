import React, {Component} from 'react';
import Callback from './components/callback';
// import Navbar from './Navbar';
import SearchBox from './components/searchbox';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    url: '/',
    songs: []
  }

  render () {
    return (
      <div className="App container">
        <SearchBox />
        <Route path='/callback' component={Callback} />
        <a href={this.state.url}>Link</a>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jam-box.herokuapp.com')
      .then((response) => response.text())
      .then((data) => {
        this.setState({url: data});
        // window.location.assign(this.state.url);
        // window.location.assign(data);
      })
      .catch(console.log)
  }
}

export default App
;
