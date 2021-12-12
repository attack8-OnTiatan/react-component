import React from "react";

const FullName = (props) => {
  return(

<div className="pFullName">
 
   <h1> {props.person.firstName} {props.person.lastName} </h1>

   </div>


)


    }
export default FullName ;