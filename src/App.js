import React, {Component} from 'react';
import Callback from './components/callback';
// import Navbar from './Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    url: '/'
  }

  render () {
    return (
      <div className="App">
        <Route path='/callback' component={Callback} />
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:8080')
      .then((response) => response.text())
      .then((data) => {
        // this.setState({url: data});
        // window.location.assign(this.state.url);
        window.location.assign(data);
      })
      .catch(console.log)
  }
}

export default App;
