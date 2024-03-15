import TableInfo from './TableInfo.tsx';
import EncounterDisplay from './EncounterDisplay.tsx';

const DisplayPane = () => {
  return (
    <div className="display-pane">
      <TableInfo />
      <EncounterDisplay />
    </div>
  )
}

export default DisplayPane;