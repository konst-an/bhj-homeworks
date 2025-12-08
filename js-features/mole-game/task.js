let killedMoles = 0;
let lost = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function resetGame() {
    killedMoles = 0;
    document.getElementById('dead').textContent = 0;

    lost = 0;
    document.getElementById('lost').textContent = 0;
}

for (let index = 1; index <= 9; index++) {
    const hole = getHole(index);

    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            killedMoles++;
            document.getElementById('dead').textContent = killedMoles;
        } else {
            lost++;
            document.getElementById('lost').textContent = lost;
        }

        if (killedMoles === 10) {
            window.alert('Вы победили!');
            resetGame();
        }
        
        if (lost === 5) {
            window.alert('Вы проиграли!');
            resetGame();
        }
    });
}

