import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Location from "./pages/Location";
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route exact path='/' element={<Home />} />
          <Route exact path='/location' element={<Location />} /> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/location' component={Location} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
