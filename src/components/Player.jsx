import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // Best practice updating State based on old State correctly because React schedules States update

    if(isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={handleInputChange}
            required
            className="player-name"
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
