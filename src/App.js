import logo from './logo.svg';
import './App.css';
import Textbox from './components/Textbox/Textbox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick &amp; Morty Character Map</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Textbox>
          Ohhh uh oh geeze -- h-h-here's a character map of all the characters on the show. You can select filters to whichever you like
          or search for your favorite character. A-a-at the top is a random character. Click through to see a full profile.
        </Textbox>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
