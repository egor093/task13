// Задание 2
// По данному url расположена задача:
// https://jsonplaceholder.typicode.com/todos/1
// В html предусмотреть <div></div>
// Достать с сервера заголовок задачи и отобразить его в div.


const div = document.querySelector('div');

let httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
    let obj = JSON.parse(httpRequest.responseText);
    div.innerText = obj.title;
};
httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
httpRequest.send();


// Задание 3
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.


const ul = document.querySelector('ul');

let httpRequest = new XMLHttpRequest();
httpRequest.onload = function() { 
    let content = JSON.parse(httpRequest.responseText);
    for(let i = 0;i < 20;i++){
    let li = document.createElement('li');
    li.innerText = content[i].title;
    ul.append(li);
}
};
httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();


// Задание 4
// Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typicode.com/comments
// Оформить тегами как в ПРИМЕРЕ.
// Порядок работы:
// 1) записать в переменную блок для отрисовки результата.
// 2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.
// 3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.
// 4) внутри функции .onload:
// - обойти через цикл первые 10 элементов массива
// - вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.
// 5) прописать CSS для классов.


const result = document.querySelector('.result');

function addInfo(teg, content, clas) {
    const element = document.createElement(teg);
    element.innerText = content;
    element.classList.add(clas);
    result.append(element);
}

let httpRequest = new XMLHttpRequest();
httpRequest.onload = function() { 
    const content = JSON.parse(httpRequest.responseText);
        for(let i = 0;i < 10;i++){
            addInfo('h3',content[i].name,'name');
            addInfo('p',content[i].email,'email');
            addInfo('p',content[i].body,'body');
}
};
httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();