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
    `<p class= "yes">${e}</p>`
  );

  DOMSelectors.num.value = "";

  let x = DOMSelectors.name.value;
  DOMSelectors.list.insertAdjacentHTML(
    "afterbegin",
    `<p class= "yes" >${x}</p>`
  );

  DOMSelectors.name.value = "";
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.list.innerHTML = "";
});

DOMSelectors.delete.addEventListener("click", function () {
  let wowow = document.getElementsByClassName("yes");
  let wowie = wowow.item(0);
  let wowie2 = wowow.item(1);
  wowie.remove();
  wowie2.remove();
});
