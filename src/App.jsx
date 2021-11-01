import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer, NavDrop } from './components/index'
import { Home, About, Services, Contact } from './pages/index'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <NavDrop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;