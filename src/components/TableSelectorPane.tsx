import TableSelectorOptions from "./TableSelectorOptions.tsx";
import TableList from "./TableList.tsx";

const TableSelectorPane = () => {
  return (
    <div className="table-selector-pane">
      <TableSelectorOptions />
      <TableList />
    </div>
  )
};

export default TableSelectorPane;