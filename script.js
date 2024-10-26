const board = document.getElementById('board');
const cells = [];
let currentPlayer = 'X';

// Cria as células do tabuleiro
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', handleClick);   

    board.appendChild(cell);
    cells.push(cell);   

}

// Função para lidar com o clique em uma célula
function handleClick(event) {
    const cell = event.target;
    if (cell.textContent !== '') return; // Célula já ocupada
    cell.textContent = currentPlayer;
    if (checkWin()) {
        alert(`${currentPlayer} venceu!`);
        resetGame();
    } else if (checkDraw()) {
        alert('Empate!');
        resetGame();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Função para verificar se algum jogador venceu
function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];
    for   
 (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer   

        ) {
            return true;
        }
    }
    return false;   

}

// Função para verificar se houve empate
function checkDraw() {
    return cells.every(cell => cell.textContent !== '');
}

// Função para reiniciar o jogo
function resetGame() {
    cells.forEach(cell => cell.textContent   
 = '');
    currentPlayer = 'X';
}
