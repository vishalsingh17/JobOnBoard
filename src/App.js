import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';
import Services from './components/Services';
import PopupForm from './components/PopupForm';
import Page404 from './components/Page404';

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

          <Route exact path="/page404" element={<Page404/>}>
          </Route>

          <Route exact path="/form" element={<PopupForm/>}>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
