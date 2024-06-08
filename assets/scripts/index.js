document.querySelector("#calculate").addEventListener("click", (event) => {
  event.preventDefault();
  const men = Number(document.querySelector("#men").value);
  const women = Number(document.querySelector("#women").value);
  const children = Number(document.querySelector("#children").value);
  const result = document.querySelector("#result");

  let meat = 0;
  let chicken = 0;
  let sausage = 0;
  let beer = 0;
  let soda = 0;

  if (men == 0 && women == 0 && children == 0) {
    result.innerHTML = `<p>Por favor, insira valores válidos.</p>`;
    return;
  }

  if (men > 0) {
    meat = 0.5 * men;
    chicken = 0.2 * men;
    sausage = 0.2 * men;
    soda = 0.3 * men;
    beer = 0.8 * men;
  }

  if (women > 0) {
    meat += 0.3 * women;
    chicken += 0.2 * women;
    sausage += 0.2 * women;
    soda += 0.4 * women;
    beer += 0.5 * women;
  }

  if (children > 0) {
    meat += 0.2 * children;
    chicken += 0.1 * children;
    sausage += 0.2 * children;
    soda += 0.2 * children;
    beer += 0 * children;
  }

  result.innerHTML = `
    <ul>
      <li><span>${meat.toFixed(1)}kg</span> de carne bovina.</li>
      <li><span>${chicken.toFixed(1)}kg</span> de frango.</li>
      <li><span>${sausage.toFixed(1)}kg</span> de linguiça.</li>
      <li><span>${soda.toFixed(1)}l</span> de refrigerante.</li>
      <li><span>${beer.toFixed(1)}l</span> de cerveja.</li>
    </ul>
  `;
  return;
});
