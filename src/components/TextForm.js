import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }

    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2 className='my-3' >{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#646060':'white'}} id="myText" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-props.mode mx-1 my-1' onClick={handleUpClick} style={{color: props.mode === 'dark'?'white':'black'}}>Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-props.mode mx-1 my-1' onClick={handleLoClick} style={{color: props.mode === 'dark'?'white':'black'}}>Convert to LowerCase</button>
                <button disabled={text.length===0} className='btn btn-props.mode mx-1 my-1' onClick={handleExtraSpaces} style={{color: props.mode === 'dark'?'white':'black'}}>Remove extra space</button>
                <button disabled={text.length===0} className='btn btn-props.mode mx-1 my-1' onClick={handleClearClick} style={{color: props.mode === 'dark'?'white':'black'}}>Clear text</button>
                
            </div>
            <div className='container my-3'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read. </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview here"}</p>
            </div>
            
        </>
    )
}
