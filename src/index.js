// require("./styles/styles.css")
//
// function myFunction() {
//     var a = document.getElementById("myList2").ChildNodes.length;
//
//     for(var i in a){
//       var p=document.getElementById("myList2").childNodes[i].text;
//         console.log(p);
//         alert(p);
//     }
// }
//


// var crt_ele = document.createElement("p");
// var div = document.createElement("div");
// crt_ele.innerHTML = "tushar";
// div.appendChild(crt_ele);
// document.body.appendChild(div);``


// var crt_ele1 = document.createElement("header");
// var div2 = document.createElement("div");
// crt_ele1.innerHTML = "content for div 2";
// div2.appendChild(crt_ele1);
// document.body.appendChild(div2);
//
//
// var crt_ele3 = document.createElement("header");
// crt_ele3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// div2.appendChild(crt_ele3);
// document.body.appendChild(div2);

// var card_ele = document.createElement("div");
// div.className = "card";
// const Any = document.getElementById('any');
// var div = document.createElement("div"), // Create the elements we need
//
// cardBody = document.createElement('div');
// cardBody1 = document.createElement('div');
// cardBody2 = document.createElement('div');
// h3 = document.createElement('h3'),
// ul = document.createElement('ul');
// li = document.createElement('li');
// li1 = document.createElement('li');
// li2 = document.createElement('li');
// li3 = document.createElement('li');
//
// div.className = "card";
//
// cardBody.className = "card-body";
// cardBody1.className = "card-body";
// cardBody2.className = "card-body";
//
// h3.innerHTML = "Notes" ;
// li.innerHTML = "to do list 1 note"; // Make the HTML of our span to be the first and last name of our author
// cardBody.appendChild(h3);
// cardBody.appendChild(ul);
// cardBody.appendChild(li);
// cardBody.appendChild(li1);
// cardBody.appendChild(li2);
// cardBody.appendChild(li3);
// cardBody1.appendChild(h3);
//
// ul.appendChild(li);
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// cardBody1.appendChild(ul);
//
// div.appendChild(cardBody);
// div.appendChild(cardBody1);
// // div.appendChild(cardBody2);
// console.log(div);
// any.appendChild(div);
function resetForm(form) {
    // clearing inputs
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++) {
        switch (inputs[i].type) {
            // case 'hidden':
            case 'text':
                inputs[i].value = '';
                break;
            case 'radio':
            case 'checkbox':
                inputs[i].checked = false;   
        }
    }

    // clearing selects
    var selects = form.getElementsByTagName('select');
    for (var i = 0; i<selects.length; i++)
        selects[i].selectedIndex = 0;

    // clearing textarea
    var text= form.getElementsByTagName('textarea');
    for (var i = 0; i<text.length; i++)
        text[i].innerHTML= '';

    return false;
}

window.card = function (title, text) {
  var card = document.createElement('div');
  card.className = "card";
  
  var cardBody = document.createElement('div');
  cardBody.className = "card-body";
  h3 = document.createElement('h3'),
  p = document.createElement('p');
  h3.className = 'card-title';
  p.className = 'card-text';
  // ul = document.createElement('ul');
  // li = document.createElement('li');
  // li1 = document.createElement('li');
  // li2 = document.createElement('li');
  // li3 = document.createElement('li');
  h3.innerHTML = title ;
  p.innerHTML = text;
  // ul.appendChild(li);
  // ul.appendChild(li1);
  // ul.appendChild(li2);
  // ul.appendChild(li3);
  cardBody.appendChild(h3);
  cardBody.appendChild(p);
  console.log(cardBody);
  $(cardBody).append('<button class="btn btn-primary delete waves-effect waves-light">Delete Note</button>');
  card.appendChild(cardBody);
  // document.getElementById('any').appendChild(card);
  return card;
}
window.addItem = function () {
  const sasa = document.getElementById('any');
  sasa.appendChild(card(document.addCard.title.value, document.addCard.text.value));
  resetForm(document.addCard);
}


window.newlist = function () {
  var newlist = document.createElement('input');
  newlist.type = "text";
  console.log(newlist);
  lst_content.appendChild(newlist)
  // return newlist;
}
window.modal = function () {
  var modal = document.createElement('input');
  modal.type = "text";
  return modal;
}

window.onload = function() {
// var btn = document.getElementById("AddBtn");
// btn.onclick = function myFunction() {
// var divboard = document.createElement('div');
// divboard.id = 'board';
// divboard.className='board-display';
// document.getElementsByTagName('body')[0].appendChild(divboard);
// divboard.style.height = "100px";
// divboard.style.width = "100px";
// var innerDiv = document.createElement('div');
// innerDiv.id = 'board-2';
// divboard.appendChild(innerDiv);





// function card1() {
//         var cardBody1 = document.createElement('div');
//         cardBody1.className = "card-body";
//         // h3 = document.createElement('h3'),
//         // ul = document.createElement('ul');
//         // li = document.createElement('li');
//         // li1 = document.createElement('li');
//         // li2 = document.createElement('li');
//         // li3 = document.createElement('li');
//         h3.innerHTML = "Notes" ;
//         li.innerHTML = "to do list 1 note";
//         ul.appendChild(li);
//         ul.appendChild(li1);
//         ul.appendChild(li2);
//         ul.appendChild(li3);
//         cardBody1.appendChild(ul);
//         return cardbody1;
//         }

// console.log(div);
const sasa = document.getElementById('any');
sasa.appendChild(card('title', 'text1'));
// sasa.appendChild(card());
// sasa.appendChild(card());
// sasa.appendChild(card());
// sasa.appendChild(card());
// sasa.appendChild(card());

// sasa.appendChild(card());

var note_name = document.getElementById("notename");
if (note_name)note_name.appendChild(modal());


var lst_content = document.getElementById("listcontent");
if (lst_content)lst_content.appendChild(newlist());


}
