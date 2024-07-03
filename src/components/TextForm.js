import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Converted to upper case", "success");
    }
    const changeText = (event) => {
        setText(event.target.value);
    }

    const changeLoweCase = () => {
        let lowercase = text.toLowerCase();
        setText(lowercase);
        props.showAlert("Converted to lower case", "success")
    }

    const changeToRed = () => {
        setTextStyle({color: 'red'});
        props.showAlert("Colour changed Successfully", "success")
    }

    const handleCopy = () => {
        var input = document.getElementById('myform');
        input.select();
        navigator.clipboard.writeText(input.value);
        props.showAlert("copied Successfully", "success");
    }

    const [text, setText] = useState('');
    const [textStyle, setTextStyle] = useState({color: 'blue'})

    const countWords = (text)=> {
        return text.split(/\s+/).filter(word => word.trim().length > 0).length;
    }
    return (
        <>
            <div>
                <h1 style={{color: props.mode==='dark'?'white':'dark'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'dark'}} onChange={changeText} id="myform" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleOnClick}>Conver to upper Case</button>
                <button className='btn btn-success mx-2' onClick={changeLoweCase}>change to lower case</button>
                <button className='btn btn-info mx-2' onClick={changeToRed}>Change color</button>
                <button className='btn btn-info mx-2' onClick={handleCopy}>Copy text</button>
            </div>

            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * countWords(text)} minute to read</p>
            </div>
        </>
    )
}
