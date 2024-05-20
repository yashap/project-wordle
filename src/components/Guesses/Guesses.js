import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const defaultGuesses = range(0, NUM_OF_GUESSES_ALLOWED).map(() => ({ id: crypto.randomUUID(), guess: '' }));

const Guesses = ({ guesses, answer }) => {
  const guessesWithDefaults = defaultGuesses.map((defaultGuess, idx) => {
    return guesses[idx] ?? defaultGuess;
  });
  return (
    <div className="guess-results">
      {guessesWithDefaults.map(({ id, guess }) => (
        <Guess key={id} guess={guess} answer={answer} />
      ))}
    </div>
  )
}

export default Guesses;
