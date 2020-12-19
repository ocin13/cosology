import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './containers/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
