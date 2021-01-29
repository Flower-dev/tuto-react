import React from 'react'
import './Presentation.css'
import emoji from './emoji.svg'

const Presentation = () => (
    <div className="instructions">
    <img alt="laughing crying emoji" src={emoji} />
    <p>Click on an emoji to view the emoji short name.</p>
  </div>
)

export default Presentation;