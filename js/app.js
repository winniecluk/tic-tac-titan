// get 1st enter button
var enter1 = document.querySelector('#enter1');

// get input text
var name1 = document.querySelector('#name1textbox')

// get Player1 display
var player1 = document.querySelector('#namefield1')

// display name
enter1.addEventListener('click', function(){
  var displayName1 = name1.value;
  player1.innerHTML = displayName1;
  }
)

// get 2nd enter button
var enter2 = document.querySelector('#enter2');

// get input text
var name2 = document.querySelector('#name2textbox')

// get Player2 display
var player2 = document.querySelector('#namefield2')

// display name
enter2.addEventListener('click', function(){
  var displayName2 = name2.value;
  player2.innerHTML = displayName2;
  }
)

// set to X or O
var counter = 0;

// get boxes
var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');
var box9 = document.querySelector('#box9');

//whose turn is it

// var player1Heading = document.querySelector('#player1')
// var player2Heading = document.querySelector('#player2')

// function checkTurn() {
//   if (counter % 2 === 0){
//   player1Heading.className = "red";
//   player2Heading.className = "black";
// } else {
//   player2Heading.className = "red";
//   player1Heading.className = "black"
// }

// // if (counter % 2 === 0){
// // } else {
// //   player2.textContent.style.color = "red";
// //   player1.textContent.style.color = "black";
// // }

// each time you click a box, counter ups by one
box1.addEventListener('click', function(){
    if (counter % 2 === 0 && board[0][0] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[0][0] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[0][0] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[0][0] = 1;
    counter += 1;
    checkWinner();
  }
  console.log(counter);
  console.log(board);
  }
);
box2.addEventListener('click', function(){
    if (counter % 2 === 0 && board[0][1] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[0][1] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[0][1] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[0][1] = 1;
    counter += 1;
    checkWinner();
  };
  console.log(counter);
  console.log(board);
  }
);
box3.addEventListener('click', function(){
    if (counter % 2 === 0 && board[0][2] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[0][2] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[0][2] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[0][2] = 1;
    counter += 1;
    checkWinner();
  };
  console.log(counter);
  console.log(board);
  }
);
box4.addEventListener('click', function(){
    if (counter % 2 === 0 && board[1][0] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[1][0] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[1][0] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[1][0] = 1;
    counter += 1;
    checkWinner();
  };
  console.log(counter);
  console.log(board);
  }
);
box5.addEventListener('click', function(){
    if (counter % 2 === 0 && board[1][1] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[1][1] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[1][1] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[1][1] = 1;
    counter += 1;
    checkWinner();
  };
  console.log(counter);
  console.log(board);
  }
);
box6.addEventListener('click', function(){
    if (counter % 2 === 0 && board[1][2] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[1][2] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[1][2] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[1][2] = 1;
    counter += 1;
    checkWinner();
  };
  console.log(counter);
  console.log(board);
  }
);
box7.addEventListener('click', function(){
    if (counter % 2 === 0 && board[2][0] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[2][0] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[2][0] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[2][0] = 1;
    counter += 1;
    checkWinner();
  };
  console.log(counter);
  console.log(board);
  }
);
box8.addEventListener('click', function(){
    if (counter % 2 === 0 && board[2][1] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[2][1] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[2][1] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[2][1] = 1;
    counter += 1;
    checkWinner();
  };
  console.log(counter);
  console.log(board);
  }
);
box9.addEventListener('click', function(){
    if (counter % 2 === 0 && board[2][2] === null){
    this.innerHTML = "<img src='images/levi-tiny.png'>";
    board[2][2] = 2;
    counter += 1;
    checkWinner();
  } else if (counter % 2 !== 0 && board[2][2] === null){
    this.innerHTML = "<img src='images/titan-tiny.png'>";
    board[2][2] = 1;
    counter += 1;
    checkWinner();
  };
  console.log(counter);
  console.log(board);
  }
);



// get result p
var pResult = document.querySelector('#result');

//win condition
var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function checkWinner() {
// X first row
  if (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2){
    pResult.innerHTML = "<img src='images/levi-win.png' alt='Captain Levi' id='leviWins'>Humans win!<br>Click reset to play again.";
  }
// X second row
  if (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2){
    pResult.innerHTML = "<img src='images/levi-win.png' alt='Captain Levi' id='leviWins'>Humans win!<br>Click reset to play again.";
  }
// X third row
  if (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2){
    pResult.innerHTML = "<img src='images/levi-win.png' alt='Captain Levi' id='leviWins'>Humans win!<br>Click reset to play again.";
  }
// X first column
  if (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2){
    pResult.innerHTML = "<img src='images/levi-win.png' alt='Captain Levi' id='leviWins'>Humans win!<br>Click reset to play again.";
  }
// X second column
  if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2){
    pResult.innerHTML = "<img src='images/levi-win.png' alt='Captain Levi' id='leviWins'>Humans win!<br>Click reset to play again.";
  }
// X third column
  if (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2){
    pResult.innerHTML = "<img src='images/levi-win.png' alt='Captain Levi' id='leviWins'>Humans win!<br>Click reset to play again.";
  }
// X first diagonal
  if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2){
    pResult.innerHTML = "<img src='images/levi-win.png' alt='Captain Levi' id='leviWins'>Humans win!<br>Click reset to play again.";
  }
// X second diagonal
  if (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2){
    pResult.innerHTML = "<img src='images/levi-win.png' alt='Captain Levi' id='leviWins'>Humans win!<br>Click reset to play again.";
  }
// O first row
  if (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1){
    pResult.innerHTML = "<img src='images/titan-win.png' alt='Colossal Titan' id='titanWins'>Titans win!<br>Click reset to play again.";
  }
// O second row
  if (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1){
    pResult.innerHTML = "O wins!<br>Click reset to play again.";
  }
// O third row
  if (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1){
    pResult.innerHTML = "O wins!<br>Click reset to play again.";
  }
// O first column
  if (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1){
    pResult.innerHTML = "O wins!<br>Click reset to play again.";
  }
// O second column
  if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1){
    pResult.innerHTML = "O wins!<br>Click reset to play again.";
  }
// O third column
  if (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1){
    pResult.innerHTML = "O wins!<br>Click reset to play again.";
  }
// O first diagonal
  if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1){
    pResult.innerHTML = "O wins!<br>Click reset to play again.";
  }
// O second diagonal
  if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1){
    pResult.innerHTML = "O wins!<br>Click reset to play again.";
  }
  if (counter === 9){
    pResult.innerHTML = "Draw game. Click reset to play again!</p>"
  }
}
// don't let user click again unless they reset


// reset function

// get reset button
var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function(){
    board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
    ];
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    counter = 0;
    pResult.innerHTML = "";
  }
);

// attempt at not having to make listeners for each box attempt
// var boxes = document.querySelectorAll('td');

// var eachBox = function(){
//   for (var i = 0; i < boxes.length; i++) {
//   return boxes[i];
//   }
// }

// eachBox.addEventListener('click', function(){
//    counter += 1;
//    console.log(counter);
//    }
// );

// attempt at function for marking X o rO
// function hitBox() {
// }
