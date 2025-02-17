import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        setText1(newText)
    }
    const handlePrefixClick = () => { 
        let newText = text1 + text;
        setText(newText);
    }
    
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
  
    }
    const handleOnChange1 = (event)=>{
        // console.log("On change");
        setText1(event.target.value)
    }

    const [text, setText ] = useState(''); 
    const [text1, setText1 ] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container"> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div className="mb-3"> 
            <textarea className="form-control" value={text1} onChange={handleOnChange1} id="myBox1" rows="2"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handlePrefixClick}>Add Prefix</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
