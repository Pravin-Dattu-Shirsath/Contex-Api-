
import React from 'react'
import './App.css';
import User from './component/User';
//import provider 
import {Provider} from "./Allcontex"

function App() {
  const data={
    name:"Pravin"
  }
  return (
    <div className="App">
    {/* PASS THE VALUE AS PROPS OBJECT */}
    <Provider value={data}>
    <User/>
    </Provider>
 
    </div>
  );
}

export default App;
