import BlankCell from "./BlankCell";
import LetterCell from "./LetterCell";
import "./CrosswordGrid.css";
import { data } from "./CrosswordData.ts";
export default function CrosswordGrid() {
  
  const dataAnswer = data.playerAnswer[0].map((answer) =>
    <div>{answer}</div>
  );

  return (
    <>
      <div className="crossword">
        <LetterCell letter={dataAnswer[0]} number="1" />
        <LetterCell letter={dataAnswer[0]} number="2" />
        <LetterCell letter={dataAnswer[0]} number="3" />
        <LetterCell letter={dataAnswer[0]} number="4" />
        <BlankCell />
        <BlankCell />
        <LetterCell letter={dataAnswer[1]} number="5" />
        <LetterCell letter={dataAnswer[1]} number="6" />
        <LetterCell letter={dataAnswer[1]} number="7" />
        <LetterCell letter={dataAnswer[1]} number="8" />
        <LetterCell letter={dataAnswer[1]} number="9" />
        <BlankCell />
        <BlankCell />
        <LetterCell letter={dataAnswer[2]} number="10" />
        <LetterCell letter={dataAnswer[2]} number="11" />
        <LetterCell letter={dataAnswer[2]} number="12" />
        <LetterCell letter={dataAnswer[2]} number="13" />
        <LetterCell letter={dataAnswer[2]} number="14" />
        <BlankCell />
        <BlankCell />
        <LetterCell letter={dataAnswer[3]} number="15" />
        <LetterCell letter={dataAnswer[3]} number="16" />
        <LetterCell letter={dataAnswer[3]} number="17" />
        <LetterCell letter={dataAnswer[3]} number="18" />
      </div>
    </>
  );
}