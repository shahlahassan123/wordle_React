import React from 'react'

const Keyboard = ({firstRowKeys, handleKeyBoard,secondRowKeys,thirdRowKeys  }) => {
  return (
    <div className="keyboard-grid">
    <div className="row first">
    {firstRowKeys.map((letter, ind) => {
      return (
        <button key={ind} id={`key ${ind}`} className="key" onClick={(e)=>handleKeyBoard(e,letter)}>{letter}</button>
      )
    })}
    </div>
    <div className="row second">
    {secondRowKeys.map((letter, ind) => {
      return (
        <button key={ind} id={`key ${ind}`} className="key" onClick={(e)=>handleKeyBoard(e,letter)}>{letter}</button>
      )
    })}
    </div>
    <div className="row">
    {thirdRowKeys.map((letter, ind) => {
      return (
        <button key={ind} id={`key ${ind}`} className="key" onClick={(e)=>handleKeyBoard(e,letter)}>{letter}</button>
      )
    })}
    </div>
   
     
  </div>
  )
}

export default Keyboard
