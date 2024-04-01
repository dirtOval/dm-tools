import TableSelectorPane from './TableSelectorPane.tsx';
import DisplayPane from './DisplayPane.tsx';
import { useState, useEffect, useCallback } from 'react';
import '../Main.css';

const TableManager = () => {
  const [selected, setSelected] = useState(0);
  const [tables, setTables] = useState([])

  const getBiomes = useCallback(() => {
    const data = window.db.biomes?.getAllBiomes();
    setTables(data);
  }, [])
  
  useEffect( () => {
    //RIP my express server, at least it was a good refresher
    //
    // let tables = [];
    // (async function getEncounters() {
    //   tables = await fetch('http://localhost:4200/encounters');
    //   //@ts-ignore
    //   tables = await tables.json();
    //   // console.log(JSON.stringify(tables.encounters));
    //   setTables(tables.encounters);
    // })();
    getBiomes();
  }, []);

  return (
    <div className="table-manager">
      <TableSelectorPane />
      <DisplayPane tables={tables} />
    </div>
  )
};

export default TableManager;