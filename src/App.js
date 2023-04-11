import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import openai from 'openai';

openai.apiKey = process.env.REACT_APP_OPENAI_API_KEY;

function App() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await openai.Completion.create({
        engine: 'text-davinci-003',
        prompt: inputText,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 1,
      });

      setResponseText(result.choices[0].text);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>😀</h1>
        <h1>¿Cómo estás, Alex?</h1>
        <h3>Muy bien, papá, de hecho, ATM! ¿Y tú?</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
