import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from '../Guesses';
import GuessInput from '../GuessInput';
import WinBanner from '../WinBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import LoseBanner from '../LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const addGuess = (guess) => {
    setGuesses([...guesses, { id: crypto.randomUUID(), guess }]);
  };
  const won = guesses.length > 0 && guesses[guesses.length - 1].guess === answer
  const lost = guesses.length >= NUM_OF_GUESSES_ALLOWED && !won

  return (
    <div>
      {won && <WinBanner numGuesses={guesses.length}/>}
      {lost && <LoseBanner answer={answer}/>}
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput onSubmit={addGuess} disabled={lost} />
    </div>
    
  );
}

export default Game;
