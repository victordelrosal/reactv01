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
        engine: 'davinci-codex',
        prompt: inputText,
        max_tokens: 50,
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
        <h1>Simple Chatbot with OpenAI</h1>

        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message here"
          rows={4}
          style={{ width: '80%', marginBottom: '1rem' }}
        />

        <button onClick={handleSubmit} style={{ marginBottom: '1rem' }}>
          Send
        </button>

        {responseText && (
          <div>
            <h3>AI Response:</h3>
            <p>{responseText}</p>
          </div>
        )}

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
