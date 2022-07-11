import NothingHere from './NothingHere'
import CourseCard from './CourseCard.jsx'
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
        Filter by skill: <select name="skills" id="skills" onChange={()=> updaterole()}>
        <option value="any">Any</option>
        <option value="Data Science">Data Science</option>
        <option value="Project Management">Project Management</option>
        <option value="Software Development">Software Development</option>
        <option value="Financial Analysis">Financial Analysis</option>
        <option value="HR Management">HR Management</option>
        </select>
        </div><div>
        Filter by type: <select name="type" id="type" onChange={()=> updatetype()}>
        <option value="any">Any</option>
        <option value="Online">Online</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Physical">Physical</option>
        </select>
        </div><div>
        Search: <input id="search" onChange={()=> updatesearch()}></input></div>
        </div><div className="products">{props.data.map(function (item, i) {
          if((skills==="any" || skills===item.skills) && (type==="any" || type===item.type) && (!search || !search.length || item.name.toLowerCase().includes(search.toLowerCase())))
        return <CourseCard page={props.page} setPrev={props.setPrev} setPage={props.setPage} setProdInfo={props.setProdInfo} update={forceUpdate} info={item} key={i} wishlist={props.wishlist} cart={props.cart} setWishList={props.setWishList} setCart={props.setCart}/>
        if (searchcount===0 && i==0)
          return <NothingHere test="yes"/>
      })}
      </div></div>
  })
  export default Courses;