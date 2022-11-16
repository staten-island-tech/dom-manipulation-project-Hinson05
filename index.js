const DomSelectors = {
  button: document.getElementById("button"),
  text: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};

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

let list = document.querySelector();
