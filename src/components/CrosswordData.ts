// Readonly Interface
interface CrosswordData {
  readonly playerAnswer: readonly string[][];
  readonly correctAnswer: readonly string[][];
}

//Example Objects
export const data: CrosswordData = {
  playerAnswer: [
    ["_", "_", "_", "_", ".", "."],
    ["_", "_", "_", "_", "_", "."],
    [".", "_", "_", "_", "_", "_"],
    [".", ".", "_", "_", "_", "_"],
  ],
  correctAnswer: [
    ["A", "H", "E", "M", ".", "."],
    ["C", "O", "D", "E", "R", "."],
    [".", "P", "E", "T", "E", "R"],
    [".", ".", "N", "S", "F", "W"],
  ],
};
