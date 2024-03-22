import TableSelectorPane from './TableSelectorPane.tsx';
import DisplayPane from './DisplayPane.tsx';
import { useState, useEffect } from 'react';
import '../Main.css';

const TableManager = () => {
  const [selected, setSelected] = useState(0);
  const [tables, setTables] = useState([])

  useEffect( () => {
    let tables = [];
    (async function getEncounters() {
      tables = await fetch('http://localhost:4200/encounters');
      //@ts-ignore
      tables = await tables.json();
      // console.log(JSON.stringify(tables.encounters));
      setTables(tables.encounters);
    })();
  }, []);

  return (
    <div className="table-manager">
      <TableSelectorPane />
      <DisplayPane tables={tables} />
    </div>
  )
};

export default TableManager;