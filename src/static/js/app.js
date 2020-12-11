//Задание 1
let inputs = document.getElementsByTagName('input');
let savePlaceholder
for (let input of inputs) {
    input.onfocus = function () {
        savePlaceholder = this.placeholder
        this.placeholder = ''
    }
    input.onblur = function () {
        this.placeholder = savePlaceholder
    }
}

//Задание 2
function validatePrice(val) {
    var reg = [/^\D+/, /[^.,\d]+/g, /[\.,]+/, /(\d+\.\d{2}).*$/];
    return val.replace(reg[0], '').replace(reg[1], '').replace(reg[2], '.').replace(reg[3], '$1');
}


//Прочее

const create_book = document.getElementById('create-book');
const form_wrap = document.getElementById('form-wrap');

function hide_page(show_modal, hide_modal) {
    show_modal.addEventListener('click', function () {
        hide_modal.classList.remove('hide')
    })
    hide_modal.addEventListener('click', function (e) {
        if (e.target.id === hide_modal.id)
            hide_modal.classList.add('hide')
    })
}

hide_page(create_book, form_wrap)


const sorting_dropdown = document.getElementById('sorting-dropdown')
const sorting = document.getElementById('sorting')

sorting.addEventListener('click', function () {
    if (sorting_dropdown.className === 'hide') {
        sorting_dropdown.classList.remove('hide')
    } else {
        sorting_dropdown.classList.add('hide')
    }
})


function FindOnBooks() {

    let input = document.getElementById('text-to-find').value; //получаем значение из поля в html
    let search = new RegExp(input)

    if (input.length < 3) {
        alert('Для поиска вы должны ввести три или более символов');
    }

    if (input.length >= 3) {
        let result_books = [];

        for (let i = 0; i <= books.length; i++) {
            for (let booksId in books[i]) {
                let category = books[i][booksId];
                if (search.test(category))
                    result_books.push(books[i])
            }
        }

        if (result_books.length > 0) {
            createPagination(result_books)
        } else alert('Ничего не найдено!')

    }
}

//Поиск - запуск по нажатию на enter
document.getElementById('text-to-find').onkeypress = function (e) {
    if (e.keyCode === 13) {
        FindOnBooks()
    }
}

//Сортировка по жанрам
function editGenre(genre) {

    let selectGenre = document.querySelector('#sorting span')

    let result_books = []

    switch (genre) {
        case 'Все':
            selectGenre.innerHTML = 'Жанр:'
            createPagination(books)
            break
        case 'Ужасы':
            for (let i = 0; i < books.length; i++) {
                if (books[i].genre === genre)
                    result_books.push(books[i])
            }
            selectGenre.innerHTML = genre
            createPagination(result_books)
            break
        case 'Детективы':
            for (let i = 0; i < books.length; i++) {
                if (books[i].genre === genre)
                    result_books.push(books[i])
            }
            selectGenre.innerHTML = genre
            createPagination(result_books)
            break;
        case 'Фантастика':
            for (let i = 0; i < books.length; i++) {
                if (books[i].genre === genre)
                    result_books.push(books[i])
            }
            selectGenre.innerHTML = genre
            createPagination(result_books)
            break
        case 'Компьютерная литература':
            for (let i = 0; i < books.length; i++) {
                console.log('сработало')
                if (books[i].genre === genre)
                    result_books.push(books[i])
            }
            selectGenre.innerHTML = genre
            createPagination(result_books)
            break
    }

}