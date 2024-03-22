import TableInfo from './TableInfo.tsx';
import EncounterDisplay from './EncounterDisplay.tsx';

const DisplayPane = ({tables}) => {
  return (
    <div className="display-pane pane">
      <TableInfo />
      <EncounterDisplay tables={tables} />
    </div>
  )
}

export default DisplayPane;