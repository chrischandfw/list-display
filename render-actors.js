export function renderActorsEl(actors) {
    const actorsEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const birthDateEL = document.createElement('p');
    const moviesEl = document.createElement('p');

    actorsEl.classList.add('actor');

    nameEl.textContent = actors.name;
    birthDateEL.textContent = actors.birthDate;
    moviesEl.textContent = `Title: ${actors.movies.title}, Debut: ${actors.movies.year}`;

    actorsEl.append(nameEl, birthDateEL, moviesEl);

    return actorsEl;
}