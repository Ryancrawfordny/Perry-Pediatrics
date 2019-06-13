import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Route } from "react-router-dom";
import About from './components/About/About'
import Services from './components/Services/Services'
import Visit from './components/Visit/Visit'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <header>
      <Header />
      </header>
      <main>

      <Route exact path="/" render={ () => <Home />}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
        <Route exact path="/visit" component={Visit} />
        <Route exact path="/contact" component={Contact} />
      </main> 
      <footer>
      <Footer />
      </footer>


    </div>
  );
}

export default App;
