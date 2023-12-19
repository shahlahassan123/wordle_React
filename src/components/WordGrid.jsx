import React from 'react'
import Line from './Line'

const WordGrid = ({guesses, currentGuess,correctWord }) => {
  return (
    <div className="word-grid">
    {
      guesses.map((guess,ind)=>{
        const isCurrentGuessIndex = ind === guesses.findIndex(val=> val == null) //findting the index which is null
        return(
          <Line guess={ isCurrentGuessIndex ? currentGuess :  guess || ""} key={ind}
          isFinal = {!isCurrentGuessIndex && guess != null} correctWord ={correctWord}/>
        )
      })
    }
    
  </div>
  )
}

export default WordGrid
