export function renderArtistsEl(artists) {
    const artistsEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const birthDateEl = document.createElement('p');
    const albumsEl = document.createElement('p');
    const keywordsEl = document.createElement('ul');

    artistsEl.classList.add('artist');

    nameEl.textContent = artists.name;
    birthDateEl.textContent = artists.birthDate;
    albumsEl.textContent = `Title: ${artists.albums.title}, Year: ${artists.albums.year}`;

    for (let keyword of artists.keywords) {
        const keywordEl = document.createElement('li');
        keywordEl.textContent = keyword;

        keywordsEl.append(keywordEl);
    }

    artistsEl.append(nameEl, birthDateEl, albumsEl);

    return artistsEl;
	
}