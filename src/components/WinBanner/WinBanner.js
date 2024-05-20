import React from 'react';

const WinBanner = ({ numGuesses }) => {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong>{' Got it in '}<strong>{`${numGuesses} guesses`}</strong>.
      </p>
    </div>
  )
}

export default WinBanner;
