function init() {
    renderbooks();
}

function renderbooks() {
    const contentRef = document.getElementById("content");

    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML += getBooksTemplates(i);
        getCommentsTemplates(i);
    }
}

function getCommentsTemplates(i) {
    let commentsRef = document.getElementById(`bookscomm${i}`);
    for (let c = 0; c < books[i].comments.length; c++) {
        commentsRef.innerHTML += `<p>Name:${books[i].comments[c].name}</p><p>Kommentare:${books[i].comments[c].comment}</p>`;
    }
}
