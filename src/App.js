// Importing necessary modules and components
import React from 'react'
import {useState} from 'react'
import Board from './components/Board'
import ScoreBoard from './components/ScoreBoard'
import ReSetButton from './components/ReSetButton'
import "./App.css"

// Defining the App component
const App = () => {
  // Defining constant for win conditions
  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  // Initializing state variables using useState method
  const [board, setBoard]= useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [scores, setScores] = useState({xScore: 0, oScore: 0})
  const [gameOver, setGameOver] = useState(false)

  // Function to handle click on board boxes
  const handleBoxClick = (boxIdx) =>{
    const updateBoard = board.map((value, idx) =>{
      if(idx === boxIdx) {
        return xPlaying === true ? "x" : "o";
      }
      else {
        return value;
      }
    })

    // Checking for winner and updating scores accordingly
    const winner = checkWinner(updateBoard);
    if(winner){
      if(winner === "o"){
        let {oScore}=scores;
        oScore += 1;
        setScores({...scores, oScore})
      }else{
        let {xScore}=scores;
        xScore += 1;
        setScores({...scores, xScore})
      }
    }
    // Updating the board and the player
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  }

  // Function to check winner
  const checkWinner = (board) =>{
    for(let i= 0; i < WIN_CONDITIONS.length; i++) {
      const [x,y,z] = WIN_CONDITIONS[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true)
        return board[x];
      }
    }
    return null
  }

  // Function to reset board
  const reSetBoard = () =>{
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  // Rendering components using JSX
  return (
    <div className='App'>
      <span className='heading'>
      Tic Tac Toe Game
      </span>
      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver ? reSetBoard :  handleBoxClick}/>
      <ReSetButton reSetBoard={reSetBoard} />
    </div>
  )
}

// Exporting the App component
export default App;
