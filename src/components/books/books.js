import React from "react";

const Books =  ({ books, addToCart }) => {
    
    const addItem = (ev) => {
        let values=[]
        values.push(ev.target.value)
        addToCart(values)
    }

    return (
        <div className="list-group-item">
        <div className = "col-md-6">
        <div>{books.title}</div>
        <div>{books.subtitle}</div>
        <div>{books.author}</div>  
        <div>${books.price}.00</div>
        <br/>
        <button onClick = {addItem} value = {books.title} id ={books.id}>Add to Cart</button> 
        </div>
        </div>
        
    )
}

export default Books