const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
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
    const container = document.querySelector('.card-container');
    container.innerHTML = '';
    for (const book of myLibrary) {
        let item = document.createElement("div");
        item.classList.add('card');

        addCard(item, book);
        removeButton(item, book);
        readButton(item, book);

        container.appendChild(item);
    }
}

function addCard(item, book) {
    let textContainer = document.createElement("div");
    let textNode = document.createTextNode(book.info());
    textContainer.classList.add('textNode');
    textContainer.appendChild(textNode)
    item.appendChild(textContainer);
}

function removeButton(item, book) {
    let buttonRemove = document.createElement("input");
    buttonRemove.type = 'button';
    buttonRemove.value = 'Remove';
    buttonRemove.classList.add('buttonRemove');
    buttonRemove.addEventListener('click', function() {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        loopArray();
    });
    item.appendChild(buttonRemove);
}

function readButton(item, book) {
    let buttonRead = document.createElement("input");
    buttonRead.type = 'button';
    buttonRead.value = 'Read';
    buttonRead.classList.add('buttonRead');
    buttonRead.addEventListener('click', function() {
        book.read = !book.read;
        loopArray();
    })
    item.appendChild(buttonRead);
}


const dialog = document.querySelector('dialog');
const openForm = document.querySelector('button#new-book');
const closeForm = document.querySelector('#close-form');

openForm.addEventListener('click', () => {
    dialog.showModal();
})

/* Closes dialog and creates new book object */
closeForm.addEventListener('click', function(event) {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('input[name="read"]:checked').value === 'true';

    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    loopArray();
    event.preventDefault();
    dialog.close();
})


/* Create two sample books */
const LOTR = new Book('The Lord of the Rings', 'Tolkien', 800, true);
const AFTR = new Book('b', 'bb', 300, true);
addBookToLibrary(LOTR);
addBookToLibrary(AFTR);


loopArray();
