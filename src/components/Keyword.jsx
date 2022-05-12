import React from 'react'
import {useParams, useHistory} from "react-router-dom"

const Keyword = () => {
    const {keyword, color, background} = useParams()
    const history = useHistory()
    
    const redirectToHome =() =>{
      history.push("/home")
    }
  return (
    <div>
        <p style={{color: color, backgroundColor: background}}>The Word is: {keyword} </p>
        <button onClick={redirectToHome}>Return to home</button>
    </div>
  )
}

export default Keyword