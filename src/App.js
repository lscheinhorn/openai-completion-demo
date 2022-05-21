import logo from './logo.svg';
import './App.css';
import { Header, Prompt, ResponseList } from './Components'

function App() {
  return (
    <div className="App">
      <Header />
      <Prompt />
      <ResponseList />
    </div>
  );
}

export default App;
