import React, { useState } from 'react'
// import Student from './Student';
// import StudentState from './StudentState';
// import logo from './images.png'
// import ImageManipulation from './ImageManipulation';
import Login from './Login';
import Registration from './Registration';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import MainLayout from './MainLayout';

const App = () => {
  const [rData, setrData] = useState();

  // let a = 12;
  // const mystyle = {
  //   backgroundColor: 'red',
  //   color:"cyan"
  // }

  // const studentData = [{
  //   college: "ABES Engineering College",
  //   pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //   name: 'Stuti',
  //   roll: '154',
  //   branch: 'CSE',
  //   section:'A'
  // },
  // {
  //   college: "ABES Engineering College",
  //   pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //   name: 'Tithaye',
  //   roll: '209',
  //   branch: 'CSE',
  //   section:'B'
  //   },
  //   {
  //     college: "ABES Engineering College",
  //     pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //     name: 'Sakshi',
  //     roll: '111',
  //     branch: 'CSE',
  //     section:'C'
  //   }]

  return (
 
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div>{ JSON.stringify(rData)}</div> */}
      {/* <StudentState /> */}
      {/* <ImageManipulation/> */}
    {/* <h2>Login Form</h2>
      <Login loginData={rData } /> */}
      
      {/* <br />
      <h2>Registration Form</h2>
      <Registration regData={setrData}/> */}
    </div>

    


    // <div style={mystyle}>
    //   ABES Engineering College
    //   <div style={mystyle}>{a}</div>
    //   <div style={{ color: 'blue', backgroundColor: 'cyan', display: 'flex', justifyContent: 'space-evenly' }}>
        
    //     {/* <Student data={studentData[1]}/> */}
    //     {/* <Student college="ABES Engineering College"
    //       pic={<img src={logo} />} name='Stuti' roll='34' branch='CSE' section='A' />
        
    //     <Student
    //       pic={<img src={logo} />} name='Stuti' roll='34' branch='CSE' section='A' />
        
    //     <Student college="ABES Engineering College"
    //       pic={<img src={logo}/>} name='Stuti' roll='34' branch='CSE' section='A' /> */}
    //   </div>
    // </div>
  )
}

export default App
