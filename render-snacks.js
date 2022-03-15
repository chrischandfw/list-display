export function renderSnackEl(snack) {
	/*<div class="snacks">
	<img src="./assets/skittles.png"/>
	<h3>Name: Skittles</h3>
	<p>Wholesale: 3 USD</p>
	<p>Retail: 7 USD</p>
	<p>Country of Origin: USA</p>
</div>*/
    const snackEl = document.createElement('div');
    const imgEl = document.createElement('img');
    const nameEl = document.createElement('h3');
    const wholesaleEl = document.createElement('p');
    const retailEl = document.createElement('p');
    const countryEl = document.createElement('p');

    snackEl.classList.add('snack');
    snackEl.style.background = snack.color;

    imgEl.src = `assets/${snack.name}.png`;
    nameEl.textContent = (snack.name);
    wholesaleEl.textContent = `Wholesale: ${snack.cost}`;
    retailEl.textContent = `Retail: ${snack.retailPrice}`;
    countryEl.textContent = snack.country;

    snackEl.append(imgEl, nameEl, wholesaleEl, retailEl, countryEl);

    return snackEl;


}