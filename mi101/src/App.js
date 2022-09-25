

import Heading from "./component/Heading";
import { useState } from "react";
export default function App (){
  const [type , setType] = useState("para");
  return(
    <>
    <Heading head = {"This is my heading 1"} type ={type}/>
    <button onClick={()=>{
      setType("heading")
    }}>make button h1</button>

    {/* <Heading head = {"This is my heading 2"} />  */}
    <button onClick={()=>{
      setType("heading2")
    }}>make button h2</button>

    {/* <Heading head = "This is my heading 3"/> */}
    <button onClick={()=>{
      setType("heading3")
    }}>make button h3</button>

    {/* <Heading head = {"new test here"} type = "para"/> */}
    <button onClick={()=>{
      setType("para")
    }}>make para  p</button>




    <h2>start editing to see some magic</h2>

   
    </>
  )
}


