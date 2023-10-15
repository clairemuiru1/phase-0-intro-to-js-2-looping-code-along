// Code your solutions in this file
// Define the writeCards function
function writeCards(names, event) {
    const thanks = [];
    for (const name of names) {
      thanks.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return thanks;
  }
  // Define the countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  // Example usage:
  const names = ["Alice", "Bob", "Charlie"];
  const event = "birthday";
  const countdownNumber = 5;

  console.log(writeCards(names, event));
  countDown(countdownNumber);