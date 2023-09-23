import React, { useState } from "react";
import DB from "../../DB/TIC_TAC_TOE";
import "./index.css";
const Game = () => {
  const [game] = useState(DB.layout);
  const [turn, setTurn] = useState(DB.GameSides.teamX);
  const [winner, setWinner] = useState(null);
  const playerClick = (index) => {
    const isValidPlay = DB.setGamePiece(index - 1, turn);
    if (isValidPlay) {
      setTurn(DB.nextTurn(turn));
      setWinner(DB.findWinner());
    }
  };
  const reset = () => {
    DB.resetGame();
    setTurn(DB.nextTurn(turn));
    setWinner(null);
  };

  return (
    <>
      <div className="gameBody">
        <h1>Player Turn: {turn}</h1>
        <div className="layout">
          {game.map((TTT) => {
            return (
              <div key={TTT.index} className="box">
                <button
                  onClick={() => {
                    playerClick(TTT.index);
                  }}
                >
                  {TTT.value}
                </button>
              </div>
            );
          })}
        </div>
        {winner ? <h1>Player {winner.winner} has won!</h1> : null}

        <button className="resetButton" onClick={reset}>
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Game;
