const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (this.read) {
            return `${this.title} by ${this.author}, ${this.pages} pages, read`
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function loopArray() {
    for (const book of myLibrary) {
        let item = document.createElement("div");
        item.classList.add('card');
        let textNode = document.createTextNode(book.info());
        item.appendChild(textNode);
        document.body.appendChild(item);
    }
}

const dialog = document.querySelector('dialog');
const newBook = document.querySelector('button#new-book');
const closeForm = document.querySelector('button#close-form');

newBook.addEventListener('click', () => {
    dialog.showModal();
})

closeForm.addEventListener('click', () => {
    dialog.close();
})

const LOTR = new Book('The Lord of the Rings', 'Tolkien', 800, true);
const AFTR = new Book('b', 'bb', 300, true);
addBookToLibrary(LOTR);
addBookToLibrary(AFTR);
loopArray();
