
const generateButton = document.querySelector("#generate");
const lengthInput = document.querySelector("#length");
const charsetSelect = document.querySelector("#charset");
const codeContainer = document.querySelector("#code");

const charsets = {
  alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  alphabetic: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789"
};

function generateCode(length, charset) {
  let code = "";
  for (let i = 0; i < length; i++) {
    code += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return code;
}

generateButton.addEventListener("click", () => {
  const length = lengthInput.value;
  const charset = charsets[charsetSelect.value];
  codeContainer.textContent = generateCode(length, charset);
});

