import './App.css';
import { Datetime, News } from './components';

function App() {
  // TODO: show/hide widget button
  // Store with cookies?
  // Performance improvements
  return (
    <div className="App">
      <div className="widget">
        <Datetime />
        <News />
        <button type="button">Show/hide widget</button>
      </div>
      <p>This is our dashboard - what do we want to show here?</p>
    </div>
  );
}

export default App;
