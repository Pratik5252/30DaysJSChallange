//Task-1 --> Click Event Listener
const click = document.getElementById("click1");
const para1 = document.getElementById("text-1");
click.addEventListener("click", function () {
  para1.innerHTML = "Clicked";
});

//Task-2 --> Double-Click Event on Image to toggle
const img1 = document.getElementById("img1");
img1.addEventListener("dblclick", function () {
  img1.style.display = "none";
});

//Task-3 --> Mouseover event
const para2 = document.getElementById("text-2");
para2.addEventListener("mouseover", function () {
  para2.style.backgroundColor = "red";
});

//Task-4 --> Mouseout event
para2.addEventListener("mouseout", function () {
  para2.style.backgroundColor = "white";
});

//Task-5 --> Keydown event
const input = document.getElementById("input");
input.addEventListener("keydown", function (event) {
  console.log(event.key);
});

//Task-6 --> Keyup event
input.addEventListener("keyup", function (event) {
  console.log(event.key);
});

//Task-7 --> Form event

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(form.elements.input.value);
});

//Task-8 --> Add change event listener to select dropdown
const para3 = document.getElementById("text-3");
const select = document.getElementById("select");
select.addEventListener("change", function () {
  para3.innerHTML = `Your selected value is ${select.value}`;
});

//Task-9 --> Add change event listener to list that logs the text content of the clicked list item
const list1 = document.getElementById("ul-list1");
list1.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});

//Task-10 -->
const list2 = document.getElementById("ul-list2");
const btn = document.getElementById("btn");
count = 1;
btn.addEventListener("click", function () {
  count++;
  const li = document.createElement("li");
  li.textContent = `${count}`;
  list2.appendChild(li);
});
