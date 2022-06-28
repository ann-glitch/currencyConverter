const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
let html = " ";

async function currency() {
  const res = await fetch("https://api.exchangerate.host/latest");
  const data = await res.json();
  console.log(data.rates);
  const arrayKeys = Object.keys(data.rates);
  console.log(arrayKeys);
}
currency();
