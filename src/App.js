import logo from './logo.svg';
import './App.css';
import './button.css';
import Button from '@mui/material/Button';
import React, {useState, useEffect} from 'react';
import { display } from '@mui/system';

function App() {
  useEffect(() => {
    document.title = 'QTC Helper';
  }, []);

  const [displayData, setDisplayData] = useState({})
  const [reveal, setReveal] = useState("")
  const [routine, setRoutine] = useState("vibe check")

  function Display(routine) {
    if(routine !== "vibe check") {
      return(
        <div class="contentDiv" id="text">
          <p>{displayData["setup"]}</p>
          <p>{reveal}</p>
          <div class = "buttonHolder">
            <Button class="button" id="revealButton" type="button" onClick={handleRevealButton}>Reveal</Button>
          </div>
        </div>
      )
    }
    else {
      return(
        <div class="contentDiv" id="text">
          <p>{displayData["setup"]}</p>
        </div>
      )
    }
  }

  const handleRevealButton = (e) => {
    e.preventDefault()
    setReveal(displayData.delivery)
    console.log("reveal")
  }

  const HandleJoke = (e) => {
    setRoutine("joke")
    setReveal("")
    fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode")
        .then(response => response.json())
        .then(data => {
          setDisplayData({
            'setup': data.setup,
            'delivery': data.delivery
          });
        })
  };

  

  const handleRiddleButton = (e) => {
    e.preventDefault()
    setRoutine("riddle")
    setReveal("")
    fetch("https://riddles-api.vercel.app/random")
        .then(response => response.json())
        .then(data => {
          setDisplayData({
            'setup': data.riddle,
            'delivery': data.answer
          });
        })
  };

  const vibeChecks = ["Put an emoji in the chat describing your mood!", "Describe your mood with a green emoji!", 
  "What are you excited about in the next week/month?", "Do a rose/bud/thorn for your week/weekend!", 
  "What was your favorite thing from the last week?", "Describe your mood in 3 words!", "What's the best movie/show you've seen recently?",
  "What's the best book you've read recently?", "Describe your mood with a song!"]

  const handleVibeCheckButton = (e) => {
    e.preventDefault()
    setRoutine("vibe check")
    setReveal("")
    const check = vibeChecks[Math.floor(Math.random() * vibeChecks.length)]
    setDisplayData({
      'setup': check,
    })
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
        {Display(routine)}
      </div>
    </div>
  );
}

export default App;
