import React, { Component } from "react"
import "./App.css"
import Header from "../header/header"
import Footer from "../footer/footer"
import BookList from "../BookList/BookList"
import Cart from "../cart/cart"
import Total from "../total/total"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      cart: []
    }
  }
  addToCart = values => {
    console.log(values)
    return this.setState({
      ...this.state,
      cart: this.state.cart.concat(values)
    })
  }
  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/books")
    const json = await response.json()
    //waiting on API
    this.setState({ books: json })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <BookList item={this.state.books} addToCart={this.addToCart} />
          <div className="list-group-item">
            <div className="col-md-6">
              <h4>
                <u>Cart</u>
              </h4>
              <Cart addToCart={this.addToCart} item={this.state.cart} />
              <Total item={this.state.cart} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
