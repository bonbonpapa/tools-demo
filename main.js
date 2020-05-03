const hello = "hello";
function returnHello() {
  const returnValue = hello;
  // eslint-disable-next-line no-console
  console.log("hello test");
  return returnValue;
}

returnHello();
