import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./Grid.css"
import { ToastContainer, toast } from 'react-toastify';
import isWinner from '../helper/checkWinner';

const Grid = ({ numberOfCards }) => {
    let [turn, setTurn] = useState(false)

    let [board, setBoard] = useState(Array(numberOfCards).fill(""))

    let [winner, setWinner] = useState(null)

    function handlePlay(index) {
        if (turn == true) {
            board[index] = "O"
        } else {
            board[index] = "X"
        }

        let win = isWinner(board, turn ? "O" : "X")

        if (win) {
            setWinner(win)
            toast.success(`Congratulations '${win}' won the game!`)
        }

        setBoard([...board])
        setTurn(!turn)
    }

    function reset() {
        setBoard(Array(numberOfCards).fill(""))
        setWinner(null)
        setTurn(false)
    }

    return (
        <>
            <ToastContainer position="top-center" />
            {winner && (
                <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Restart Game</button>
                </>
            )}
            <h1 className="turn-highlight">Current Turn: {turn ? 'O' : 'X'}</h1>
            <div className='grid'>
                {board.map((val, idx) => {
                    return <Card gameEnd={winner ? true : false} onPlay={handlePlay} player={val} key={idx} index={idx} />
                })}
            </div>
        </>
    )
}

export default Grid
