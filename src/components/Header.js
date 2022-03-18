import React from 'react'
import meme_logo from '../images/TrollFace.png'
import '../style.css'

export default function Header() {
  return (
    <header className='header'>
        <img src={meme_logo} alt="meme_logo" className='header--image'/>
        <h2 className='header--title'>Meme Generator</h2>
        <h2 className="header--project">React Project 3</h2>
    </header>
  )
}
