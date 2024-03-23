import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ViewPage({count}) {
    const Navigate = useNavigate();
    const handleCLick = ()=>{
        Navigate('/')
    }
    console.log("test");
    return (
        <Fragment>
            <span>The Selected number is : {count}</span>
            <button onClick={handleCLick}>Back</button>
        </Fragment>
    )
}
