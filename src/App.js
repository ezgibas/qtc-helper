import logo from './logo.svg';
import './App.css';
import './button.css';
import Button from '@mui/material/Button';
import React, {useState} from 'react';

function App() {

  const [text, setText] = useState("");

  const handleJokeButton = (e) => {
    e.preventDefault()
    setText("hello this is a joke")
  };

  const handleRiddleButton = (e) => {
    e.preventDefault()
    setText("hello this is a riddle")
  };

  const handleVibeCheckButton = (e) => {
    e.preventDefault()
    setText("hello this is a vibe check")
  };

  

  return (
    <div className="App" id="root">
      <header >
      </header>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}> 
      <h1>Good Morning QTC!</h1>
        <div class="buttonHolder">
          <Button class = "button" type="button" onClick={handleJokeButton}>Get a Joke</Button>
          <Button class = "button" type="button" onClick={handleRiddleButton}>Get a Riddle</Button>
          <Button class = "button" type="button" onClick={handleVibeCheckButton}>Get a Vibe Check</Button>
        </div>
        <div class="textDiv">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
