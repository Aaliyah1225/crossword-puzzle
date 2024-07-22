import BlankCell from "./BlankCell";
import LetterCell from "./LetterCell";
import "./CrosswordGrid.css";
function CrosswordGrid() {
  return (
    <>
      <div className="crossword">
        <LetterCell number="1" />
        <LetterCell number="2" />
        <LetterCell number="3" />
        <LetterCell number="4" />
        <BlankCell />
        <BlankCell />
        <LetterCell letter="H" number="5" />
        <LetterCell letter="E" />
        <LetterCell letter="L" />
        <LetterCell letter="L" />
        <LetterCell letter="O" number="6" />
        <BlankCell />
        <BlankCell />
        <LetterCell letter="W" number="7" />
        <LetterCell letter="O" />
        <LetterCell letter="R" />
        <LetterCell letter="L" />
        <LetterCell letter="D" number="8" />
        <BlankCell />
        <BlankCell />
        <LetterCell number="9" />
        <LetterCell />
        <LetterCell />
        <LetterCell />
      </div>
    </>
  );
}

export default CrosswordGrid;
