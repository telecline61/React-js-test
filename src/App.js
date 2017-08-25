import React, { Component} from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Posts from './components/Posts';
import Footer from './components/Footer';

class App extends Component {
    constructor() {
    super();
    //states for mag post array and filter options
    this.state = {
     magazines: [],
     options: [
        {
          name: 'All',
          value: '',

        },
        {
          name: '1970s',
          value: '4',
        },
        {
          name: '1980s',
          value: '3',
        },
    ],
    testState: 'testing...'

   }
 }
//fetch the posts
componentDidMount() {
    fetch(this.props.dataUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          magazines: res
        })
      })
}
//onChange function for options
selectOption(event) {
  this.setState({
      value: event.target.value
  });
}
   render() {

    return (
      <div className="App">
        <Header />
        <Filter
          options={this.state.options}
          selectOption={this.selectOption.bind(this)}
          />
        <Posts
          magazines={this.state.magazines}
          options={this.state.options}
          value={this.state.value}
          />
      <div className="clearfix"></div>
      <Footer />

      </div>
    );
  }
}

export default App;
