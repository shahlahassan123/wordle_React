import React, {useState, useMemo} from 'react'
import "./App.css"
import {HiOutlineBackspace} from "react-icons/hi"
import targetWords from "./../targetWords.json"
import { useEffect } from 'react'
import WordGrid from './components/WordGrid'
import Keyboard from './components/Keyboard'


const App = () => {
 

  //Keyboard Keys
  const firstRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const secondRowKeys = [ "A", "S", "D", "F", "G", "H", "J", "K", "L",]
  const thirdRowKeys = [ "ENTER","Z", "X", "C", "V", "B", "N", "M", <HiOutlineBackspace/>]

  const [guesses, setGuesses] = useState(Array(6).fill(null))
  const [currentGuess, setCurrentGuess] = useState("")
  const [isGameOver, setIsGameOver] = useState(false)
  const [correctWord, setCorrectWord] = useState("")
  

  //Handle the keydown as well as mouse click function
  const handleKeyBoard = (e, keyValue="") =>{
    if(typeof keyValue ==='object'){
      keyValue= 'BACKSPACE'
    }
    console.log("keyValue", keyValue)
      if(isGameOver){
        return;
      }
      if (e.key === "Enter" || keyValue ==="ENTER" ) {
        if (currentGuess.length !== 5) {
          return; 
        }
        const newGuesses = [...guesses]
        newGuesses[guesses.findIndex(val=> val == null)] = currentGuess
        setGuesses([...newGuesses])
        setCurrentGuess("")
        const isSolution = currentGuess === correctWord
        if (isSolution) {
        setIsGameOver(true)
        }
        
       }else{
        if(currentGuess.length <5){
          setCurrentGuess(prevGuess => prevGuess + (e?.key?.toUpperCase() || keyValue.toUpperCase()))
        }

        if (e.key === "Backspace" || keyValue ==="BACKSPACE") {
          setCurrentGuess(currentGuess.slice(0, -1))
          return;
      }

       }
      
      
      if (currentGuess.length >= 4) {
        return; 
      }
    }

 //keydown event
  useEffect(()=>{
    window.addEventListener("keydown", handleKeyBoard)
    return () => window.removeEventListener("keydown", handleKeyBoard)

  },[currentGuess, isGameOver, correctWord, guesses])

  //setting the random word
  useEffect(()=>{
   const correctIndex = Math.floor(Math.random() * (targetWords.length -1))
   setCorrectWord(targetWords[correctIndex].toUpperCase())

  },[])

  // console.log("correct", correctWord)

  // console.log("current", currentGuess)



  return (
    <div className='App'>
      <h2>Wordle</h2>
      <WordGrid  guesses={guesses} currentGuess={currentGuess} correctWord={correctWord} />
      <Keyboard firstRowKeys={firstRowKeys} handleKeyBoard={handleKeyBoard} secondRowKeys={secondRowKeys} thirdRowKeys={thirdRowKeys} />
    </div>
  )
}



export default App
