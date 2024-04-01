import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
        
          <Route exact path="/" element={<Home/>}>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
