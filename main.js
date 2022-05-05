//Create variable for the game state
 var player1Score = 0
 var player2Score = 0
 var play1Turn = true
 //create variable to score references to the necessary DOM nodes
  var player1Dice = document.getElementById('player1Dice')
  var player2Dice = document.getElementById('player2Dice')
  var player1Scoreboard = document.getElementById('player1Scoreboard')
  var player2Scoreboard = document.getElementById('player2Scoreboard')
  var message = document.getElementById('message')
  var rollbtn = document.getElementById('rollbtn')
  var resetbtn = document.getElementById('resetbtn')
  // 
  rollbtn.addEventListener("click"  ,  function(){
      var randomNumber = Math.floor(Math.random() * 6 ) + 1
      //now to update the socres for each player
      if(play1Turn){
          player1Score +=  randomNumber
          player1Scoreboard.textContent = player1Score
          player1Dice.textContent=randomNumber
          player1Dice.classList.remove("active")
          player2Dice.classList.add("active")
          message.textContent ='player 2 Turn'
      }else{
        player2Score +=  randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent ='player 1 Turn'

      }
       if (player1Score >= 20){
           message.textContent = 'Player 1 has won !'
           rollbtn.style.display ='none'
           resetbtn.style.display= 'block'
       }else if (player2Score>=20){
           message.textContent = 'Player 2 has won !'
           rollbtn.style.display ='none'
           resetbtn.style.display= 'block'
       }
      //ro rese the code
      play1Turn=!play1Turn

  })

