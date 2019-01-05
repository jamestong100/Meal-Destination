var array = [];
let i = 0;
// var places = {
//   name: "",
//   location: "",
//   category: ""
// };

function addDestination(name, location, category) {
  console.log("test");
  // places.name = name;
  // places.location = location;
  // places.category = category;
  array.push({ name: name, location: location, category: category });
  addToList(JSON.stringify(array[i]));
  i++;
}

function randomDestination() {
  console.log("test1");
  var destination =
    array[Math.floor(Math.random() * Math.floor(array.length))].name;
  document.getElementById("destination").innerHTML =
    "Your next destination: " + destination;
}

function randomDestination(cat, loc) {
  console.log("test1");
  var destination =
    array[Math.floor(Math.random() * Math.floor(array.length))].name;
  document.getElementById("destination").innerHTML =
    "Your next destination: " + destination;
}

function addToList(add) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(add);
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
}
