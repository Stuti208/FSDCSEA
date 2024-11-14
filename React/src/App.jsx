import React from 'react'
import Student from './Student';

const App = () => {
  let a = 12;
  const mystyle = {
    backgroundColor: 'red',
    color:"cyan"
  }

  return (
    <div style={mystyle}>
      ABES Engineering College
      <div style={mystyle}>{a}</div>
      <div style={{color:'blue',backgroundColor:'cyan'}}>
        <Student college= "ABES Engineering College" name='Stuti' roll='34' branch='CSE' section='A'/>
      </div>
    </div>
  )
}

export default App
