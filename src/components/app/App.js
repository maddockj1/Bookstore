import React, { Component } from 'react';
import './App.css';
import Header from '../header/header'
import Footer from '../footer/footer'
import BookList from '../BookList/BookList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books:[]
    }

  }
  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    //waiting on API
    this.setState({ books: json });
  }

  render() {
    return (
      <div className="App">
      <Header/>
      
      <BookList item = {this.state.books}/>
      

      <Footer/>
      </div>
    );
  }
}

export default App;
