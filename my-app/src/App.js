
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Route, Routes } from 'react-router-dom';


function App() {


  const [mode, setMode] = useState('light')  
  const [alert, setAlert] = useState(null)   

  // function to change the mode  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Enabled Dark mode", "success ! ");
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Enabled light mode", "success ! ");

    }
  }
  

   const showAlert = (message, type) => {
     setAlert({
       msg: message,
       type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);

   }


  return (
    <>
      <Navbar title="TextCounter" AboutText="About TextCounter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextCounter - word counter, character counter, remove extra spaces" mode={mode} />} />
            <Route  exact path='about' element={<About mode={mode}/>}/>
          </Routes>
        </div>  

    </>
  );
}

export default App;
