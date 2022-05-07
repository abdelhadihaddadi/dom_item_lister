var form = document.getElementById("addItem");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);

// delete event
itemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItem);

// add item
function addItem(e) {
  e.preventDefault();

  // get input value
  var newItem = document.getElementById("item").value;

  // create new li element
  var li = document.createElement("li");

  // add class name
  li.className = "list-group-item";
  //   console.log(li);
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create button element
  var button = document.createElement("button");
  // add class to button
  button.className = "btn text-white btn-sm float-end delete";
  button.style.backgroundColor = "#4D206D";
  // append text node
  button.appendChild(document.createTextNode("X"));
  // append button lo lo
  li.appendChild(button);
  // append li to list
  itemList.appendChild(li);
}

// remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter Item
function filterItem(e) {
  // convert to lowercase
  var text = e.target.value.toLowerCase();
  //   console.log(text);
  var items = itemList.getElementsByTagName("li");
  // convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
