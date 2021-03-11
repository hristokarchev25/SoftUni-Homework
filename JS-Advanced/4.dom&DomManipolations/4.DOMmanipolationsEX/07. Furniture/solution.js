function solve() {
  let [generate, buy] = [...document.querySelectorAll('button')];
  let [input, output] = document.querySelectorAll('textarea');
  generate.addEventListener('click', () => {
    let products = JSON.parse(input.value);

    products.forEach((product) => {
      let { name, img, price, deFactor } = product;
      let htmlString = `<tr>\n
        <td><img src="${img}"></td>\n
        <td><p>${name}</p></td>\n
        <td><p>${price}</p></td>\n
        <td><p>${deFactor}</p></td>\n
        <td><input type="checkbox" /></td>\n
        </tr`;

      document.querySelectorAll('tbody')[0].insertAdjacentHTML('beforeEnd', htmlString);
    });
    input.value = '';
  });
  buy.addEventListener('click', () => {
    let [products, prices, factors] = [[], [], []];
    [...document.querySelectorAll('tbody tr')].forEach(tr => {
      if (tr.querySelectorAll('input')[0].checked) {
        let data = tr.querySelectorAll('p');
        products.push(data[0].textContent);
        prices.push(Number(data[1].textContent));
        factors.push(Number(data[2].textContent));
      }
    });
    let totalPrice = prices.reduce((sum, num) => sum += num);
    let avgFactor = factors.reduce((sum, num) => sum += num) / factors.length;
    output.textContent = `Bought furniture: ${products.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor}`;
  });
}

solve = () => {
  const [furnitureInput, furnitureOutput] = document.querySelectorAll('textarea');
  const table = document.querySelectorAll('tbody')[0];

  document.querySelectorAll('button')[0].addEventListener('click', () => {
      const input = JSON.parse(furnitureInput.value);

      input.forEach((el) => {
          const productRowString =
              '<tr>' +
              `<td><img src="${el.img}"></td>` +
              `<td><p>${el.name}</p></td>` +
              `<td><p>${el.price}</p></td>` +
              `<td><p>${el.decFactor}</p></td>` +
              `<td><input type="checkbox" /></td>` +
              '</tr>';
          table.insertAdjacentHTML('beforeEnd', productRowString);
      });

      furnitureInput.value = '';
  });

  document.querySelectorAll('button')[1].addEventListener('click', () => {
      const [products, prices, factors] = [[], [], []];
      for (row of table.querySelectorAll('tr')) {
          if (row.querySelectorAll('input')[0].checked) {
              const productInfo = row.querySelectorAll('p');
              products.push(productInfo[0].textContent);
              prices.push(+productInfo[1].textContent);
              factors.push(+productInfo[2].textContent);
          }
      }

      const output = [
          'Bought furniture: ' + products.join(', '),
          'Total price: ' + prices.reduce((sum, num) => sum + num, 0).toFixed(2),
          'Average decoration factor: ' + factors.reduce((sum, num) => sum + num, 0) / (factors.length || 1),
      ];

      furnitureOutput.value = output.join('\n');
  });
};