import React, {Component} from 'react';

class Callback extends Component {
  state = {
    username: 'test'
  }

  render () {
    return (
      <p>
      {this.state.username}
      </p>
    );
  }

  componentDidMount() {
    fetch('http://localhost:8080/profile/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({username: data.displayName})
      })
      .catch(console.log)
  }
}

export default Callback;
