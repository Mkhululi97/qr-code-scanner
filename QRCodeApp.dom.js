const bodyBgColor = document.querySelector(".color-div");
const counterEle = document.querySelector(".number");
const qrCodeApp = QRCodeApp();
function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  if (decodedText === "Plus") {
    qrCodeApp.increment();
    qrCodeApp.returnCounter();
  } else if (decodedText === "Minus") {
    qrCodeApp.decrement();
    qrCodeApp.returnCounter();
  }
  if (qrCodeApp.returnCounter() < 50) {
    bodyBgColor.style.backgroundColor = "#fff";
  }
  if (qrCodeApp.returnCounter() > 50) {
    bodyBgColor.style.backgroundColor = qrCodeApp.redBgColor();
  }
  if (qrCodeApp.returnCounter() > 100) {
    bodyBgColor.style.backgroundColor = qrCodeApp.blueBgColor();
  }
  if (qrCodeApp.returnCounter() > 150) {
    bodyBgColor.style.backgroundColor = qrCodeApp.greenBgColor();
  }
  counterEle.innerText = qrCodeApp.returnCounter();
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250,
});
html5QrcodeScanner.render(onScanSuccess);
