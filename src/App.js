import { Datetime, News } from './components';
import BookList from './components/BookList';

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
      <BookList />
    </div>
  );
}

export default App;
