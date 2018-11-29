import React from 'react';
import Books from '../books/books'

const BookList = ({ item, addToCart }) => {
    if(item.length>0){
    return(
    <ul>
       { item.map((x, y)=> <Books key={y} id={y} books = {x} addToCart = {addToCart}/> )}
    </ul>
)}else {
    return(
      <span></span>
    )
    }
}

      
export default BookList