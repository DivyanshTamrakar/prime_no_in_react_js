import React, { useState } from "react";
import "./styles.css";

var placeholder = "Enter The no";
var text = "Click Me";
var getinput;
var flag = 0;
export default function App() {
  var [current, setState] = useState("");
  function changeHandler(event) {
    getinput = event.target.value;
  }

  function clickHandler() {
    // console.log(check(getinput));

    if (getinput === undefined) {
      alert("year box is mandatory");
    } else {
      check(getinput);
    }
  }

  function check(n) {
    for (var i = 2; i <= n / 2; ++i) {
      // condition for non-prime
      if (n % i === 0) {
        flag = 1;
        break;
      }
    }

    if (n === 1) {
      setState("1 is neither prime nor composite.");
    } else {
      if (flag === 0) setState("prime number");
      else setState("Not a prime number.");
    }
  }

  return (
    <div className="App">
      <h1 className="header margin bord">Prime Number with React</h1>
      <div className="inn margin bord">
        <input
          onChange={changeHandler}
          type="number"
          placeholder={placeholder}
          className="input margin bord"
        ></input>
      </div>
      <div onClick={clickHandler} className="btn margin bord">
        <button>{text}</button>
      </div>
      <div className="output margin bord">{current}</div>
    </div>
  );
}
