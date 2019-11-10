
var body= document.querySelector("body");

var root = document.getElementById("root");

var ol =document.createElement("ol");

var input = document.createElement("input");

var add_button = document.createElement("button");

var clear_button = document.createElement("button");



var h1= document.createElement("h1");
var h3= document.createElement("h3");


var btn_sign_add = document.createTextNode("Add Items");

var btn_sign_clr = document.createTextNode("Clear List");


var h1_title= document.createTextNode("DOM Daily Challenge Day 1");

var h3_title = document.createTextNode("To Do List:");

add_button.appendChild(btn_sign_add);

clear_button.appendChild(btn_sign_clr);



h1.appendChild(h1_title);

h3.appendChild(h3_title);



root.appendChild(h1);

root.appendChild(input);

root.appendChild(add_button);

root.appendChild(clear_button);

root.appendChild(h3)

root.appendChild(ol);





add_button.addEventListener("click", add_to_list)

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        add_to_list();
    }
});




function add_to_list() {

  if (input.value==="") {
    return;
  }
  let listItem = document.createElement("li");
  listItem.innerText = input.value;
  ol.appendChild(listItem);
  var delete_button = document.createElement("button");
  delete_button.innerText = "X";
  listItem.appendChild(delete_button);
  delete_button.addEventListener("click", delete_item);
  input.value ="";
}



// var deletes = document.querySelectorAll('.removeBtn')
// // Iterate all nodes
// deletes.forEach(btn => {
//   // Attach event listener. Note to preserve the button this-reference
//   // by using the non-shorthand function
//   btn.addEventListener('click', function() {
//     var li = this.parentNode
//     li.remove()
//   })
// })
//
// <ul>
//   <li>one<button class="removeBtn">Delete</button>
//     <li>two<button class="removeBtn">Delete</button>
// </ul>
//
clear_button.addEventListener("click", clear_list)



function clear_list() {
  let all_listItems = document.querySelectorAll("li");
  for (let i = 0; i < all_listItems.length; i++) {
      all_listItems[i].remove();
}
}



function delete_item() {
      this.parentElement.remove();
    }
