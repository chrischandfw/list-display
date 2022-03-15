export function renderGlobalTechEl(tech) {
    //const globalTechEl = document.createElement('div');
    const nameEl = document.createElement('p');


    nameEl.classList.add('tech');

    nameEl.textContent = tech;

    return nameEl;
}