import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FavoriteFood } from './FavoriteFood'
import Greeting from './Greeting'

export function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Greeting />
      <FavoriteFood />
    </div>
  );
}



