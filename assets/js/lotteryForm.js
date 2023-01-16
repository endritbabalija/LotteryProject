var buyButton = document.getElementById("buy-ticket-button");
var lotteryCard = document.getElementById("lottery-card");
let modal = document.getElementById("exampleModal");
var ticketSave = document.getElementById("ticket-save");
let ticketText = document.getElementById("exampleModalLabel");
let ticketNumbers = document.getElementById("modalNumbers");

let selectedNumbers = [];
let tickets = [];
let counter = 0;





buyButton.addEventListener("click", function() {



  lotteryCard.setAttribute("id", "lottery-numbers");
  lotteryCard.classList.add("lottery-numbers", "p-3");


  
  // selectedNumbers = [];
  lotteryCard.replaceChildren([]);
  ticketNumbers.innerHTML = ["Your numbers"];

  for (i = 1; i <= 30; i++) {
    let numberButton = document.createElement("button");
    numberButton.innerHTML = i;
    numberButton.classList.add("number");
    lotteryCard.appendChild(numberButton);
    
    numberButton.addEventListener("click", function(){
      if(counter < 7){
        if(selectedNumbers.includes(this.innerHTML)) {
          selectedNumbers.splice(selectedNumbers.indexOf(this.innerHTML), 1);
          numberButton.classList.remove("selected");
          counter--;
          console.log(counter);
        } else {
          selectedNumbers.push(this.innerHTML);
          counter++;
          numberButton.classList.add("selected");
          console.log(counter);
        }
        console.log(selectedNumbers);
        ticketNumbers.innerHTML = [selectedNumbers];
      }
      else{
        if(selectedNumbers.includes(this.innerHTML)) {
          selectedNumbers.splice(selectedNumbers.indexOf(this.innerHTML), 1);
          numberButton.classList.remove("selected");
          counter--;
          console.log(counter);
        } else {
          alert("You can not select more than 7 numbers");
          // counter = 0;
          // resetSelectedNumbers();
          console.log(counter);
        }
        
      }
    });
  }

})

let ticketCount = 1;
ticketSave.addEventListener("click", function() {

  let ticket = {
    id: ticketCount,
    tickets: 0,
    prize: 0,
    numbers: selectedNumbers
  }

    
  if ( selectedNumbers.length == 7 ){
    tickets.push(ticket)
    ticketCount ++
    console.log(tickets)
  }
  else {
    alert("select 7 numbers")
  }
  resetSelectedNumbers();
  tabela();
  
})  

function resetCounter() {
  counter = 0;
}

function resetSelectedNumbers() {
  selectedNumbers = [];
  resetCounter();
  let numberButtons = document.getElementsByClassName("number");
  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].classList.remove("selected");
  }
  ticketNumbers.innerHTML = "";
}





let resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", function(){
  resetSelectedNumbers();
  resetCounter();
  console.log(counter);
});

function playNowButton() {
  function generateNumbers() {
    let numbers = [];
    for (var i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * 49) + 1;
      numbers.push(randomNumber);
    }
    let uniqueNumber = Math.floor(Math.random() * 10) + 1;
    numbers.push(uniqueNumber);
    var generatedNumbers = document.querySelector(".generatedNumbers");
    generatedNumbers.innerHTML = numbers.join(',');
    console.log(numbers);
    
    setTimeout(function() {
      checkWinningNumbers(numbers);
    }, 2000);
  }

  
  function checkWinningNumbers(numbers) {
    for (let i = 0; i < tickets.length; i++) {
      let matchCount = 0;
      for (let j = 0; j < tickets[i].numbers.length; j++) {
        if (numbers.includes(parseInt(tickets[i].numbers[j]))) {
          matchCount++;
          console.log("test");
        }
      }
      if (matchCount === 7) {
        console.log("You have won the lottery!");
        // showLotteryScene();
      }
      else{
        alert("You lost");
      }
    }
  }

  generateNumbers();
}

let playButton = document.getElementById("playNow");
playButton.addEventListener("click", playNowButton);


// setTimeout(generateNumbers, 60000);
// generateNumbers();

function tabela(){
  let tableBody = document.querySelector("tbody");
  let lastIndex = tickets.length - 1;
  let newRow = tableBody.insertRow();
  newRow.innerHTML = `<td>${tickets[lastIndex].id}</td><td>${tickets[lastIndex].numbers}</td><td>${tickets[lastIndex].tickets}</td><td>${tickets[lastIndex].prize}</td>`;
}






