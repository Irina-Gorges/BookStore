function getBooksTemplates(i) {
    return `<div id="bookcontent${i}"><p>Name:${books[i].name}</p>
    <p>Author:${books[i].author}</p>
    <p>Likes:${books[i].likes}</p>
    <p>Liked:${books[i].liked}</p>
    <p>Preis:${books[i].price}</p>
    <p>Veröffentlicht:${books[i].publishedYear}</p>
    <p>Genre:${books[i].genre}</p>
    <div id="bookscomm${i}" class="bcomm"><p></p>
        </div></div>`;
}
