import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // https://www.npmjs.com/package/react-simple-typewriter
import "./Header.css";
import {Link, NavLink} from "react-router-dom";
import Home from "../home/Home";

/* 
  This component creates a header across the top of the page using the react-simple-typewriter effect
  It loops back and forth between displaying dogs or cats at the end of the string

*/
const Header = () => {

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Never done!`)
  }

  return (
    <div className='HeaderWrapper'>
      <NavLink className = "header-to-home" to = "/" style = {{textDecoration: "none", color: 'white'}}>
      <h1 style={{padding: "2vw", margin: 'auto 0', fontWeight: 'normal' }}>
        Do you prefer{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>

          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Cats?', 'Dogs?']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
      </NavLink>
    </div>
  )
}

export default Header;