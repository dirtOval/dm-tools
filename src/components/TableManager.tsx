import TableSelectorPane from './TableSelectorPane.tsx';
import DisplayPane from './DisplayPane.tsx';
import { useState } from 'react';
import '../Main.css';

const TableManager = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="table-manager">
      <TableSelectorPane />
      <DisplayPane />
    </div>
  )
};

export default TableManager;