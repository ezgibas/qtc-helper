import logo from './logo.svg';
import './App.css';
import './button.css';
import Button from '@mui/material/Button';
import React, {useState, useEffect} from 'react';

function App() {

  const [display, setDisplay] = useState(<div></div>)
  const [displayData, setDisplayData] = useState({})

  // TODO: USE THIS INSTEAD OF DISPLAYDATA
  function Display({setup, delivery}) {
    useEffect(() => {

    })
  }

  const handleRevealButton = (e) => {
    e.preventDefault()
    console.log("reveal")
    setDisplay(
      <div class="contentDiv" id="text">
       <p>{displayData["setup"]}</p>
       <p>{displayData["reveal"]}</p>
      </div>
    )
  }

  const HandleJoke = (e) => {
    useEffect(() => {
      fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode")
        .then(response => response.json())
        .then(data => {
          setDisplayData({
            setup: data.setup,
            reveal: data.delivery
          });
        })
      }
    )
      setDisplay(
        <div class="contentDiv" id="text">
         <p>{displayData["setup"]}</p>
         <Button type="button" onClick={handleRevealButton}>Reveal Punchline</Button>
        </div>
      )
    console.log(displayData["setup"] + " " + displayData["reveal"])
  };

  const handleRiddleButton = (e) => {
    e.preventDefault()
    //setText("hello this is a riddle")
  };

  const handleVibeCheckButton = (e) => {
    e.preventDefault()
    //setText("hello this is a vibe check")
  };

  
  return (
    <div className="App" id="root">
      <header >
      </header>
      <div class="contentDiv" id="mainContent"> 
      <h1>Good Morning QTC!</h1>
        <div class="buttonHolder">
          <Button class = "button" type="button" onClick={HandleJoke}>Get a Joke</Button>
          <Button class = "button" type="button" onClick={handleRiddleButton}>Get a Riddle</Button>
          <Button class = "button" type="button" onClick={handleVibeCheckButton}>Get a Vibe Check</Button>
        </div>
        {display}
      </div>
    </div>
  );
}

export default App;
