let user = "kommt blad";
function init() {
    renderBooks();
}

function renderBooks() {
    const contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
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

function renderHeart(i) {
    let heartRef = books[i];

    if (heartRef.liked == true) {
        return `<img id="btn" src="img/heart_like.png" onclick="renderHeartView(${i})" alt="Like"></img>`;
    } else {
        return `<img id="btn" src="img/heart_notlike.png" onclick="renderHeartView(${i})" alt="Like"></img>`;
    }
}

function renderHeartView(i) {
    let heartviewRef = books[i];

    if (heartviewRef.liked == true) {
        books[i].liked = false;
        books[i].likes -= 1;
    } else {
        books[i].liked = true;
        books[i].likes += 1;
    }
    renderBooks();
}

function userComment(i) {
    let userRef = user;
    let userInputRef = document.getElementById("userinput");
    books[i].comments.push({ name: userRef, comment: userInputRef.value });
    renderBooks();
}

function toggleOverlay() {
    // Funktion zum Öffnen des User Eingabefelds im Dialog
    const dialogUserRef = document.getElementById("main_container");

    let overlayRef = document.getElementById("overlay");

    overlayRef.innerHTML = "";
    overlayRef.innerHTML = `<div onclick="bubblingprotection(event)" id="dialog">
              <div id="username">
        <input type="text" placeholder="Username eintragen">
        <button id="btn_username" onclick="toogleOverlay">Senden</button>
       </div></div>`;

    toggleClose();
}

function toggleClose() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
}

function bubblingprotection(event) {
    // console.log("dialog");
    event.stopPropagation();
}

// Logo einbauen
// Overlay erstellen
// UserName Eingabefeld setzen
// hübsch machen
