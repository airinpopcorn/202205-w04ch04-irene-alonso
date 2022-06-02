import './App.css';
import React from 'react';
import { Keyboard } from './components/Keyboard';
import { Actions } from './components/Actions';

export function App() {
  return (
    <div className="App">
      <div className="container">
        <span className="message">Calling...</span>
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard></Keyboard>
          </div>
          <div className="actions">
            <Actions></Actions>
          </div>
        </main>
      </div>
    </div>
  );
}
