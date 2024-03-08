//NOT USING ANYMORE. Get rid of this before next commit prob.

import { createRoot } from 'react-dom/client';
import TestComponent from './TestComponent';

const TravelManager = () => {
  return (
    <>
      <h1>its the travel manager</h1>
    </>
  )
}

const root = createRoot(document.body);
root.render(<TravelManager />);