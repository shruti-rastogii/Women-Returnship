import {useForceUpdate} from './helpers'
import React from "react"

const Info = (props) => {
    const update = useForceUpdate();
    return <div style={{display:"flex", flexDirection:"row", margin:"1rem"}}>
      
      <div style={{display:"flex", flexDirection:"column"}}><button className="login" style={{marginTop:0, height:"30px", width:"90px"}} onClick={()=>props.setPage(props.prev)}> Back</button><img className='imageBig' src={props.item.image}/></div>
      <div style={{display:"flex", flexDirection:"column", margin:"2rem", border: "1px solid gray"}}>
      <div style={{margin:"2rem", fontSize:"40px", marginTop:"2rem", textDecoration:"underline", textDecorationColor:"lightcoral"}}>{props.item.name}</div>
      <div style={{margin:"2rem", fontSize:"30px", marginTop:"1rem"}}>{props.item.price}</div>
      <div style={{display:"flex", flexDirection:"row", fontSize:"30px", margin:"2rem"}}>
        <div onClick={()=>{if (!props.cart.includes(props.item)){
          let temp=props.cart
          temp.push(props.item)
          props.setCart(temp)
          update();
          alert("Applied Successfully!")
        }
        else {
          alert("Already applied! Go to Applications page to withdraw from position.")
        }}}>
        {
          props.cart.includes(props.item)?
          <>&#9989;</> :
          <>&#9997;</>
        }
        </div>
        </div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0.5rem"}}>Skills: {props.item.skills}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Type: {props.item.type}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Location: {props.item.location}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Salary: {props.item.salary}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Company: {props.item.company}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Role description: {props.item.info}</div>
      </div>
    </div>
}
export default Info;