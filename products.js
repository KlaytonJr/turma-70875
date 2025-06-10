const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addBtn");
const viewBtn = document.getElementById("viewBtn");
const cleanBtn = document.getElementById("cleanBtn");
const listItems = document.getElementById("listItems");

addBtn.addEventListener("click", () => {
  const valor = inputField.value;

  localStorage.setItem(`item ${localStorage.length + 1}`, valor);
});

viewBtn.addEventListener("click", () => {
  //Loop para percorrer as chaves armazenadas no objeto localStorage
  for (let i = 0; i < localStorage.length; i++) {
    let chave = localStorage.key(i);
    console.log("Chave: " + chave + "   Valor: " + localStorage.getItem(chave));

    const li = document.createElement("li");
    li.innerText = localStorage.getItem(chave);

    listItems.appendChild(li);
  }
});

cleanBtn.addEventListener("click", () => {
  localStorage.clear();
});
