import React, { useEffect, useState } from "react";

import useWordle from "../../hooks/useWordle";
import Gridle from "./grid";
import Keypad from "./keypad";
import keys from "../../constants/keys";
import Modal from "./modal";

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } =
    useWordle(solution);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      <Gridle guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad keys={keys} usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}
