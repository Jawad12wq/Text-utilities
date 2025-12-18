import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  // Uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  // Lowercase
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  // Clear text
  const handleClearClick = () => {
    setText('');
  };

  // Remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
  };

  // Copy text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  // Capitalize each word
  const handleCapitalize = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  // Reverse text
  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  // On change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Word count (safe)
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize</button>
        <button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
