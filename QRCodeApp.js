function QRCodeApp() {
  let counter = 0;
  function increment() {
    counter++;
  }
  function decrement() {
    if (counter > 0) {
      counter--;
    }
  }
  function returnCounter() {
    return counter;
  }
  function redBgColor() {
    return "red";
  }
  function blueBgColor() {
    return "blue";
  }
  function greenBgColor() {
    return "green";
  }
  return {
    increment,
    decrement,
    returnCounter,
    redBgColor,
    blueBgColor,
    greenBgColor,
  };
}
