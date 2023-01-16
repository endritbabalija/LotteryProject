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
    // setTimeout(generateNumbers, 60000);
}
  
generateNumbers();