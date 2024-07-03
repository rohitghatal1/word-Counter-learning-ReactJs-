import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = '#fff';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'WordCounter - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
      showAlert("Light mode has been enabled", "success");
      document.title = 'WordCounter - Light Mode';
    }
  }

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="Rohit" home="Home Page" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text" mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
