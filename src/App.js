import React, { Component } from 'react';
import Header from './components/Header';
import DishGrid from './components/DishGrid';
import SearchBar from './components/SearchBar';
import data from "./dummyData";
import './App.css';

class App extends Component {
  state = {
    filterTerm: '',
  }

  handleInputChange = event => {
    this.setState({
      filterTerm: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar value={this.state.filterTerm}
        handleInputChange={this.handleInputChange}
        />
        <DishGrid data={data} />
      </div>
    );
  }
}

export default App;
