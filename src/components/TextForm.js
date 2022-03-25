import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className='container'>
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="10"></textarea>
                </div>
                <button className='btn btn-dark mx-3' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-dark mx-3' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-dark mx-3' onClick={handleClearClick}>Clear text</button>
                
            </div>
            <div className='container my-3'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 *text.split(" ").length} minutes read. </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            
        </>
    )
}
