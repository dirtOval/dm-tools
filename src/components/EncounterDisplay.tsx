import Encounter from './Encounter.tsx';
import {useState, useEffect} from 'react';

//lmao the way encounters feeds into the list
//is gonna have to change.

const EncounterDisplay = ({tables}) => {

  // const [encounters, setEncounters] = useState([]);

  // useEffect(() => {
  //   let range = [];
  //   for (let i = 2; i <= 20; i++) {
  //     range.push(i);
  //   }
  //   setEncounters(range);
  // }, [])

  useEffect(() => {
    console.log('we got tables :O');
    console.log(JSON.stringify(tables));
  }, [tables])
  
  return (
    <div className="encounter-display">
      {tables.map(table => {return ( <Encounter name={table.name} order={table.order} description={table.description} /> )})}
    </div>
  )
};

export default EncounterDisplay;