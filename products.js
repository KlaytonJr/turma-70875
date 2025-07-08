const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addBtn");
const viewBtn = document.getElementById("viewBtn");
const cleanBtn = document.getElementById("cleanBtn");
const listItems = document.getElementById("listItems");

inputField.value = "Padrão";

function addItem() {
  // console.log(inputField.value);
  const valor = inputField.value;

  localStorage.setItem(`item ${localStorage.length + 1}`, valor);
}

// addBtn.onclick = () => {
//   console.log(inputField.value);
//   const valor = inputField.value;

//   localStorage.setItem(`item ${localStorage.length + 1}`, valor);
// };

// addBtn.addEventListener("click", () => {
//   console.log(inputField.value);
//   const valor = inputField.value;

//   localStorage.setItem(`item ${localStorage.length + 1}`, valor);
// });

viewBtn.addEventListener("click", () => {
  listItems.innerHTML = "";

  //Loop para percorrer as chaves armazenadas no objeto localStorage
  for (let i = 0; i < localStorage.length; i++) {
    let chave = localStorage.key(i);
    // console.log("Chave: " + chave + "   Valor: " + localStorage.getItem(chave));

    const li = document.createElement("li");
    li.className = "active2 outra"; // redefine a classe

    li.classList.add("active"); // agrega a classe
    li.classList.remove("active2"); // agrega a classe
    // li.classList.add("outra");

    li.innerHTML = `<p><b>Index ${i}:</b> ${localStorage.getItem(chave)}</p>`;

    listItems.appendChild(li);
  }
});

cleanBtn.addEventListener("click", () => {
  localStorage.clear();
});

const navbar = document.getElementById("navbar");
const navItems = document.getElementsByClassName("nav-item");
const active = document.getElementById("nav-home");

active.textContent = "Modificado";

// console.log(active.textContent);
// console.log(active.innerText);

// console.log(navItems);

for (let item of navItems) {
  // console.log(item);
}

const novoNavItem = document.createElement("li");

active.classList.remove("active");
active.remove();

novoNavItem.innerText = "Mapas";
novoNavItem.classList.add("nav-item");
novoNavItem.classList.add("active");

navbar.appendChild(novoNavItem);

document.addEventListener("blur", () => {
  // console.log("Saiu da tela");
});
document.addEventListener("focus", () => {
  // console.log("Perdeu o foco da tela");
});

const inputName = document.getElementById("inputName");
const pessoasList = document.getElementById("pessoas");

inputName.addEventListener("keypress", function (event) {
  // console.log(event);
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    event.preventDefault();
    mostrarNome();
  }
});

function mostrarNome() {
  // console.log(inputName.value);

  const pessoa = document.createElement("li");
  pessoa.innerText = inputName.value;
  pessoasList.appendChild(pessoa);

  inputName.value = "";
}
