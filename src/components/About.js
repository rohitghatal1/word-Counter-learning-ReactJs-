
import React, {useState} from 'react';
import meme from '../meme.jpg';

export default function About() {

    const toggleDarkMode = () => {
        if(darkMode.backgroundColor == 'white'){
            setDarkMode({
                backgroundColor: 'black',
                color: 'white'
            })
            setbtntxt('Enable light Mode')
        }
        else{
            setDarkMode({
                backgroundColor: 'white',
                color: 'black'
            })
            setbtntxt('Enable dark mode')
        }
    }

    const[btntxt, setbtntxt] = useState('Enable Dark Mode');
    const[darkMode, setDarkMode] = useState({
        backgroundColor : 'white',
        color : 'black'
    })

    return (
        <div className='container' style={darkMode}>
        <h2>About Us</h2>
            <div className="card" style={{ width: '18rem' }}>
                <img src={meme} className="card-img-top" alt="..." />
                <div className="card-body" style={darkMode}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <button className='btn btn-primary' onClick={toggleDarkMode}>{btntxt}</button>
        </div>
    );
}
