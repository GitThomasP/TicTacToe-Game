import { useState } from "react"

export default function Player({intialName, symbol, isActive, onNameChange}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(intialName);

    function handleEdit() {
        setIsEditing((editing) => !editing);

        if(isEditing)
          {
            onNameChange(symbol, playerName);
          }
    }
    
    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
    <li className={isActive ? 'active' : undefined}>
    <span className='player'>
      {isEditing 
      ? <input value={playerName} type="text" required onChange={handleNameChange}></input> 
      : <span className='player-name'>{playerName}</span>
      }
      <span className='player-symbol'>{symbol}</span>
    </span>

    <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
    )
}