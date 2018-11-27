import React, { Component } from 'react';

class Header extends Component {
 
    render(){
        return (
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Mos Excellent Bookstore</a>
                <form class="form-inline my-2 my-lg-0">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-light my-2 my-sm-0 bg-dark" type="submit">Search</button>
    </form>
            </nav>
        )
    }
}
export default Header