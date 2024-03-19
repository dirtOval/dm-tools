import TableSelectorPane from './TableSelectorPane.tsx';
import DisplayPane from './DisplayPane.tsx';
import { useState, useEffect } from 'react';
import '../Main.css';

const TableManager = () => {
  const [selected, setSelected] = useState(0);
  const [tables, setTables] = useState([])

  useEffect( () => {
    (async function getEncounters() {
      let response = await fetch('http://localhost:4200/encounters');
      //@ts-ignore
      response = await response.json();
      console.log(JSON.stringify(response.encounters));
    })();
  }, []);

  return (
    <div className="table-manager">
      <TableSelectorPane />
      <DisplayPane />
    </div>
  )
};

export default TableManager;