import { Routes, Route } from 'react-router-dom';
import Calender from './Calender';
import Daily from './Daily';
import Monthly from './Monthly';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calender />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/monthly" element={<Monthly />} />
    </Routes>
  );
}

export default App;
