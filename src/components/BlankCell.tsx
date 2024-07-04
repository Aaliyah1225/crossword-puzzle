import styles from "./BlankCell.module.css"
import cellStyles from "./Cell.module.css"
function BlankCell() {
    return (
<>
<div className={`${styles.blank} ${cellStyles.cell}`}></div>
</>
    );
}
export default BlankCell;