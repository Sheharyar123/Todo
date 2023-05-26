// const username = document.querySelector("#name");
// console.log(username);

// username.addEventListener("change", function (e) {
//   console.log("Changed");
// });
const form = document.querySelector("#new-todo-form");

const todos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.elements.content.value);
  console.log(e.target.elements.category.value);
  todos.push({
    content: e.target.elements.content.value,
    category: e.target.elements.category.value,
  });
  console.log(todos);
});
