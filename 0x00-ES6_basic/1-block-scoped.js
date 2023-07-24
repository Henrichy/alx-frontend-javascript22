export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // Remove the variable declaration "var" to update the existing variable.
    task2 = false; // Remove the variable declaration "var" to update the existing variable.
  }

  return [task, task2];
}
