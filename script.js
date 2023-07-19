const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function handleCellClick() {
  const cellIndex = Array.from(cells).indexOf(this);
  if (gameBoard[cellIndex] === "") {
    gameBoard[cellIndex] = currentPlayer;
    this.setAttribute("data-cell", currentPlayer);
    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      setTimeout(() => {
        alert(`${gameBoard[a]} wins!`);
        resetGame();
      }, 100);
      return;
    }
  }

  if (!gameBoard.includes("")) {
    setTimeout(() => {
      alert("It's a draw!");
      resetGame();
    }, 100);
  }
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => cell.setAttribute("data-cell", ""));
  currentPlayer = "X";
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
