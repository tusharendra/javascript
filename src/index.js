require("./styles/styles.css")
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

const sasa = document.getElementById('any');

window.card = function () {
    var cardBody = document.createElement('div');
    cardBody.className = "card-body";
    h3 = document.createElement('h3'),
    ul = document.createElement('ul');
    li = document.createElement('li');
    li1 = document.createElement('li');
    li2 = document.createElement('li');
    li3 = document.createElement('li');
    h3.innerHTML = "Notes" ;
    li.innerHTML = "to do list 1 note";
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    cardBody.appendChild(h3);
    cardBody.appendChild(ul);
    console.log(cardBody);
    document.getElementById('any').appendChild(cardBody)
    return cardBody;
    }


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
sasa.appendChild(card());
sasa.appendChild(card());
sasa.appendChild(card());
sasa.appendChild(card());
sasa.appendChild(card());
sasa.appendChild(card());

// sasa.appendChild(card());

window.modal = function () {
    var modal = document.createElement('input');
    modal.type = "text";

    return modal;
    }
var note_name = document.getElementById("notename");
note_name.appendChild(modal());


window.newlist = function () {
  var newlist = document.createElement('input');
  newlist.type = "text";
console.log(newlist);
 lst_content.appendChild(newlist)
  // return newlist;
  }
var lst_content = document.getElementById("listcontent");
lst_content.appendChild(newlist());


}