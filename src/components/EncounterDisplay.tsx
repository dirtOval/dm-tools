import Encounter from './Encounter.tsx';
import {useState, useEffect} from 'react';

//lmao the way encounters feeds into the list
//is gonna have to change.

const EncounterDisplay = () => {

  const [encounters, setEncounters] = useState([]);

  useEffect(() => {
    let range = [];
    for (let i = 2; i <= 20; i++) {
      range.push(i);
    }
    setEncounters(range);
  }, [])
  
  return (
    <div className="encounter-display">
      {encounters.map(num => <Encounter num={num}/>)}
    </div>
  )
};

export default EncounterDisplay;