import '../styles.css';
import React from 'react';

function Loader() {
  return (
    <div className="loader-Wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
