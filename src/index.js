import "./style.scss";
import QRCode from "qrcode";

const url = document.getElementById("url");
const button = document.getElementById("generate");
const canvas = document.getElementById("qr-code-here");

url.addEventListener("keyup", key => {
  if (key.code === "Enter") generateQRCode();
});

button.addEventListener("click", () => generateQRCode());

function generateQRCode() {
  const text = url.value;
  url.value = "";
  QRCode.toCanvas(canvas, text, function (error) {
    if (error) console.error(error);
    console.log("success!");
  });
}
