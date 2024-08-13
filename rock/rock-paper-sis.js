let Score = JSON.parse(localStorage.getItem('Score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
  };

   updateScore();

   function updateScore(){
    document.querySelector('.winorloss').innerHTML=`Wins:${Score.Wins}, Losses:${Score.Losses}, Ties:${Score.Ties}`;
   }

    function PlayGame(playermove) {
    let computerVal = computerValMoves();
    let result = '';

    if ( playermove === 'Sisscors' ){
      if ( computerVal === 'Sisscors' ){
      result ='Tie';
    }else if ( computerVal === 'Rock' ){
      result ='You Lose';
    }else if ( computerVal === 'Paper' ){
      result = 'You Win!'
    }
    }else if ( playermove === 'Paper' ){
      if ( computerVal === 'Paper' ){
      result ='Tie';
    }else if ( computerVal === 'Sisscors' ){
      result ='You Lose';
    }else if ( computerVal === 'Rock' ){
      result = 'You Win!'
    }
    }else if ( playermove === 'Rock' ){
      if ( computerVal === 'Rock' ){
      result ='Tie';
    }else if ( computerVal === 'Paper' ){
      result ='You Lose';
    }else if ( computerVal === 'Sisscors' ){
      result = 'You Win!'
    }
    }

    if ( result === 'You Win!' ){
      Score.Wins += 1;
    }else if ( result === 'You Lose' ){
      Score.Losses += 1;
    }else if ( result === 'Tie' ){
      Score.Ties += 1;
    }
    localStorage.setItem('Score',JSON.stringify(Score));
    
    updateScore();

   document.querySelector('.winRate').innerHTML=result;
    
   document.querySelector('.moveSelected').innerHTML=` You <img class=" move-icon" src="images/${playermove}.png" >
    <img class=" move-icon" src="images/${computerVal}.png" >Computer`;
  }

    function computerValMoves () {

     let ans = Math.random ();

      if ( ans >= 0 && ans < 1/3 ){
      computerVal = 'Rock';
    }else if ( ans >= 1/3 && ans < 2/3 ){
      computerVal = 'Paper';
    }else if ( ans >= 2/3 && ans < 1 ){
      computerVal = 'Sisscors';
    }
    return computerVal;
    }