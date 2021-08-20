import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register';
import Shop from './routes/Shop';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
