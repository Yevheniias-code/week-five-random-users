import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: null
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0]})
    console.log(data.results[0])
  }



  render() {
    return (
      <div>
        {!this.state.person ? <p>Loading...</p> : 
        <div>
          <img src={this.state.person.picture.large} width="100px" alt="User image"/>
          <h1>{this.state.person.name.title}. {this.state.person.name.first} {this.state.person.name.last}</h1>
          <p>{this.state.person.email}</p>
        </div>
        }
      </div>
    )
  }
}

export default App;
