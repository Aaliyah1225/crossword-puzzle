import BlankCell from './components/BlankCell'
import LetterCell from './components/LetterCell'
import './App.css'


function App() {
  return (
<main> 
<BlankCell />
  <LetterCell 
  letter="X"
  number="12"
  />
</main>
  );
}

export default App;