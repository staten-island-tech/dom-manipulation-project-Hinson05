let name = document.getElementById("name").value;
console.log("name");

let num = document.getElementById("num").value;
console.log("num");

DomSelectors.button.addEventListener("Submit", function () {
  let name = DomSelectors.name.value;
  DomSelectors.box.insertAdjacentHTML("afterend", <p>${name}</p>);
});

DomSelectors.button.addEventListener("Submit", function () {
  let num = DomSelectors.num.value;
  DomSelectors.box.insertAdjacentHTML("afterend", <p>${num}</p>);
});
const contactList = document.createElement('list')
contactList.className = "list";
const nameInitialDiv= document.createElement('list');
fullNameDiv.className = 'name';
fullNameDiv.textContent = name;
contactDiv.append(NameDiv)
document.querySelector('#list').append(contactList);

document.querySelector('#button1')
.addEventListener('click', function() {
  const nameInput = document.querySelector('#name')
  addContact(nameInput.value)
})

function function() {
  let name = document.querySelector("#name");
  let list= document.querySelector('#list')
  DomSelectors.box.insertAdjacentHTML("afterend", <p>${name}</p>);
}
