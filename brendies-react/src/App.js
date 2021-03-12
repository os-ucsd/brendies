import logo from './logo.svg';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import Login from "./Components/Login";
import Profile from "./Components/Profile";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path = "/login" component = {Login} />
          <Route path = "/profile" component = {Profile} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
