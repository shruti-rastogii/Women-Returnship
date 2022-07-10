import NothingHere from './NothingHere'
import Card from './Card'
import {useForceUpdate} from './helpers'
import React from "react"

const Courses = React.memo((props) => {
    const forceUpdate = useForceUpdate();
    const [skills, setRole] = React.useState("any");
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
      if((skills==="any" || skills===item.skills) && (type==="any" || type===item.type) && (!search || !search.length || item.name.toLowerCase().includes(search.toLowerCase())))
        searchcount+=1
    })
    if (!props.data.length)
      return <NothingHere test="no"/>
      return <div>
        <div className="cartitem" style={{width:"95%", alignSelf:"center"}}>
          <div>
        Filter by role: <select name="skills" id="skills" onChange={()=> updaterole()}>
        <option value="Any">Any</option>
        <option value="Data Science">Data Science</option>
        <option value="UIX">UIX</option>
        <option value="Product Manager">Product Manager</option>
        <option value="Software Developer">Software Developer</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="HR Manager">HR Manager</option>
        </select>
        </div><div>
        Filter by type: <select name="type" id="type" onChange={()=> updatetype()}>
        <option value="Any">Any</option>
        <option value="Internship">Internship</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Remote">Remote</option>
        </select>
        </div><div>
        Search: <input id="search" onChange={()=> updatesearch()}></input></div>
        </div><div className="products">{props.data.map(function (item, i) {
          if((skills==="any" || skills===item.skills) && (type==="any" || type===item.type) && (!search || !search.length || item.name.toLowerCase().includes(search.toLowerCase())))
        return <Card page={props.page} setPrev={props.setPrev} setPage={props.setPage} setProdInfo={props.setProdInfo} update={forceUpdate} info={item} key={i} wishlist={props.wishlist} cart={props.cart} setWishList={props.setWishList} setCart={props.setCart}/>
        if (searchcount===0 && i==0)
          return <NothingHere test="yes"/>
      })}
      </div></div>
  })
  export default Courses;