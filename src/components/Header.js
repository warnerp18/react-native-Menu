import React from 'react';

const Header = (props) => {
  return (
    <header className='top'>
      <h1>
        Catch
        <span className='ofThe'>
          <span>of</span>
          <span>the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{props.tagLine}</span>
      </h3>
    </header>
  )
}

export default Header;
