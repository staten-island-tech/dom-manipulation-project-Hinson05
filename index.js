const DomSelectors = {
  button: document.getElementById("buton"),
  text: document.querySelector("#text"),
  point: document.querySelectorAll(".point"),
  pointTwo: document.getElementById("pointTwo"),
};
console.log(DomSelectors.pointTwo);
function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML; = "This is now a big red box";
  text.style.fontSize= "40px";
}