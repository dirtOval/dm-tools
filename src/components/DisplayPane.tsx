import TableInfo from './TableInfo.tsx';
import EncounterDisplay from './EncounterDisplay.tsx';

const DisplayPane = () => {
  return (
    <div className="table-display">
      <TableInfo />
      <EncounterDisplay />
    </div>
  )
}

export default DisplayPane;