
import './App.css';
import Header from './components/Header';
import Field from './components/Field';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ShowModal from './components/ShowModal';
import AllTransaction from './components/AllTransaction';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Field/>
      <Switch>
      <Route exact path="/register">
          <ShowModal/>
      </Route>
      <Route exact path='/Alltransactions'>
        <AllTransaction/>
      </Route>
      </Switch>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
