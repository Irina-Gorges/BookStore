function init() {
  loadDB();
}

function loadDB() {
  let books_db = books;
  let result = books_db.filter((element) => {
    return element["name"] != null;
  });
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (i = 0; i < result.length; i++) {
    contentRef.innerHTML += `<div id="book_name">Titel:${result[i].name}</div>`;
    contentRef.innerHTML += `<div id="book_autor">Autor:${result[i].author}</div>`;
    contentRef.innerHTML += `<div id="book_likes">Likes:${result[i].likes}</div>`;
    contentRef.innerHTML += `<div id="book_liked">Liked:${result[i].liked}</div>`;
    contentRef.innerHTML += `<div id="book_price">Preis:${result[i].price}</div>`;
    contentRef.innerHTML += `<div id="book_year">Veröffentlicht:${result[i].publishedYear}</div>`;
    contentRef.innerHTML += `<div id="book_genre">Genre:${result[i].genre}</div>`;
  }
}
