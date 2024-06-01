"use client";

import axios from "axios";

interface MenuProps {
  onStartGame: () => void;
}

export default function Menu({ onStartGame }: MenuProps) {
  const handleStartGame = () => {
    axios
      .post("/api/start-game")
      .then((response) => {
        onStartGame();
      })
      .catch((error) => {});
  };

  return (
    <div className="modal">
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}
