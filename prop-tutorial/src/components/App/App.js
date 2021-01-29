import React from 'react'
import './App.css'
import data from './data'
import AnimalCard from '../AnimalCard/AnimalCard'

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};

function App() {
  return (
    <div className="wrapper">
      <h1>ANIMALS</h1>
      {data.map(animal => (
        <AnimalCard 
        additional={animal.scientificName}
        diet={animal.diet}
        key={animal.name}
        name={animal.name}
        scientificName={animal.scientificName}
        showAdditional={showAdditional}
        size={animal.size}
        />
      ))}
    </div>
  )
}

export default App;