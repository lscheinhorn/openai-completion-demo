import './App.css';
import { useState } from 'react'
import { Header, Prompt, Completions } from './Components'

function App() {
const [ completions, setCompletions ]  = useState([])

  return (
    <div className="App">
      <Header />
      <Prompt 
        completions={ completions }
        setCompletions={ setCompletions }
      />
      <Completions 
        completions={ completions }
      />
    </div>
  );
}

export default App;
