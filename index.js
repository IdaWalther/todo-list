//Skapa en array av objects to-do items
/*const todos = [{title: 'Item1', isCompleted: true}, {title: 'Item2', isCompleted: false},]*/

//Skapar en array med to-do items
const todos = ["Item1", "Item2"];


//Hämtar elementet med ID todosList 
const list = document.querySelector("#todosList");

//Kallar funktionen addItemsToList när sidan laddas
addItemsToList();


function addItemsToList() {
  //Ser till att innerHTML är tomt
 list.innerHTML = "";

  //Går igenom alla items i arrayen och skapar en li av dem
  todos.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

//Hämtar formuläret
const contactForm = document.querySelector(".js-form-contact");

//Skapa en funktion som hämtar värdet i formuläret och uppdaterar arrayen todos.
function addNewItem() {
  const addItem = contactForm.querySelector("#newTodoItem").value;
  //Om innehållet i formuläret är tomt, kommer ett meddelande upp 
  if (addItem === '') {
    alert("You must write something");
  } else {
    //Lägger till texten från formuläret i arrayen
  todos.push(addItem);
  //Kallar på funktionen addItemsToList som ser till att HTML uppdateras
  addItemsToList();
  //Ser till att texten man skrivit in i formuläret försvinner 
  contactForm.reset()  
  //
  }
}

//När man submittar i formuläret hindras sidan från att laddas om och vi kallar funktionen addNewItem
contactForm.addEventListener("submit", function(event) {
  //Ser till att sidan inte laddas om
 event.preventDefault();
  addNewItem();
});