// ! ============= getElements ================
// ? Все узлы, элементы, методы и свойства DOM доступны через глобальный объект document.
// console.log(document);
// console.log(document.documentElement); //  html - только для чтения
// console.log(document.head);
// console.log(document.body);

// let title = document.getElementsByTagName("h1");
// console.log(title[0]);

// let block = document.getElementById("block");
// console.log(block);

// let elem = document.getElementsByClassName("elem");
// console.log(elem);

// for (let i of elem) {
//   console.log(i);
// }

// let blockName = document.getElementsByName("attrName");
// console.log(blockName); // Заменили полностью на аттрибут id

// !=============== querySelector/all===========

// ? метод querySelector() возвращает первое совпадение

let elem = document.querySelector(".elem");
console.log(elem);

// ? Метод querySelectorAll() возвращает все свопавшиеся элементы, в виде узла NodeList:

elem = document.querySelectorAll(".elem"); // NodeList можно перебрать только одним методом массива forEach()
console.log(elem);
// elem = document.getElementsByClassName("elem"); // HTMLCollections не работает метод массива forEach
// elem.map((item) => console.log(item));
elem.forEach((item) => console.log(item));

let divList = document.querySelector("div");
console.log(divList);

// ! createElement / createTextNode / innerHTNL / innerText

// ? createElement() - создание новых элементов, применяется к обьекту document

let newDiv = document.createElement("div");
let newText = document.createTextNode(
  "createTextNode - строка которая создает текстовый узел"
);
console.log(newText);
newDiv.prepend(newText);
console.log(newDiv);

let addInfo = document.getElementById("addInfo");
addInfo.prepend(newDiv);

let bodyTag = document.body;
bodyTag.prepend(newDiv);

console.log(newDiv.innerText);
newDiv.innerText += " Я перезаписал текст внутри div с id addInfo";

// ? innerText = с помощью него можно обратится к тексту нашего элемента. Также можно через знак = перезаписать полностью весь контент (все содержимое)

newDiv.innerHTML =
  "<h2>Перезаписываю внутренний контент, добавляя новый элемент</h2>";

newDiv.innerText =
  "<h2>Перезаписываю внутренний контент, добавляя новый элемент</h2>";

// ? innerHTML = видет запись тегов (<h2>...</h2>)

// ! append / prepend / before / after

// ? Метод append() добавляет узлы в конец указанного родительского элемента (работает как push())

let ul = document.querySelector("ul");
let newElem = document.createElement("li");
newElem.innerText = "Новый элемент списка";
ul.append(newElem);

// ? Метод prepend() - добавляет узлы в начало родительского элемента (работает как unshift())
newElem.innerText = "Новый список с помощью prepend";
ul.prepend(newElem);

// ? Метод before() добавляет узел до элемента
let input = document.createElement("input");
ul.before(input);

// ? Метод after() добавляет узел после элемента
let button = document.createElement("button");
button.innerText = "Нажми меня";
ul.after(button);

// let example = document.getElementById("example");
// for (let i = 1; i < 5; i++) {
//   let num = +prompt("Введите возраст");
//   if (num > 18) {
//     let newLi = document.createElement("li");
//     newLi.innerText = `Пользователь ${i}`;
//     example.append(newLi);
//   } else if (num < 18) {
//     alert("Вам нет 18-ти");
//   }
// }
// ! append() VS appendChild()
// ? append() - принимает обьекты узлы и строку, в то время как appendChild() принимает только узел
// div.append("рандомный текст") // сработает
// div.appendChild("рандомный текст не сработает")
// ? 2) append() позволяет добавлять несколько элементов, в то время как appendChild() допускает один элемент
// div.append("<h2>text</h2>, <input type = "text"/>") // Сработает
// div.appendChild("<h2>text</h2>, <input type = "text"/>") // Не сработает

// ! classList
const block2 = document.querySelector("#block2");

// Добавление классов
block2.classList.add("newClass");

// удаление классов
block2.classList.remove("unit");

// добавление если нет, удаление если есть
block2.classList.toggle("random");
block2.classList.toggle("random");
block2.classList.toggle("random");
console.log(block2.classList);

// проверка (true/false)
let answer = block2.classList.contains("newClass");
console.log(answer);

// ! style
document.body.style.backgroundColor = "orange";
let style = `
    font-size: 20px;
    color: white;
`;
document.querySelector("*").style = style;
document.querySelector("*").style.FontSize = "20px";
document.querySelector("*").style.color = "white";
