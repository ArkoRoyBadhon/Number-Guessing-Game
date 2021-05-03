let con = document.querySelector('.container');
let userInput = document.querySelector('#userinput');
let button = document.querySelector('#buton');
let res = document.querySelector('#result');


//add event listener
button.addEventListener('click', func);

let n = 3;
let count = 3;
let correct_ans = Math.floor((Math.random() * 10) + 1);

function func(e) {
    for (let i = 0; i < n; i++) {
        console.log(correct_ans);
        let input = prompt('enter a number: ');
        count -= 1;
        console.log('left ' + count);
        if (input == correct_ans) {
            let ans = "You Win!";
            alert(ans);
            break;
        } else if (input > correct_ans) {
            let ans = "Correct answer is smaller \n left turn: " + count;
            alert(ans);

        } else if (input < correct_ans) {
            let ans = "Correct answer is greater \n left turn: " + count;
            alert(ans);

        } else if (count == 0) {
            alert('You Lose!');

        }
        else {
            let ans = "Wrong input \n left turn: " + count;
            alert(ans);

        }


    }

    gameover(count);
}

function reset() {
    history.go(0);
}

function gameover() {
    button.disabled = true;
    if (count == 0) {
        res.innerHTML = `<h4>You Lose!</h4>
        <h4>Correct answer is = ${correct_ans}</h4>
        <h2>Click here to restart the game</h2>
        <button id="bu" type="button" class="btn btn-info">Restart Game</button>`;
        bu.addEventListener('click', reset);
        // <button onClick="history.go(0);">Refresh Page</button>
    } else {
        res.innerHTML = `<h4>You Win!</h4>
        <h2>Click here to restart the game</h2>
        <button id="bu" type="button" class="btn btn-info">Restart Game</button>`;
        bu.addEventListener('click', reset);
    }

}