import React from 'react';
import '../Person/Person.css'

const userInput = (props) => {
     const inputStyle = {
         border: '2px solid red'
     }
        return(
            <div className="UserInput">
                <label>User Input Component: </label>
                <input 
                style ={inputStyle}
                onChange={props.changed} 
                value={props.currentName}
                type="text"></input>
            </div>

        )
}

export default userInput;