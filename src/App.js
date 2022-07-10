import './App.css';
import React from "react"
import data from "./data.json";
import datac from "./datac.json";
import banner from "./banner.png"
import GLogin from './Login';
import Logout from './Logout';
import Jobs from './Jobs'
import Info from './Info'
import Navbar from './Navbar'
import Cart from './Cart'
import Courses from './Courses'

const Home = React.memo((props) => {
  return <div>
    <img src={banner} className="banner" />
  </div>
})

const Login = React.memo((props) => {
  return <div style={{ margin: "1rem", width: "100%", display: "flex", justifyContent: "center", height: "460px", alignItems: "center" }}>
    {!props.loggedin ? <GLogin setLoggedin={props.setLoggedin} /> :
      <div className="cartlist" style={{ width: "100%", alignItems: "center" }}>
        <div style={{ textDecoration: "underline", textDecorationColor: "lightcoral", fontSize: "40px", margin: "4rem", marginTop: 0 }}>Welcome Shruti!</div>
        <div className="cartlist" style={{ width: "100%", flexDirection: "row", margin: "3rem" }}>
          <button className="login" style={{ margin: "1rem" }}>View order history</button>
          <button className="login" style={{ margin: "1rem" }}>Give a review</button>
          <button className="login" style={{ margin: "1rem" }}>Sell an item</button>
          <button className="login" style={{ margin: "1rem" }}>Edit Profile</button>
        </div>
        <Logout setLoggedin={props.setLoggedin} />

      </div>}
  </div>
})


const App = () => {
  const [page, setPage] = React.useState("home")
  const [cart, setCart] = React.useState([]);
  const [courseCart, setCourseCart] = React.useState([]);
  const [loggedin, setLoggedin] = React.useState(false)
  const [prodInfo, setProdInfo] = React.useState({})
  const [prev, setPrev] = React.useState("")
  return (
    <div className="main">
      <Navbar setPage={setPage} loggedin={loggedin} />
      {
        {
          "home": <Home />,
          "jobs": loggedin ? <Jobs page={page} setPrev={setPrev} setPage={setPage} setProdInfo={setProdInfo} data={data} cart={cart} setCart={setCart} /> : <Login setLoggedin={setLoggedin} loggedin={loggedin} />,
          "login": <Login setLoggedin={setLoggedin} loggedin={loggedin} />,
          "info": <Info item={prodInfo} setPage={setPage} prev={prev} cart={cart} setCart={setCart} />,
          "applications": loggedin ? <Cart page={page} setPrev={setPrev} setProdInfo={setProdInfo} items={cart} courseItems={courseCart} setCart={setCart} setCourseCart={setCourseCart} setPage={setPage} /> : <Login setLoggedin={setLoggedin} loggedin={loggedin} />,
          "courses": loggedin ? <Courses page={page} setPrev={setPrev} setPage={setPage} setProdInfo={setProdInfo} data={datac} cart={courseCart} setCart={setCourseCart} /> : <Login setLoggedin={setLoggedin} loggedin={loggedin} />
        }[page]
      }
      <div className="navbar" style={{ backgroundColor: "lightcoral"}}>
        <div className="title" style={{ fontSize: "18px", color: "white", textDecoration: "underline", cursor: "pointer" }}>File a complaint or send us a suggestion</div>
        <div className="title" style={{ fontSize: "18px", color: "white", cursor: "default" }}>World Headquarters VMware, Inc. 3401 Hillview Ave, Palo Alto, CA 94304, USA</div>
      </div>
    </div>
  );
}

export default App;
