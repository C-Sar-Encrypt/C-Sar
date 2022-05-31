import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Base from './containers/Base';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Base />}/>
          <Route path="*" element={<Base />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
