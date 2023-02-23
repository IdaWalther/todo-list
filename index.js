//Skapa en array av objects to-do items
const todos = [{id:'todo_1',title: 'Item1', isCompleted: true}, {id:'todo_2', title: 'Item2', isCompleted: false},]
console.log(todos);


//Hämtar elementet med ID todosList 
const list = document.querySelector("#todosList");

//Kallar funktionen addItemsToList när sidan laddas
addItemsToList();
function addItemsToList() {
  //Ser till att innerHTML är tomt
 list.innerHTML = "";
  //Går igenom alla items i arrayen och skapar en li av dem
  todos.forEach((item, index) => {
    let li = document.createElement('li');
    li.setAttribute('id', item.id);
    list.appendChild(li);
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'checkbox');
    
    if(item.isCompleted){
      inputElement.setAttribute('checked', true);
      li.classList.add('inputChecked');
    } 
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', `id_${index}`);
    labelElement.innerHTML = item.title;
    li.appendChild(inputElement);
    li.appendChild(labelElement);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "X";
    li.appendChild(deleteBtn); 
  });
  addEventListeners()
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
  const todoId = `todo_${todos.length + 1}`;
  console.log(todoId);
    //Lägger till ett item objekt i arrayen
  todos.push({id:todoId, title: addItem, isCompleted: false});
  
  //Kallar på funktionen addItemsToList som ser till att HTML uppdateras
  addItemsToList();
  //Ser till att texten man skrivit in i formuläret försvinner 
  todoForm.reset()  
  }
}

//När man submittar i formuläret hindras sidan från att laddas om och vi kallar funktionen addNewItem
todoForm.addEventListener("submit", function(event) {
  //Ser till att sidan inte laddas om
 event.preventDefault();
  addNewItem();
});


function addEventListeners() {
//Hämtar alla element som har attributet som heter type=checkbox 
const checkboxsElements = document.querySelectorAll("[type='checkbox']");
//Går igenom alla element som vi hämtat
checkboxsElements.forEach(checkbox => {
  //På varje element lägger vi på eventet change
  checkbox.addEventListener('change', event =>{
    //På varje element lyssnar vi efter en ändring, när en ändring händer kan vi använda eventet som skickas tillbaka för att hitta elementet som ändrats (event.target)
    const inputElement = event.target;
    //Här hämtar vi det nämaste elementet till inputElementet som tillhör ett li element.
    const listItem = inputElement.closest('li');
    //Vi togglar, vilket innebär att om den finns, tar den bort classen men om den inte finns adderar den classen.
    listItem.classList.toggle('inputChecked');
  });
});

//Hämta alla knappar
const buttonElements = document.querySelectorAll('button');
//Lyssna efter click eventet
buttonElements.forEach(button => {
  button.addEventListener('click', event =>{
    //Veta vilken knapp som är klickad på
    const deleteItem = event.target;
    //Radera li elementet genom att hitta closest li
    const removeItem = deleteItem.closest('li'); 
    if(removeItem){
    removeItem.remove();
    //Raderar todo item från arrayen
    
    todos.splice(todos.indexOf(todos), 1);
    }
  });
});
};