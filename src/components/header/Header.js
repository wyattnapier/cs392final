import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // https://www.npmjs.com/package/react-simple-typewriter
import "./Header.css";
import {Link, NavLink} from "react-router-dom";
import Home from "../home/Home";

const Header = () => {

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
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