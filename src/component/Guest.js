import React from 'react'
//import yourcontext 
import { Consumer }from "../Allcontex"
function Guest() {
  return (
    <div>

    <h3>Guest</h3>
    
    <Consumer>
        {value=><h4>{value.name}</h4>}
    </Consumer>
    
    
    
    </div>
   
  )
}

export default Guest