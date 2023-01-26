/* Ska läggas på input fältet 
 li.setAttribute('id', index); */

//Skapa en array av objects to-do items
const todos = [{title: 'Item1', isCompleted: false}, {title: 'Item2', isCompleted: false},]
console.log(todos);

/*
//Skapar en array med to-do items
const todos = ["Item1", "Item2"];*/

//Hämtar elementet med ID todosList 
const list = document.querySelector("#todosList");

//Kallar funktionen addItemsToList när sidan laddas
addItemsToList();
function addItemsToList() {
  //Ser till att innerHTML är tomt
 list.innerHTML = "";
  //Går igenom alla items i arrayen och skapar en li av dem
  todos.forEach((item, index) => {
    let li = document.createElement("li");
    list.appendChild(li);
    li.innerHTML = `<input id="${'id', index}" type="checkbox"/>
    <label for="${item.title}" class="tick"></label>
    <span>${item.title}</span>
    `
  });
}

//Hämtar formuläret
const todoForm = document.querySelector(".js-form-todo");

//Skapa en funktion som hämtar värdet i formuläret och uppdaterar arrayen todos.
function addNewItem() {
  const addItem = todoForm.querySelector("#newTodoItem").value;
  //Om innehållet i formuläret är tomt, kommer ett meddelande upp 
  if (addItem === '') {
    alert("You must write something");
  } else {
    //Lägger till ett item objekt i arrayen
  todos.push({title: addItem, isCompleted: false});
  //Kallar på funktionen addItemsToList som ser till att HTML uppdateras
  addItemsToList();
  //Ser till att texten man skrivit in i formuläret försvinner 
  todoForm.reset()  
  //
  }
}

//När man submittar i formuläret hindras sidan från att laddas om och vi kallar funktionen addNewItem
todoForm.addEventListener("submit", function(event) {
  //Ser till att sidan inte laddas om
 event.preventDefault();
  addNewItem();
});