import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>{/* Home page */}
      </Routes>
    </Router>
  );
}

export default App;
