import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='img-container'>
        <img className='profile-image' src='/src/images/profile.jpeg'/>
      </div>
      <div className='main-info'>
        <h1>Willian Vasconcelos</h1>
        <h4>Analista de Sistemas</h4>
        <p>Contato: willfvasconcelos@hotmail.com</p>
      </div>
      <div className='profile-buttons'>
        <div>          
          <a href="https://www.linkedin.com/in/willian-vasconcelos-1b647785/" id="linkedin" target="_blank">
          <img src="/src/images/linkedin.png" alt="LinkedIn" className='image-logo'/>LinkedIn</a>
        </div>
        <div>
          <a href="https://github.com/WillianVasco" id="github" target="_blank">
          <img src="/src/images/github.png" alt="GitHub" className='image-logo'/>GitHub</a>
        </div>
      </div>
      <div className='about'>
        <h2 className='headline'>Sobre</h2>
        <p>Formado em Logística na FATEC-ZL, trabalho como analista de sistemas e desenvolvedor de software
          há 12 anos, com passagem pela TOTVS e atualmente trabalhando na Santher S/A.
        </p>
        <h2 className='headline'>Interesses</h2>
        <ul>
          <li>Deus e minha família</li>
          <li>Teconologia</li>
          <li>Corridas de Carros e Futebol</li>
          <li>Nutrição</li>
        </ul>
      </div>
      <footer>
        <div className='footer'></div>
      </footer>
    </>
  )
}

export default App
