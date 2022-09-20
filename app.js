const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const reset = document.querySelector('#reset')
const winningScoreSelector = document.querySelector('#playto')

let p1Score = 0
let p2Score = 0
let winningScore = 5
let isGameOver = false

p1Button.addEventListener('click', function(){
    if(!isGameOver) {
        p1Score +=1
    }
    if(p1Score === winningScore){
        isGameOver = true
        document.querySelector('#p1Score').classList.add('winner')
        document.querySelector('#p2Score').classList.add('loser')
        p1Button.disabled = true
        p2Button.disabled = true
    }
    document.querySelector('#p1Score').textContent = p1Score
})

p2Button.addEventListener('click', function(){
    if(!isGameOver) {
        p2Score +=1
    }
    if(p2Score === winningScore){
        isGameOver = true
        document.querySelector('#p1Score').setAttribute('class', 'loser')
        document.querySelector('#p2Score').setAttribute('class','winner')
        p1Button.disabled = true
        p2Button.disabled = true
    }
    document.querySelector('#p2Score').textContent = p2Score
})

reset.addEventListener('click',  resetScore)


winningScoreSelector.addEventListener('change', function () {
    // winningScore = this.winningScoreSelector.value
    numWinScore = parseInt(this.value)
    winningScore = numWinScore
    resetScore()  
})

function resetScore () {
    isGameOver = false
    p1Score = 0
    p2Score = 0
    document.querySelector('#p1Score').innerText = p1Score
    document.querySelector('#p2Score').textContent = p2Score  
    document.querySelector('#p1Score').classList.remove('winner', 'loser')
    document.querySelector('#p2Score').classList.remove('winner', 'loser')
    // document.querySelector('#p1Score').className = 'black'
    // document.querySelector('#p2Score').className = 'black'
    p1Button.disabled = false
    p2Button.disabled = false
}