const inputText = document.querySelector("#inputText");
const btn = document.querySelector("#btn");
const output = document.querySelector("#outputText");

const apiEndpoint = `https://api.funtranslations.com/translate/ferb-latin.json`;

const getUrl = (data) => `${apiEndpoint}?text=${data}`;

const errorHandler = (err) => {
  console.log("error", err);
  alert("unknown error has occurred");
};

const clickHandler = async () => {
  let actualText = inputText.value;
  if (actualText === "") {
    alert("please provide some text in input box...");
  } else {
    await fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => (output.innerText = data.contents.translated))
      .catch(errorHandler);
  }
};

btn.addEventListener("click", clickHandler);
