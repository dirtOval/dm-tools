import { Router, Route } from 'electron-router-dom';
import TestComponent from './components/TestComponent';
import TestTwo from './components/TestTwo';
import TestThree from './components/TestThree';

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path='/' element={<TestComponent />} />
          <Route path='/testtwo' element={<TestTwo />} />
        </>
      }
      second={<Route path="/" element={<TestThree />} />}
    />
  )
}