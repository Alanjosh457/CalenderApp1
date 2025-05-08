// App.jsx or main.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calender from './Calender';
import Daily from './Daily';
import Monthly from './Monthly';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calender />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
