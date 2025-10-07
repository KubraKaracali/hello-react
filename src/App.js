import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './components/Counter';
import HelloComponent from './HelloComponent'; // Eğer daha önce eklediysek

function App() {
  return (
    <div>
      <HelloComponent />
      <Counter />
    </div>
  );
}

export default App;
