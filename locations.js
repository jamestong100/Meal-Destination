var array = [];
let i = 0;

function addDestination(name, location, category) {
  console.log("test");
  array.push({ name: name, location: location, category: category });
  //addToList(JSON.stringify(array[i]));
  addToList(array[i]);
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
  var span1 = document.createElement("span");
  span1.className = "name";
  var span2 = document.createElement("span");
  span2.className = "location";
  var span3 = document.createElement("span");
  span3.className = "category";
  var textnode1 = document.createTextNode(add.name);
  var textnode2 = document.createTextNode(add.location);
  var textnode3 = document.createTextNode(add.category);
  span1.append(textnode1);
  span2.append(textnode2);
  span3.append(textnode3);
  node.appendChild(span1);
  node.appendChild(span2);
  node.appendChild(span3);
  document.getElementById("list").appendChild(node);
}
