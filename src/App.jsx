import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer, NavDrop } from './components/index'
import { Home, About, Services, Contact, Policies, History, Blog } from './pages/index'
import './App.css';

function App() {
  return (
    <Router>
      <NavDrop />
      <Header />
        <Switch>
          */nav routes
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
          */footer routes
          <Route path="/policies" component={Policies} />
          <Route path="/history" component={History} />
          <Route path="/blog" component={Blog} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
