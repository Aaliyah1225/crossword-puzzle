import styles from './LetterCell.module.css'
import cellStyles from "./Cell.module.css"
function LetterCell(props: any) {
  return (

    <>
<div className="cell">
  <span className={`${styles.number} ${cellStyles.cell}`}>{props.number}</span>
  <div className={`${styles.letter} ${cellStyles.cell}`}>{props.letter}</div>
</div>
</>
  );
}

export default LetterCell;
