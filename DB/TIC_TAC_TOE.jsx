const GameSides = {
  teamX: "X",
  teamO: "O"
};
let layout = [
  {
    index: 1,
    value: ""
  },
  {
    index: 2,
    value: ""
  },
  {
    index: 3,
    value: ""
  },
  {
    index: 4,
    value: ""
  },
  {
    index: 5,
    value: ""
  },
  {
    index: 6,
    value: ""
  },
  {
    index: 7,
    value: ""
  },
  {
    index: 8,
    value: ""
  },
  {
    index: 9,
    value: ""
  }
];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6]
];

Object.freeze(GameSides);

const findWinner = () => {
  let winningTeam = null;
  winningCombinations.forEach((comb) => {
    if (
      layout[comb[0]].value === layout[comb[1]].value &&
      layout[comb[1]].value === layout[comb[2]].value
    ) {
      if (layout[comb[0]].value === GameSides.teamX) {
        winningTeam = { winner: GameSides.teamX };
      } else if (layout[comb[0]].value === GameSides.teamO) {
        winningTeam = { winner: GameSides.teamO };
      }
    }
  });

  return winningTeam;
};

const setGamePiece = (index, value) => {
  if (layout[index].value === "") {
    layout[index].value = value;
    return true;
  }
  return false;
};

const nextTurn = (prevTurn) => {
  return prevTurn === GameSides.teamX ? GameSides.teamO : GameSides.teamX;
};

const resetGame = () => {
  const resetLayout = [...layout];
  resetLayout.map((element) => {
    element.value = "";
    return element;
  });
  layout = resetLayout;
};

export default {
  GameSides,
  layout,
  findWinner,
  setGamePiece,
  nextTurn,
  resetGame
};
