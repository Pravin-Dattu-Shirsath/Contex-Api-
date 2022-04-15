# Contex-Api-
HOW TO USE Contex Api 
//Your create seprate contex file and export 

import React from "react"
const MyContext=React.createContext()
export const Provider=MyContext.Provider
export const Consumer=MyContext.Consumer

// then import top level Provider
import {Provider} from "your contex file name"

<Provider   data={pass any props}>
  //wrap the component name (access the any childern )
  
  </Provider>


//children Componet 
 import {Consumer} from "your contex file name"
 
  <Consumer>
      { (data)=>{ console.log(data) }

   </Consumer>
  
