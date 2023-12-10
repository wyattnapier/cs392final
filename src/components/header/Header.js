import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // https://www.npmjs.com/package/react-simple-typewriter
import "./Header.css";

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
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Do you prefer{' '} {/* starting string */}
        <span style={{ color: 'red', fontWeight: 'bold' }}> {/* chunk that is added/deleted to loop between the two*/}
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Cats?', 'Dogs?']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000} {/* pause after string is typed out so it can be read */}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  )
}

export default Header;