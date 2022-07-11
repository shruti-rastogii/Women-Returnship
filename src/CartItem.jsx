import React from "react"

const CartItem = React.memo((props)=>{
    return <div className="cartitem">
      <div onClick={()=>{props.setPrev(props.page); props.type==="Jobs"?props.setPage("info"):props.setPage("courseInfo"); props.setProdInfo(props.item); props.update()}} style={{cursor: "pointer"}}><img height="60px" width="54px" src={props.item.image}/></div>
      <div onClick={()=>{props.setPrev(props.page); props.type==="Jobs"?props.setPage("info"):props.setPage("courseInfo"); props.setProdInfo(props.item); props.update()}} style={{cursor: "pointer"}}>{props.item.name}</div>
      <div>{props.item.price}</div>
    <div style={{cursor: "pointer"}} onClick={()=>{if (props.cart.length===1) {
            props.setCart([])
            props.update()
            return
          }
          let temp=props.cart
          let index=temp.indexOf(props.item)
          temp.splice(index,1)
          props.setCart(temp)
          props.update();
    }}>&#10060;</div>
    </div>
})
export default CartItem;