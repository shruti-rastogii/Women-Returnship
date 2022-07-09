import './App.css';
import React from "react"
import data from "./data.json";
import banner from "./banner.png"
import GLogin from './Login';
import Logout from './Logout';


  const Navbar = React.memo((props) => {
    return <div className="navbar">
      <div className="title" onClick={()=> props.setPage("home")}>
        <div className="titleName">Code</div>
        Hers
      </div>
      <button className="navbutton" onClick={()=> props.setPage("home")} style={{cursor: "pointer"}}>
        Home
      </button>
      <button className="navbutton" onClick={()=> props.setPage("jobs")} style={{cursor: "pointer"}}>
        Jobs{/* Job Opportunities and Mentorship Programmes */}
      </button>
      <button className="navbutton" onClick={()=>props.setPage("tracks")} style={{cursor: "pointer"}}>
        Tracks{/* Course Tracks and Career Roadmaps */}
      </button>
      <button className="navbutton" onClick={()=>props.setPage("applications")} style={{cursor: "pointer"}}>
        Applications
      </button>
      <button className="navbutton" onClick={()=>props.setPage("login")} style={{cursor: "pointer"}}>
        {props.loggedin? <>Account</> : <>Login</>}
      </button>
    </div>
  })

  const NothingHere = React.memo((props) => {
      return <div className="nothing">
        {props.test==="yes"? <>No such opportunities are available</>:<>Apply to job openings or enrol in courses and mentorship programmes from the main page.</>}</div>
  })

  const Products = React.memo((props) => {
    const forceUpdate = useForceUpdate();
    const [colour, setRole] = React.useState("any");
    const [type, setType] = React.useState("any");
    const [search, setSearch] = React.useState("");
    const updaterole =() => {
      setRole(document.getElementById("skills").value)
      forceUpdate()
    }
    const updatetype =() => {
      setType(document.getElementById("type").value)
      forceUpdate()
    }
    const updatesearch =() => {
      setSearch(document.getElementById("search").value)
      forceUpdate()
    }
    var searchcount=0;
    props.data.map(function (item, i) {
      if((colour==="any" || colour===item.color) && (type==="any" || type===item.type) && (!search || !search.length || item.name.toLowerCase().includes(search.toLowerCase())))
        searchcount+=1
    })
    if (!props.data.length)
      return <NothingHere test="no"/>
      return <div>
        <div className="cartitem" style={{width:"95%", alignSelf:"center"}}>
        Filter by role: <select name="skills" id="skills" onChange={()=> updaterole()}>
        <option value="Any">Any</option>
        <option value="Data Science">Data Science</option>
        <option value="UIX">UIX</option>
        <option value="Product Manager">Product Manager</option>
        <option value="Software Developer">Software Developer</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="HR Manager">HR Manager</option>
        </select>
        Filter by type: <select name="type" id="type" onChange={()=> updatetype()}>
        <option value="Any">Any</option>
        <option value="Internship">Internship</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Remote">Remote</option>
        </select>
        Search: <input id="search" onChange={()=> updatesearch()}></input>
        </div><div className="products">{props.data.map(function (item, i) {
          if((colour==="any" || colour===item.color) && (type==="any" || type===item.type) && (!search || !search.length || item.name.toLowerCase().includes(search.toLowerCase())))
        return <Card page={props.page} setPrev={props.setPrev} setPage={props.setPage} setProdInfo={props.setProdInfo} update={forceUpdate} info={item} key={i} wishlist={props.wishlist} cart={props.cart} setWishList={props.setWishList} setCart={props.setCart}/>
        if (searchcount===0 && i==0)
          return <NothingHere test="yes"/>
      })}
      </div></div>
  })

  function useForceUpdate(){
    const [value, setValue] = React.useState(0);
    return () => setValue(value => value + 1);
  }

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
        <div className="heart" onClick={()=> {if (!props.wishlist.includes(props.info)){
          let temp=props.wishlist
          temp.push(props.info)
          props.setWishList(temp)
          props.update();
        }
        else {
          if (props.wishlist.length===1) {
            props.setWishList([])
            props.update()
            return
          }
          let temp=props.wishlist
          let index=temp.indexOf(props.info)
          temp.splice(index,1)
          props.setWishList(temp)
          props.update();
        }
        }}>
        {
          props.wishlist.includes(props.info)?
          <>&#9829;</> :
          <>&#9825;</>
        }
        </div>
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
        &#128722;
        </div>
      </div>
    </div>;
  })

  const Home = React.memo((props) => {
    return <div>
      <img src={banner} className="banner"/>
    </div>
})

const Login = React.memo((props) => {
  return <div style={{margin:"1rem", width:"100%", display:"flex", justifyContent:"center", height:"460px", alignItems:"center"}}>
{!props.loggedin? <GLogin setLoggedin={props.setLoggedin}/>: 
<div className="cartlist" style={{width:"100%", alignItems:"center"}}>
  <div style={{textDecoration:"underline", textDecorationColor:"lightcoral", fontSize:"40px", margin:"4rem", marginTop:0}}>Welcome Shruti!</div>
  <div className="cartlist" style={{width:"100%", flexDirection:"row", margin:"3rem"}}>
  <button className="login" style={{margin:"1rem"}}>View order history</button>
  <button className="login" style={{margin:"1rem"}}>Give a review</button>
  <button className="login" style={{margin:"1rem"}}>Sell an item</button>
  <button className="login" style={{margin:"1rem"}}>Edit Profile</button>
  </div>
<Logout setLoggedin={props.setLoggedin}/>

</div>}

  </div>
})

const Info = React.memo((props) => {
    const update = useForceUpdate();
    return <div style={{display:"flex", flexDirection:"row", margin:"1rem"}}>
      
      <div style={{display:"flex", flexDirection:"column"}}><button className="login" style={{marginTop:0, height:"30px", width:"90px"}} onClick={()=>props.setPage(props.prev)}> Back</button><img className='imageBig' src={props.item.image}/></div>
      <div style={{display:"flex", flexDirection:"column", margin:"2rem", border: "1px solid gray"}}>
      <div style={{margin:"2rem", fontSize:"40px", marginTop:"2rem", textDecoration:"underline", textDecorationColor:"lightcoral"}}>{props.item.name}</div>
      <div style={{margin:"2rem", fontSize:"30px", marginTop:"1rem"}}>{props.item.price}</div>
      <div style={{display:"flex", flexDirection:"row", fontSize:"30px", margin:"2rem"}}><div style={{marginRight:"3rem"}}onClick={()=> {if (!props.wishlist.includes(props.item)){
          let temp=props.wishlist
          temp.push(props.item)
          props.setWishList(temp)
          update();
        }
        else {
          if (props.wishlist.length===1) {
            props.setWishList([])
            update()
            return
          }
          let temp=props.wishlist
          let index=temp.indexOf(props.item)
          temp.splice(index,1)
          props.setWishList(temp)
          update();
        }
        }}>
        {
          props.wishlist.includes(props.item)?
          <>&#9829;</> :
          <>&#9825;</>
        }
        </div>
        <div onClick={()=>{if (!props.cart.includes(props.item)){
          let temp=props.cart
          temp.push(props.item)
          props.setCart(temp)
          update();
          alert("Item added to cart!")
        }
        else {
          alert("Item is already in cart! Go to cart to modify quantity")
        }}}>
        &#128722;
        </div>
        </div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0.5rem"}}>Colour: {props.item.color}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Type: {props.item.type}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Seller: {props.item.seller}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Product description: {props.item.info}</div>
      <div style={{margin:"2rem", fontSize:"20px", marginTop:"0rem"}}>Reviews here:</div>
      </div>
    </div>
})

const CartItem = React.memo((props)=>{
    return <div className="cartitem">
      <div onClick={()=>{props.setPrev(props.page); props.setPage("info"); props.setProdInfo(props.item); props.update()}} style={{cursor: "pointer"}}><img height="60px" width="54px" src={props.item.image}/></div>
      <div onClick={()=>{props.setPrev(props.page); props.setPage("info"); props.setProdInfo(props.item); props.update()}} style={{cursor: "pointer"}}>{props.item.name}</div>
      <div>{props.item.price}</div>
      <div>Qty: <input className="input" id={props.item.name} placeholder="1" type="number" onBlur={(event) => {
        event.target.value=Math.round(event.target.value)
        if (event.target.value < 1) event.target.value=1
        let temp=props.quantity
        temp[props.in] = event.target.value
        props.setQuantity(temp)
        props.update()
      }
    }
    on/></div>
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
    }}>&#x2715;</div>
    </div>
})

const Cart = React.memo((props) => {
  const [quantity, setQuantity] = React.useState(new Array(props.items?.length).fill(1));
  const forceUpdate = useForceUpdate();
  var amount=0;
  for (var i=0; i<props.items.length; i++) {
    amount=amount+parseInt(props.items[i].price.substring(4))*quantity[i]
  }
  if (!props.items.length)
    return <NothingHere test="no"/>
  return <div className="cart">
    <div className="cartlist">
      {
        props.items.map(function (item, i) {
          return <CartItem page={props.page} setPrev={props.setPrev} setPage={props.setPage} setProdInfo={props.setProdInfo} key={i} in={i} item={item} update={forceUpdate} quantity={quantity} setQuantity={setQuantity}cart={props.items} setCart={props.setCart}/>})
      }
    </div>
    <div className="total">Total amount: Rs. {amount}</div>
    <button className="login" style={{alignSelf:"center", width:"250px"}}onClick={()=> {props.setPage("checkout"); props.setQuantities(quantity)}}>Proceed to Checkout</button>
  </div>
})

const Checkout = (props) =>{
  var amount=0;
  for (var i =0; i<props.cart?.length; i++)
    amount=amount+props.quantities[i] * parseInt(props.cart[i].price.substring(4))
  return <div className="cartlist" style={{margin:"1rem"}}>
  {
    props.cart.map(function (item, i) {
      return <div className="cartitem" style={{margin:0, borderRadius:0}}>
        <div>
        <img height="60px" width="54px" src={item.image}/>
        </div><div>
          {item.name}
        </div>
        <div>
          {`${item.color.toUpperCase()} ${item.type.toUpperCase()}`}
        </div>
        <div>
          {item.price}
        </div>
        <div>
          Quantity: {props.quantities[i]}
        </div>
        Amount: Rs. {props.quantities[i] * parseInt(item.price.substring(4))}
      </div>
  })
}
<div className="cartitem" style={{margin:0, borderRadius:0, textAlign:"right", flexDirection:"row-reverse", height:"20px", fontSize:"larger"}}>Total Amount: Rs. {amount}</div>
<input className="cartitem" id="address" style={{margin:0, borderRadius:"40px", marginTop:"2rem", height:"20px"}} placeholder="Enter Delivery Address Here"></input>
<div className="cartitem" style={{margin:0, borderRadius:"40px", marginTop:"2rem", height:"20px", paddingRight:"3rem", width:"768px"}}>
<label for="payment">Choose a payment method:</label>

<select name="payment" id="payment">
  <option value="NetBanking">NetBanking</option>
  <option value="UPI">UPI</option>
  <option value="Debit/Credit Card">Debit/Credit Card</option>
  <option value="Cash on Delivery">Cash on Delivery</option>
</select>
</div>
<button className="login" style={{alignSelf:"center"}} onClick={()=>{
  if (!document.getElementById("address").value.length)
    alert("Please enter an address!")
  else
    alert("Thank you for watching the demo!")
}}>Checkout</button>
</div>
}

const App = () => {
  const [page, setPage] = React.useState("home")
  const [wishlist, setWishList] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [loggedin, setLoggedin] = React.useState(false)
  const [quantities, setQuantities] = React.useState([])
  const [prodInfo, setProdInfo] = React.useState({})
  const [prev, setPrev] = React.useState("")
  console.log(wishlist)
  return (
    <div className="main">
        <Navbar setPage={setPage} loggedin={loggedin}/>
        {
          {
            "home": <Home/>,
            "jobs": loggedin?<Products page={page} setPrev={setPrev} setPage={setPage} setProdInfo={setProdInfo} data={data} wishlist={wishlist} cart={cart} setWishList={setWishList} setCart={setCart}/>: <Login setLoggedin={setLoggedin} loggedin={loggedin}/>,
            "login": <Login setLoggedin={setLoggedin} loggedin={loggedin}/>,
            "checkout": <Checkout cart={cart} quantities={quantities}/>,
            "info": <Info item={prodInfo} setPage={setPage} prev={prev} wishlist={wishlist} cart={cart} setWishList={setWishList} setCart={setCart}/>,
            "applications": loggedin?<Cart page={page} setPrev={setPrev} setProdInfo={setProdInfo} items={cart} setCart={setCart} setPage={setPage} setQuantities={setQuantities}/>: <Login setLoggedin={setLoggedin} loggedin={loggedin}/>,
            "tracks": loggedin?<Products page={page} setPrev={setPrev} setPage={setPage} setProdInfo={setProdInfo} data={wishlist} wishlist={wishlist} cart={cart} setWishList={setWishList} setCart={setCart}/>: <Login setLoggedin={setLoggedin} loggedin={loggedin}/>
          }[page]
        }
        <div className="navbar" style={{backgroundColor:"lightcoral"}}>
          <div className="title" style={{fontSize:"18px", color:"white", textDecoration:"underline", cursor:"pointer"}} onClick={()=>alert("Sike")}>File a complaint or send us a suggestion</div>
          <div className="title" style={{fontSize:"18px", color:"white", cursor:"default"}}>World Headquarters VMware, Inc. 3401 Hillview Ave, Palo Alto, CA 94304, USA</div>
        </div>
    </div>
  );
}

export default App;
