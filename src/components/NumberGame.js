import React, { useState } from "react";

export default function NumberGame() {
  const [num, setNum] = useState("");
  const [guessResult, setGuessResult] = useState("");

  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  function onInput(e) {
    setNum(e.target.value);
  }

  function handleGuess() {
    const guessedNumber = parseInt(num);

    if (isNaN(guessedNumber)) {
      setGuessResult("Please enter a valid number.");
    } else {
      if (guessedNumber === randomNumber) {
        setGuessResult("Congratulations! You guessed the correct number.");
      } else {
        setGuessResult(
          `Sorry, the correct number was ${randomNumber}. Try again!`
        );
      }
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Enter your guess"
        value={num}
        onChange={onInput}
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{guessResult}</p>
    </div>
  );
}
