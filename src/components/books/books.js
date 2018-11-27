import React from "react";

const Books = ({ item }) => {
    return (
        <div className="list-group-item">
        <div className = "row">
        <div className = "col-md-6">
        <div>{this.state.books.title}</div>
        <div>{this.state.books.subtitle}</div>
        <div>{this.state.books.author}</div>   
        </div>
        </div>
        </div>
    )
}

export default Books