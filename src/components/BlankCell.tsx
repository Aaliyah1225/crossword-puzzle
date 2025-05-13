import styles from "./BlankCell.module.css";
import cellStyles from "./Cell.module.css";
function BlankCell(props: any) {
  return (
    <>
      <div className={`${styles.blank} ${cellStyles.cell}`}>{props.blank}</div>
    </>
  );
}
export default BlankCell;
