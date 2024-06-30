import './App.css'

function App() {
  return (
<html lang="en">

<head>
  <meta charSet="UTF-8" />
  <title>Crossword Puzzle Game</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
<div className="crossword-puzzle">
      <div className="cell blank"></div>
      <div className="cell filled">     
        <span className="number">12</span>
        <div className="letter">X</div>
    </div>
</div>
</body>
</html>
  );
}

export default App;