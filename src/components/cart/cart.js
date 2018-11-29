import React from "react"

const Cart = ({ item }) => {
  return item.map(x => (
    <div>
      <div>{x}</div>
      <hr />
    </div>
  ))
}
export default Cart
