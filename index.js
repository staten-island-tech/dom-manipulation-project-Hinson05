const DomSelectors = {
  button: document.getElementById("buton"),
  text: document.getElementById("container-box"),
  input: document.querySelector( '#input' ),
};

let input = document.getElementById('input').value
console.log('name')

let input2 = document.getElementById('input2').value
console.log('num')

function addContact(e) {
const contact = document.createElement('div');

const nameinput = document.createElement('div');
contact.className= 'namein'

const numberinput = document.createElement('div');
contact.className= 'numberin'

}