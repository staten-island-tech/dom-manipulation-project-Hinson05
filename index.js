const DomSelectors = {
  button: document.getElementById("button"),
  list: document.querySelector("#list"),
  input: document.getElementById("input"),
};
let name = document.getElementById("name").value;
console.log("name");

let num = document.getElementById("num").value;
console.log("num");

DomSelectors.name.addEventListener("submit", function () {
  let name = DomSelectors.name.value;
  DomSelectors.box.insertAdjacentHTML("afterend", <p>${name}</p>);
});

DomSelectors.num.addEventListener("submit", function () {
  let num = DomSelectors.num.value;
  DomSelectors.box.insertAdjacentHTML("afterend", <p>${num}</p>);
});
/* const contactList = document.createElement('list')
contactList.className = "list";
contactDiv.append(NameDiv)
document.querySelector('#list').append(contactList);

 document.querySelector('#input')
.addEventListener('click', function() {
  const nameInput = document.querySelector('#name')
  addContact(nameInput.value)
}) */

function SaveCon() {
  let name = document.querySelector("#name");
  DomSelectors.box.insertAdjacentHTML("afterend", <p>${name}</p>);
}

const deleteButtons = document.querySelectorAll("del");

/*deleteButtons.forEach((button) => {
  button.addEventListener("click", remove);
});*/

function remove() {
  DomSelectors;
}
