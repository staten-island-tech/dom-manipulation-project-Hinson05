const DOMSelectors = {
  submit: document.getElementById("submit"),
  list: document.getElementById("list"),
  name: document.getElementById("name"),
  clear: document.getElementById("clear"),
};

DOMSelectors.submit.addEventListener("click", function () {
  let x = DOMSelectors.name.value;
  DOMSelectors.list.insertAdjacentHTML("afterbegin", `<p>${x}</p>`);
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.list.innerHTML = "";
});

DomSelectors.submit.addEventListener("click", function () {});
console.log("test");
