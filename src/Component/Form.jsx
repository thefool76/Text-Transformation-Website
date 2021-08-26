import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    console.log("Hello" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("hello" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("get it");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="coantainer">
        <h1>{props.head} </h1>
        <div className="mb-3">
          <textarea
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            className="form-control"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert TO Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
          Convert TO LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} Words & {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
