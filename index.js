const DOMSelectors = {
  submit: document.getElementById("submit"),
  list: document.getElementById("list"),
  name: document.getElementById("name"),
  num: document.getElementById("num"),
  clear: document.getElementById("clear"),
  delete: document.getElementById("delete"),
};

DOMSelectors.submit.addEventListener("click", function () {
  let e = DOMSelectors.num.value;
  DOMSelectors.list.insertAdjacentHTML(
    "afterbegin",
    `<p class= "yes 1"> Name: ${e}</p>`
  );

  DOMSelectors.num.value = "";

  let x = DOMSelectors.name.value;
  DOMSelectors.list.insertAdjacentHTML(
    "afterbegin",
    `<p class= "yes 2" > Number: ${x}</p>`
  );

  DOMSelectors.name.value = "";
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.list.innerHTML = "";
});

DOMSelectors.delete.addEventListener("click", function () {
  let ran = document.getElementsByClassName("yes");
  let rando = ran.item(0);
  let rando2 = ran.item(1);
  rando.remove();
  rando2.remove();
});
