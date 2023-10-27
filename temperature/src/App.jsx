import React, { useEffect } from 'react';
import { useState } from "react";


function App() {

  const [temp, setTemp] = useState(10)
  const [color, setColor] = useState("")

  let cold = "Too Cold!"
  let hot = "Too Hot!"

  useEffect(() => {
    if (temp < 0) {
      setColor("blue")
    }
    else if (temp >= 0 && temp <= 15) {
      setColor("blue");
    } else if (temp > 15 && temp <= 30) {
      setColor("orange");
    } else {
      setColor("red");
    }
  }, [temp]);

  const increment = () => {
    const newTemp = temp + 1
    if (newTemp >= 0 && newTemp <= 15) {
      setColor("blue")
    }
    else if (newTemp > 15 && newTemp <= 30) {
      setColor("orange")
    } else {
      setColor("red")
    }

    setTemp(newTemp)
  }

  const decrement = () => {
    const newTemp = temp - 1
    if (newTemp < 0) {
      setColor("blue")
    }
    else if (newTemp >= 0 && newTemp <= 15) {
      setColor("blue")
    } else if (newTemp > 15 && newTemp <= 30) {
      setColor("orange")
    } else {
      setColor("red")
    }

    setTemp(newTemp)
  }




  return (
    <>
      <div className="container">
        <header className='headerContainer'>
          <h1>Temperature Controller</h1>
        </header>
        <div className="box">
          <div className="displayContainer">
            <div className="display" style={{ backgroundColor: color }}>
              {temp >= 0 && temp <= 40 ? (
                <h2>{temp}C</h2>) : null}
              {temp < 0 ? <h2>{cold}</h2> : null}
              {temp > 40 ? <h2>{hot}</h2> : null}
            </div>
          </div>
          <div className="buttonContainer">
            <button onClick={increment} disabled={temp > 40} className={temp > 40 ? "disabled" : "button"}>+</button>
            <button onClick={decrement} className={temp < 0 ? "disabled" : "button"} disabled={temp < 0}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

