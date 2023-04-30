import React, { useState } from "react"


export default function TextForm(props) {
  // function 
  const HandleUpClick = () => {
    // console.log(text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted To UpperCase.","success")
  }
  const HandleLoClick = () => {
    // console.log(text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted To LowerCase.","success");

  }
  // to enable typing  
  const HandleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value)
  }
  // to copy all text  
  const HandleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("succesfully copied.","success")

  }
    //to remove extra spaces
    const HandleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
  const [text, setText] = useState("")
  // Text="new Text"  //wrong way to set text
  // setText=("new Text")  //correct way to set text
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUpClick}>Convert To UpperCase</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLoClick}>Convert To LowerCase</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleCopy}>Copy Text</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleExtraSpace}>Remove Extra Space</button>
    </div>
      <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary:</h2>
        <p>{text.split(/\s+/).filter((Element)=>{return Element.length !==0}).length} Words and {text.length}Characters.</p>
        <p>{0.08*text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length}minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview!"}</p>
      </div>

    </>
  )
}
