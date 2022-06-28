const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
let html = " ";

async function currency() {
  const res = await fetch("https://api.exchangerate.host/latest");
  const data = await res.json();
  const rates = data.rates;
  console.log(rates);
  const arrayKeys = Object.keys(rates);
  console.log(arrayKeys);

  arrayKeys.map((item) => {
    return (html += `<option value=${item}>${item}</option>`);
  });

  for (let i = 0; i < select.length; i++) {
    select[i].innerHTML = html;
  }
}
currency();
