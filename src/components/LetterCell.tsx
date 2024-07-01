import './LetterCell.css'

function LetterCell(props: any) {
  return (
    <>
<div className="cell">
  <span>{props.number}</span>
  <div>{props.letter}</div>
</div>
</>
  );
}

export default LetterCell;
