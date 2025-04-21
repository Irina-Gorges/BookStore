function getBooksTemplates(i) {
  return (
    `<div id="bookcontent${i}" class="book_container"><h3>${books[i].name}</h3>
    <img src="img/${books[i].name}.webp">
    <p class="author">von&nbsp;${books[i].author}</p>
    <div id="like"><p>${books[i].likes}` +
    renderHeart(i) +
    `</p></div>
    <div id="bookinfo"><p>Preis:${books[i].price}€&nbsp;|&nbsp;</p>
    <p>Veröffentlicht:${books[i].publishedYear}&nbsp;|&nbsp;</p>
    <p>${books[i].genre}</p></div><hr>
    <div id="bookscomm${i}" class="bcomm"><p></p>
        </div>
        <div id="usercomm">
                <input id="userinput${i}" class="user_input" type="text" max="100">
                <button id="usercommbtn" onclick="toggleOverlay(${i})">Senden</button>
            </div></div>`
  );
}

function getToogleOverlay(i) {
  return `<div onclick="bubblingprotection(event)" id="dialog">
              <div>
        <input id="username" class="user_name" type="text" placeholder="Username eintragen">
        <button id="btn_username" onclick="userComment(${i})">Senden</button>
       </div><div id="usererror"></div></div>`;
}

function getBooksContentTemplates(i) {
  return (
    `<h3>${books[i].name}</h3>
    <img src="img/${books[i].name}.webp">
    <p class="author">von&nbsp;${books[i].author}</p>
    <div id="like"><p>${books[i].likes}` +
    renderHeart(i) +
    `</p></div>
    <div id="bookinfo"><p>Preis:${books[i].price}€&nbsp;|&nbsp;</p>
    <p>Veröffentlicht:${books[i].publishedYear}&nbsp;|&nbsp;</p>
    <p>${books[i].genre}</p></div><hr>
    <div id="bookscomm${i}" class="bcomm"><p></p>
        </div>
        <div id="usercomm">
                <input id="userinput${i}" class="user_input" type="text" max="100">
                <button id="usercommbtn" onclick="toggleOverlay(${i})">Senden</button>
            </div>`
  );
}
