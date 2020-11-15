var input, search, pr, result, result_arr, locale_HTML, result_store;

locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)

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

function FindOnPage(name, status) {

    input = document.getElementById(name).value; //получаем значение из поля в html

    if (input.length < 3 && status == true) {
        alert('Для поиска вы должны ввести три или более символов');

        function FindOnPageBack() {
            document.body.innerHTML = locale_HTML;
        }   //обнуляем стили
    }

    if (input.length >= 3) {
        //выполняем поиск
        function FindOnPageGo() {
            search = '/' + input + '/g';  //делаем из строки регуярное выражение
            pr = document.body.innerHTML;   // сохраняем в переменную весь body
            result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
            result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)
            for (var i = 0; i < result.length; i++) {
                result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">' + input + '</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
            }
            for (var i = 0; i < result.length; i++) {
                pr = pr.replace(result[i], result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
            }
            document.body.innerHTML = pr;  //заменяем html код
        }
    }

    function FindOnPageBack() {
        document.body.innerHTML = locale_HTML;
    }   //обнуляем стили
    if (status) {
        FindOnPageBack();
        FindOnPageGo();
    } //чистим прошлое и Выделяем найденное
    if (!status) {
        FindOnPageBack();
    } //Снимаем выделение
}