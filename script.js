const form = document.querySelector("#newBook-form");
const bookCardContainer = document.querySelector(".bookCard-container");
let myLibrary = [];

form.addEventListener("submit", submitNewBook)



console.log(myLibrary)
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


addBookToLibrary("The Hobbit", "JJR", "330", "yes")
addBookToLibrary("Bravo", "JJR", "330", "yes")
console.log(myLibrary)



/*          --- LIBRARY FUNCTIONS ---           */
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}


/*          --- FORM FUNCTIONS ---          */
function submitNewBook(event) {
    const inputTitle = document.querySelector("#title").value;
    const inputAuthor = document.querySelector("#author").value;
    const inputPages = document.querySelector("#pages").value;
    const inputRead = document.querySelector('input[name="read"]:checked').value;

    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead)
    createNewBookCard(inputTitle, inputAuthor, inputPages, inputRead)

    console.log(myLibrary)
    form.reset()
    event.preventDefault()
}

function createNewBookCard(title, author, pages, read) {
    const bookCard = document.createElement("div");
    const titleCard = document.createElement("h2");
    const authorCard = document.createElement("h2");
    const pagesCard = document.createElement("h2");
    const readCard = document.createElement("h2");
    
    titleCard.textContent = title;
    authorCard.textContent = author;
    pagesCard.textContent = pages;
    readCard.textContent = read;

    bookCard.appendChild(titleCard)
    bookCard.appendChild(authorCard)
    bookCard.appendChild(pagesCard)
    bookCard.appendChild(readCard)
    bookCard.classList.add("book-card")
    bookCardContainer.appendChild(bookCard)
}





/*          --- DOM MANIPULATION PRACTICE---            */
// const booksContainer = document.querySelector(".books-container");
// document.addEventListener("click", practice)

// function practice() {
//     const div = document.createElement("div");
//     const title = document.createElement("h2");
//     const author = document.createElement("h2");
//     const pages = document.createElement("h2");
//     const read = document.createElement("h2");
    
//     title.textContent = "Ronald";
//     author.textContent = "McDonald";
//     pages.textContent = "342";
//     read.textContent = "Yes"

//     div.appendChild(title)
//     div.appendChild(author)
//     div.appendChild(pages)
//     div.appendChild(read)
//     div.classList.add("book-card")
//     booksContainer.appendChild(div)
// }

// const inputRead = document.getElementsByName("read");
// console.log(inputRead)


