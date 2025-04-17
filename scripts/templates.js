function getBooksTemplates(i) {
    return (
        `<div id="bookcontent${i}" class="book_container"><p>Titel:${books[i].name} 
    <img src="img/${books[i].name}.webp"></p>
    <p>von&nbsp;${books[i].author}</p>
    <div id="like"><p>${books[i].likes}` +
        renderHeart(i) +
        `</p></div>
    <p>Preis:${books[i].price}€</p>
    <p>Veröffentlicht:${books[i].publishedYear}</p>
    <p>Genre:${books[i].genre}</p><br>
    <div id="bookscomm${i}" class="bcomm"><p></p>
        </div>
        <div id="usercomm">
                <input id="userinput" type="text" max="100">
                <button id="usercommbtn" onclick="userComment(${i})">Senden</button>
            </div></div>`
    );
}
