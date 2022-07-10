import React from "react"

const NothingHere = React.memo((props) => {
    return <div className="nothing">
      {props.test==="yes"? <>No such opportunities are available</>:<>Apply to job openings or enrol in courses and mentorship programmes from the main page.</>}</div>
})
export default NothingHere;