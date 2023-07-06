import React from 'react';
import './Exercice.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  

function Exercise4() {
  return (
    <div>
      <h1 style={style_header}>This is header</h1>
      <p>This is a paragraph.</p>
      <a href="https://example.com">Link</a>
      <p>This is a Form.</p>
      <form>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
      <p>This is a Image.</p>
      <img src="./public/logo512.png" alt="Image" />
      <p>This is a List.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default Exercise4;