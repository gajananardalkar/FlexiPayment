import React, { useEffect } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import {Link} from 'react-router-dom'

export default function Increment({setCount, setFlag, count, flag}) {

    const handleIncrement = ()=>{
        setCount(count+1)      
    }
    useEffect(()=>{
        if(count>1){
            if(count%2 ===0 ){
                console.log(count)
                setFlag(true)
            }else{
                setFlag(false)
            }
        }
    },[count])
   
  return (
    <Fragment>
        <button onClick={handleIncrement}>Increment</button>
        {
            console.log({flag})
        }
        <span style={{backgroundColor: flag? "blue":"green" , color:"white", width:"15px", margin:"5px"}}>{count}</span>
        <Link to="/viewCount"> Second Page</Link>
    </Fragment>
  )
}
