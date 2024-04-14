let addForm = document.querySelector(".add");
let text = document.querySelector(".add input");
let ul = document.querySelector(".todos");

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
  }
});

let addItem = (item) => {
  let li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
  li.innerHTML = `
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>
  `;
  ul.appendChild(li);
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = text.value.trim();
  if (item.length > 0) {
    addItem(item);
    text.value = "";
  }
});

let searchItems = (text) => {
  let listItems = ul.querySelectorAll("li");
  text = text.toLowerCase();
  listItems.forEach((li) => {
    let itemText = li.querySelector("span").textContent.toLowerCase();
    if (itemText.includes(text)) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  });
};

let searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", (e) => {
  searchItems(searchText.value);
});
