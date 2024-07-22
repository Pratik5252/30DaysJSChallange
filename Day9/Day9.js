//Task-1 -- Change text content of an element
const text = document.getElementById("text-1");
text.innerHTML = "Bye";

//Task-2 -- Change bg color
const bg = document.getElementById("text-2");
bg.style.backgroundColor = "red";

//Task-3 -- Create new div element append it to body
const elt = document.getElementById("root");
const newDiv = document.createElement("div");
newDiv.innerHTML = "This is Task3";
elt.appendChild(newDiv);

//Task-4 -- Create new li elt into existing ul elt
const getElt = document.getElementById("list");
const newList = document.createElement("li");
newList.innerHTML = "Item 2";
getElt.appendChild(newList);

//Task-5 -- Remove HTML elements
const para = document.getElementById("remove");
para.remove();

//Task-6 -- Remove last elt
const olist = document.getElementById("list2");
const last = olist.lastElementChild;
last.remove();

//Task-7 -- Change Attribute
const img = document.getElementById("img");
img.setAttribute("src", "./JS2.png");

//Task-8 -- Add or Remove CSS
const changeCSS = document.getElementById("text-3");
changeCSS.style.backgroundColor = "red";

//Task-9 -- Click event
const click = document.getElementById("click1");
const para1 = document.getElementById("text-4");
click.addEventListener("click", function () {
  para1.innerHTML = "Clicked";
});

//Task-10 -- Mouseover event
const hover = document.getElementById("click2");
hover.addEventListener("mouseover", function () {
  hover.style.borderColor = "blue";
});
