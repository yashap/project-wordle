import React from 'react';

const GuessInput = ({ onSubmit, disabled }) => {
  const [guess, setGuess] = React.useState('');
  const [error, setError] = React.useState(null);
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(guess);
        setGuess('');
      }}
      noValidate={false}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          if (error) {
            setError(null);
          }
          setGuess(event.target.value.toUpperCase());
        }}
        disabled={disabled}
        required
        minLength={5}
        maxLength={5}
        // minLength doesn't work properly when we change the value after setting, so we use pattern + label instead
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </form>
  )
}

export default GuessInput;
