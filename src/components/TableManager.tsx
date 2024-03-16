import TableSelectorPane from './TableSelectorPane.tsx';
import DisplayPane from './DisplayPane.tsx';
import '../Main.css';

const TableManager = () => {
  return (
    <div className="table-manager">
      <TableSelectorPane />
      <DisplayPane />
    </div>
  )
};

export default TableManager;