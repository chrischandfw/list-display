// import functions and grab DOM elements
import { snacks } from './snacks-data.js';
import { renderSnackEl } from './render-snacks.js';

import { globalTech } from './globalTech-data.js';
import { renderGlobalTechEl } from './render-globalTech.js';

import { actors } from './actors-data.js';
import { renderActorsEl } from './render-actors.js';

// initialize global state
const snackListEl = document.querySelector('.snacks-list');
const techListEl = document.querySelector('.tech-list');
const actorsListEl = document.querySelector('.actors-list');

for (let snack of snacks) {
    const snackEl = renderSnackEl(snack);

    snackListEl.append(snackEl);
}

for (let tech of globalTech) {
    const globalTechEl = renderGlobalTechEl(tech);

    techListEl.append(globalTechEl);
}

for (let actor of actors) {
    const actorsEl = renderActorsEl(actors);

    actorsListEl.append(actors);
}
