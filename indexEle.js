const eq = (lhs, rhs) => {
  if (Array.isArray(lhs)) {
    for (let i = 0; i < lhs.length; i++) {
      if (lhs[i] !== rhs[i]) return false;
    }
    return true;
  }
  return lhs === rhs;
};

const verifyEquals = (lhs, rhs) => {
  if (!eq(lhs, rhs))
    throw new Error("The expected out doesn't match the actual output");
};

const inputs = [["a", "b", "dd", "5"]];
const elements = ["5"];
const outputs = [4];

function indexEle(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) return i + 1;
  }

  return -1;
}

function runTest(i) {
  const expected = outputs[i];
  console.log(expected);
  const actual = indexEle(inputs[i], elements[i]);
  console.log(actual);
  verifyEquals(expected, actual);
}

runTest(0);
// runTest(1);
console.log("all thest passed for " + __filename);
