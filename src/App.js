import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
        
          <Route exact path="/" element={<Home/>}>
          </Route>

          <Route exact path="/contact" element={<Contact/>}>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
