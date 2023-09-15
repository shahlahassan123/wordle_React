import React from 'react'

const Line = ({guess, isFinal, correctWord}) => {
    const WORD_LENGTH = 5
    const tiles=[]
    for(let i=0; i<WORD_LENGTH; i++){
        let char = guess[i]
        let className = "tile"
        if(isFinal){
            if(char === correctWord[i]){
                className += ' correct'
            }else if(correctWord.includes(char)){
                className += " close"
            }else{
                className += " incorrect"
            }
            
        }
        tiles.push(<div key={i} className={className}>{char}</div>)
    }



  return (
    <div className='line'>
        {tiles}
    </div>
  )
}

export default Line
