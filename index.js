const DomSelectors = {
  button: document.getElementById("buton"),
  text: document.getElementById("container-box"),
  input: document.querySelector( '#input' ),
};
DomSelectors.box.insertAdjacentHTML("beforeend", '<h1>Contact Saver</h1>');

console.log(DomSelectors.pointTwo);
function backgroundAndText(background, text) {
  background.style.backgroundColor = "black";
  text.innerHTML; = "Contact Saver";
  text.style.fontSize= "40px";
}
backgroundAndText(DomSelectors.box, DomSelectors.text);

DomSelectors.button.addEventListener("click", function(){
  backgroundAndText(DomSelectors.box, DomSelectors.text);
}
function saveCon() {
  DomSelectors.point.forEach(point) => {
    point.addEventListener("click", function(){
      point.textContent= "Hello"; 
    }


//delete cared
//querySelectorAll 
//for each button add 