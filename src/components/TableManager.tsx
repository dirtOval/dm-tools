import { createRoot } from 'react-dom/client';
import TestComponent from './TestComponent';

const TableManager = () => {
  return (
    <>
      <TestComponent />
    </>
  )
}

const root = createRoot(document.body);
root.render(<TableManager />);