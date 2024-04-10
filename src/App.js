import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
        
          <Route exact path="/" element={<Home/>}>
          </Route>
          
          <Route exact path="/contact" element={<Contact/>}>
          </Route>

          <Route exact path="/services" element={<Services/>}>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
