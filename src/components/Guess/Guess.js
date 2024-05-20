import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

const EmptyGuess = () => {
  return (
    <>
      {
        range(0, 5).map((letter, index) => (
          <span className="cell" key={index}>{''}</span>
        ))
      }
    </>
  )}
;

const Guess = ({ guess, answer }) => {
  return (
    <p className="guess">
      {guess.length === 0
        ? <EmptyGuess />
        : checkGuess(guess, answer).map(({ letter, status }, index) => (
          <span className={`cell ${status}`} key={index}>{letter}</span>
        ))}
    </p>
  )
}

export default Guess;
