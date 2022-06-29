const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
let html = " ";

async function currency() {
  const res = await fetch("https://api.exchangerate.host/latest"); //fetching the api url(this api didn't have any special key)
  const data = await res.json(); // we want the response in json.
  const rates = data.rates; // we just want the rates from the data.
  console.log(rates);
  const arrayKeys = Object.keys(rates); // we want the name of the currencies differently too
  console.log(arrayKeys);

  arrayKeys.map((item) => {
    return (html += `<option value=${item}>${item}</option>`); //displaying the countries' currencies on our html.
  });

  for (let i = 0; i < select.length; i++) {
    select[i].innerHTML = html;
  }

  function convert(first, second) {
    input[first].value =
      (input[second].value * rates[select[first].value]) /
      rates[select[second].value]; //this is a helper function for the conversion of the currencies.
  }

  input[0].addEventListener("keyup", () => convert(1, 0));

  input[1].addEventListener("keyup", () => convert(0, 1));

  select[0].addEventListener("change", () => convert(1, 0));

  select[0].addEventListener("change", () => convert(0, 1));
}
currency();
