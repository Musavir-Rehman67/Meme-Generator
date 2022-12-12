import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import React from 'react';

export default function App() {
  const result = React.useState()
  console.log(result)
  return(
    <div>
      <Header />
      <Meme />
    </div>
  ) 
}
