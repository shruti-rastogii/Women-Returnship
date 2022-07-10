import React from "react"

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
      <button className="navbutton" onClick={()=>props.setPage("courses")} style={{cursor: "pointer"}}>
        Courses{/* Course Tracks and Career Roadmaps */}
      </button>
      <button className="navbutton" onClick={()=>props.setPage("applications")} style={{cursor: "pointer"}}>
        Applications
      </button>
      <button className="navbutton" onClick={()=>props.setPage("login")} style={{cursor: "pointer"}}>
        {props.loggedin? <>Account</> : <>Login</>}
      </button>
    </div>
  })
  export default Navbar;