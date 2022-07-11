import NothingHere from './NothingHere'
import CartItem from './CartItem'
import {useForceUpdate} from './helpers'
import React from "react"

const Cart = React.memo((props) => {
    const forceUpdate = useForceUpdate();
    if (!(props.items.length+props.courseItems.length))
      return <NothingHere test="no"/>
    return <div className="cart">
      <div className="cartTitle">Jobs Applied</div>
      <div className="cartlist">
        {
          props.items.map(function (item, i) {
            return <CartItem type={"Jobs"} page={props.page} setPrev={props.setPrev} setPage={props.setPage} setProdInfo={props.setProdInfo} key={i} in={i} item={item} update={forceUpdate} cart={props.items} setCart={props.setCart}/>})
        }
      </div>
      <div className="cartTitle">Courses Enrolled</div>
      <div className="cartlist">
        {
          props.courseItems.map(function (item, i) {
            return <CartItem type={"Courses"} page={props.page} setPrev={props.setPrev} setPage={props.setPage} setProdInfo={props.setProdInfo} key={i} in={i} item={item} update={forceUpdate} cart={props.courseItems} setCart={props.setCourseCart}/>})
        }
      </div>      
    </div>
  })
  export default Cart;