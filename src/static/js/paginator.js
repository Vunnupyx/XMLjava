let books = [
    {
        img: '../static/images/22145329-n-morgan-javascript-dlya-detey-samouchitel-po-programmirovaniu-22145329.jpg',
        author: 'Ник Морган',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Компьютерная литература',
        firstString: 'JavaScript для детей.',
        secondString: 'Самоучитель по программированию'
    },
    {
        img: '../static/images/24499998-devid-flenagan-javascript-podrobnoe-rukovodstvo-6-e-izdanie-24499998.jpg',
        author: 'Дэвид Флэнаган',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'JavaScript. Подробное',
        secondString: 'руководство. 6-е издание'
    },
    {
        img: '../static/images/39158380-aditya-bhargava-grokaem-algoritmy-illustrirovannoe-posobie-dlya-p-39158380.jpg',
        author: 'Адитья Бхаргава',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'Грокаем алгоритмы.',
        secondString: ' Иллюстрированное пособие для программистов и любопытствующих'
    },
    {
        img: '../static/images/60132173-dzharon-lane-komu-prinadlezhit-buduschee-mir-gde-za-informaciu-platit-budu.jpg',
        author: 'Джарон Ланье',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'Кому принадлежит',
        secondString: ' будущее? Мир, где за информацию платить будут вам'
    },
    {
        img: '../static/images/50447564-mareyn-haverbeke-vyrazitelnyy-javascript-sovremennoe-veb-programm-50447564.jpg',
        author: 'Марейн Хавербеке',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'Выразительный',
        secondString: ' JavaScript. Современное веб-программирование (pdf+epub). 3-е издание'
    },
    {
        img: '../static/images/6444478-robert-s-martin-chistyy-kod-sozdanie-analiz-i-refaktoring-6444478.jpg',
        author: 'Роберт Мартин',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'Чистый код: создание,',
        secondString: ' анализ и рефакторинг (pdf+epub)'
    },
    {
        img: '../static/images/6444478-robert-s-martin-chistyy-kod-sozdanie-analiz-i-refaktoring-6444478.jpg',
        author: 'Роберт Мартин',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'Чистый код: создание,',
        secondString: ' анализ и рефакторинг (pdf+epub)'
    },
    {
        img: '../static/images/50447564-mareyn-haverbeke-vyrazitelnyy-javascript-sovremennoe-veb-programm-50447564.jpg',
        author: 'Марейн Хавербеке',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'Выразительный',
        secondString: ' JavaScript. Современное веб-программирование (pdf+epub). 3-е издание'
    },
    {
        img: '../static/images/60132173-dzharon-lane-komu-prinadlezhit-buduschee-mir-gde-za-informaciu-platit-budu.jpg',
        author: 'Джарон Ланье',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'Кому принадлежит',
        secondString: ' будущее? Мир, где за информацию платить будут вам'
    },
    {
        img: '../static/images/39158380-aditya-bhargava-grokaem-algoritmy-illustrirovannoe-posobie-dlya-p-39158380.jpg',
        author: 'Адитья Бхаргава',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'Грокаем алгоритмы.',
        secondString: ' Иллюстрированное пособие для программистов и любопытствующих'
    },
    {
        img: '../static/images/24499998-devid-flenagan-javascript-podrobnoe-rukovodstvo-6-e-izdanie-24499998.jpg',
        author: 'Дэвид Флэнаган',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Ужасы',
        firstString: 'JavaScript. Подробное',
        secondString: 'руководство. 6-е издание'
    },
    {
        img: '../static/images/22145329-n-morgan-javascript-dlya-detey-samouchitel-po-programmirovaniu-22145329.jpg',
        author: 'Ник Морган',
        title: 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.',
        genre: 'Компьютерная литература',
        firstString: 'JavaScript для детей.',
        secondString: 'Самоучитель по программированию'
    }
]


let tableBooks = document.querySelector('#books-box');
let pagination = document.querySelector('#pagination');

let pageSize = 6
let pageSizeLine = 3

let pageNum



let showBooks = (function () {
    let active;

    return function (books, item) {

        if (active) {
            active.classList.remove('active');
        }
        active = item;
        item.classList.add('active');

        pageNum = +item.innerHTML


        let start = (pageNum - 1) * pageSize;
        let end = start + pageSize;

        tableBooks.innerHTML = '';
        for (let i = start; i < end; i += pageSizeLine) {
            let notes = books.slice(i, i + pageSizeLine)
            let line = document.createElement('div')
            line.classList.add('line')

            for (let note of notes) {
                let book_item = document.createElement('div')
                book_item.classList.add('book-item')
                line.appendChild(book_item)

                let img = document.createElement("img")
                img.src = note.img
                img.alt = note.title

                let cover_material = document.createElement('div');
                cover_material.classList.add('cover-material')
                cover_material.appendChild(img)
                book_item.appendChild(cover_material);


                let linkAuthor = document.createElement('a')
                linkAuthor.href = "#"
                linkAuthor.title = note.title
                linkAuthor.innerHTML = note.author

                let author = document.createElement('div');
                author.classList.add('author')
                author.appendChild(linkAuthor)
                book_item.appendChild(author)

                let linkName = document.createElement('a')
                linkName.href = "#"
                linkName.title = note.title

                let name = document.createElement('div');
                name.classList.add('name')
                name.appendChild(linkName)
                book_item.appendChild(name)

                let spanFirstString = document.createElement('span')
                spanFirstString.classList.add('firstString')
                spanFirstString.innerHTML = note.firstString
                linkName.appendChild(spanFirstString)

                let spanSecondString = document.createElement('span')
                spanSecondString.classList.add('secondString')
                spanSecondString.innerHTML = note.secondString
                linkName.appendChild(spanSecondString)

                tableBooks.appendChild(line)
            }
        }

    };
}());

function createPagination(books) {

    let items = [];

    while (pagination.firstChild) {
        pagination.removeChild(pagination.firstChild);
    }
    let liPrev = document.createElement('li');
    liPrev.innerHTML = '«';
    liPrev.onclick = function () {
        if (pageNum > 1) {
            pageNum--
            showBooks(books, items[pageNum]);
        }
    }
    pagination.appendChild(liPrev)
    items.push(liPrev)


    const countOfItems = Math.ceil(books.length / pageSize)

    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li');
        li.innerHTML = i
        li.onclick = function () {
            showBooks(books, li)
        }
        pagination.appendChild(li);
        items.push(li);
    }


    let liNext = document.createElement('li');
    liNext.innerHTML = '»';
    liNext.onclick = function () {
        const latestNumber = items.length - 2
        if (pageNum < latestNumber) {
            pageNum++;
            showBooks(books, items[pageNum]);
        }
    }
    pagination.appendChild(liNext)
    items.push(liNext)


    showBooks(books, items[1]);
}

createPagination(books)


