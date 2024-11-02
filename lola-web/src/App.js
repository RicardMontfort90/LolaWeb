import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Project } from './components/Project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          LOLA'S WEB
        </p>
        <button>
        About
        </button>
        <button>
        Project
        </button>
        <button>
        Contact
        </button>
        <About />
        <Project />
        <Contact />
      </header>
    </div>
  );
}

export default App;
