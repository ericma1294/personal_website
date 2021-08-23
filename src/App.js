import './style/App.css';
import './style/style.css';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <HomePage />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
