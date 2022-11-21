const DOMSelectors = {
  submit: document.getElementById("submit"),
  list: document.getElementById("list"),
  name: document.getElementById("name"),
  num: document.getElementById("num"),
  clear: document.getElementById("clear"),
};

DOMSelectors.submit.addEventListener("click", function () {
  let e = DOMSelectors.num.value;
  DOMSelectors.list.insertAdjacentHTML("afterbegin", `<p>${e}</p>`);
  let x = DOMSelectors.name.value;
  DOMSelectors.list.insertAdjacentHTML("afterbegin", `<p>${x}</p>`);
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.list.innerHTML = "";
});

