import React, { useState } from 'react'
import image from './assets/image.jpg'

const ImageManipulation = () => {

    const [height, setHeight] = useState(150);
    const [weight, setWeight] = useState(130);
    const [red, setRed] = useState();
    const [green, setGreen] = useState();
    const [blue, setBlue] = useState();
    const [imgRotate, setImgRotate] = useState(0);

    const increaseHeight = () => {
        setHeight(height + 30);
    }

    const increaseWeight = () => {
        setWeight(weight + 30);
    }

    const colorChange = () => {
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
        console.log(red);
    }

    const doRotate = () => {
        setImgRotate(imgRotate + 30);
    }

  return (
    <div style={{height:'450px',width:'450px',border:'2px solid red',marginLeft:'200px',marginTop:'70px'}}>
          <div style={{paddingLeft:'100px',paddingTop:'20px',backgroundColor:`RGB(${red},${green},${blue})`}}>
              <img src={image} height={height} width={weight} />
          </div>

          <div style={{marginTop:'150px',marginLeft:'20px'}}>
              <button onClick={increaseHeight}>enhance height</button>&nbsp;&nbsp;&nbsp;
              <button onClick={increaseWeight}>enhance width</button>&nbsp;&nbsp;&nbsp;
              <button onClick={doRotate}>rotate</button>&nbsp;&nbsp;&nbsp;
              <button style={{marginTop:'10px'}} onClick={colorChange}>background color change</button>
          </div>
    </div>
  )
}

export default ImageManipulation
