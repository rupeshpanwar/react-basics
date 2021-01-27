import React from 'react'
import '../Person/Person.css'


const userOutput = (props) => {

    return(
        <div className="UserOutput">
            <label>User Name: </label>
            <p>{props.userName}</p>
            
        </div>
    )
}

export default userOutput;