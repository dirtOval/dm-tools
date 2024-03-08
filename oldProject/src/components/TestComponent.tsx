import { useNavigate } from 'react-router-dom';
import { BrowserWindow } from 'electron';
// const { App } = window;

const TestComponent = () => {
  const navigate = useNavigate();

  const toggleSecondWindow = () => {
    const second = BrowserWindow.fromId(2);
    second.isVisible() ? second.show() : second.hide();
  };

  return (
    <main>
      <h1>It's the Main Screen</h1>
      <button onClick={() => navigate('/testtwo')}>Go to other screen.</button>
      <button onClick={toggleSecondWindow}>Open Second Window</button>
    </main>
  )
}

export default TestComponent;