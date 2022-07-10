import React from "react"

const Card = React.memo((props) => {
    return <div className="card">
      <div className="cardhead" onClick={()=>{props.setPrev(props.page); props.setPage("info"); props.setProdInfo(props.info); props.update()}}>
        {props.info.name}
      </div>
      <div className="cardhead" style={{height:"140px"}} onClick={()=>{props.setPrev(props.page); props.setPage("info"); props.setProdInfo(props.info); props.update()}}>
      <img className = "imageShape" src={props.info.image}/>
      </div>
      <div className="cardoptions">
        {props.info.salary}
        <div className="heart" onClick={()=>{if (!props.cart.includes(props.info)){
          let temp=props.cart
          temp.push(props.info)
          props.setCart(temp)
          props.update();
          alert("Applied Successfully!")
        }
        else {
          alert("Already applied! Go to Applications page to withdraw from position.")
        }}}>
        {
          props.cart.includes(props.info)?
          <>&#9989;</> :
          <>&#9997;</>
        }
        </div>
      </div>
    </div>;
  })
  export default Card;