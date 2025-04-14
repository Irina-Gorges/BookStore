function saveToLocalStorage() {
  localStorage.setItem("booksData", JSON.stringify(books));
}

function getFromLocalStorage() {
  let storedBooks = localStorage.getItem("booksData");
  if (storedBooks) books = JSON.parse(storedBooks);
}

getFromLocalStorage();

function renderBooks() {
  let contentRef = document.getElementById("main_container--content");
  contentRef.innerHTML = "";
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    let commentsHtml = generateComments(books[indexBooks].comments);
    contentRef.innerHTML += getBooksTemplate(indexBooks, commentsHtml);
    let likeButtonRef = document.getElementById(
      `main_container--content--book_card--data--price_like--like--like_button${indexBooks}`
    );
    if (books[indexBooks].liked) {
      likeButtonRef.style.fill = "rgb(5, 170, 143)";
    } else {
      likeButtonRef.style.fill = "rgb(179, 251, 252)";
    }
  }
}
renderBooks();

function generateComments(comments) {
  let htmlStrings = [];
  for (let index = 0; index < comments.length; index++) {
    let html = getBooksCommentTemplate(comments[index]);
    htmlStrings.push(html);
  }
  let result = htmlStrings.join(""); //https://www.w3schools.com/jsref/jsref_join.asp

  return result;
}

function addNote(bookIndex) {
  let inputFieldRef = document.getElementById(
    `main_container--content--book_card--comments--input_container--input${bookIndex}`
  );
  let commentText = inputFieldRef.value;
  if (commentText !== "") {
    let newComment = {
      name: "Gast",
      comment: commentText,
    };
    books[bookIndex].comments.unshift(newComment);
    renderBooks();
    saveToLocalStorage();
  } else {
    inputFieldRef.style.borderColor = "turquoise";
  }
}
