import styles from "./LetterCell.module.css";
import cellStyles from "./Cell.module.css";
function LetterCell(props: any) {
  return (
    <>
      <div tabIndex={0} className={cellStyles.cell}>
        <span className={`${styles.number}`}>{props.number}</span>
        <div className={`${styles.letter}`}>{props.letter}</div>
      </div>
    </>
  );
}

export default LetterCell;
