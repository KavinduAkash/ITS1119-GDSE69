// DOM Select

// getElementsByTagName('TagName')
var h1_elements = document.getElementsByTagName("h1"); // select elements using tag name
console.log(h1_elements);

var first_item = h1_elements[0];
console.log(first_item.innerText); // get inner content as a text
console.log(first_item.innerHTML); // get inner content as an HTML

first_item.innerText = "Hi frontend!";
first_item.innerHTML = "<i>Hello Frontends!</i>";

// getElementById("Id Name")
var id_element = document.getElementById("myId");
console.log(id_element.innerText);
console.log(id_element.innerHTML);

id_element.innerText = "Let's learn C#";
id_element.innerHTML = "Let's learn <i>C++</i>"

// getElementsByClassName("Class Name")
var class_elements = document.getElementsByClassName("myClass");
var first_class_element = class_elements[0];
console.log(first_class_element.innerText);
console.log(first_class_element.innerHTML);

first_class_element.innerText = "Let's learn software development";
first_class_element.innerHTML = "Let's learn <b>software development</b>";

// querySelector("query")
var query_selected_element = document.querySelector("h6 > p");
console.log(query_selected_element);

// querySelectorAll("query")
var all_selected_elements = document.querySelectorAll("p");
console.log(all_selected_elements);

