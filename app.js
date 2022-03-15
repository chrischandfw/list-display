// import functions and grab DOM elements
import { snacks } from './snacks-data.js';
import { renderSnackEl } from './render-snacks.js';

// initialize global state
const snackListEl = document.querySelector('.snack-list');

for (let snack of snacks) {
    const snackEl = renderSnackEl(snack.name, snack.cost, snack.retailPrice, snack.country);

    snackListEl.append(snackEl);
}


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
