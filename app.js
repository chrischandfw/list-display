// import functions and grab DOM elements
import { snacks } from './snacks-data.js';
import { renderSnackEl } from './render-snacks.js';

import { globalTech } from './globalTech-data.js';
import { renderGlobalTechEl } from './render-globalTech.js';

// initialize global state
const snackListEl = document.querySelector('.snacks-list');
const techListEl = document.querySelector('.tech-list');

for (let snack of snacks) {
    const snackEl = renderSnackEl(snack);

    snackListEl.append(snackEl);
}

for (let tech of globalTech) {
    const globalTechEl = renderGlobalTechEl(tech);

    techListEl.append(globalTechEl);
}

