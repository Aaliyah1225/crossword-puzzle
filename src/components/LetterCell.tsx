import './LetterCell.css'

function LetterCell(props: any) {
  return (

    <>
<div className="cell">
  <span className="number">{props.number}</span>
  <div className="letter">{props.letter}</div>
</div>
</>
  );
}

export default LetterCell;
