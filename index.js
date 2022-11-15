const DomSelectors = {
  button: document.getElementById("button"),
  text: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};

let name = document.getElementById("input").value;
console.log("name");

let num = document.getElementById("input2").value;
console.log("num");

DomSelectors.button.addEventListener("Submit", function () {
  let name = DomSelectors.name.value;
  DomSelectors.box.insertAdjacentHTML("afterend", <p>${name}</p>);
});

DomSelectors.button.addEventListener("Submit", function () {
  let num = DomSelectors.num.value;
  DomSelectors.box.insertAdjacentHTML("afterend", <p>${num}</p>);
});
