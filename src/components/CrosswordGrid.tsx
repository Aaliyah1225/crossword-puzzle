import BlankCell from "./BlankCell";
import LetterCell from "./LetterCell";
import "./CrosswordGrid.css";
import { data } from "./CrosswordData.ts";
export default function CrosswordGrid() {
  const dataAnswer = data.playerAnswer.map((answer) => 
    <div>{answer}</div>
  );

  return (
    <>
      <div className="crossword">
        <LetterCell letter={dataAnswer} number="1" />
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