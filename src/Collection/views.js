

window.addItem = () => {
  const sasa = document.getElementById('any');
  sasa.appendChild(card(document.addCard.title.value, document.addCard.text.value));
  console.log(card(document.addCard.title.value, document.addCard.text.value));
  const newguy = {
    "title" : document.addCard.title.value,
    "text" : document.addCard.text.value
  };

  resetForm(document.addCard);

  $.ajax({
    // console.log("ainside aasvsfd");
    url:"http://localhost:3000/posts",
    method:"POST",

    data:newguy
  }).done(data => {
    console.log(data);
  })
  location.reload();
}

window.card = (title, text,id ) => {
  const card = document.createElement('div');
  card.className = "card col-lg-3 col-md-6 mb-5 ";


  const cardBody = document.createElement('div');
  cardBody.className = "card-body";
  h3 = document.createElement('h3'),
  p = document.createElement('p');
  h3.className = 'card-title';
  p.className = 'card-text';
  checkbox = document.createElement('input')
  checkbox.type="checkbox"
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
  cardBody.appendChild(checkbox)
  cardBody.appendChild(p);
  console.log(cardBody);
  // var but = document.createElement('button');
  // but.className='btn btn-primary delete waves-effect waves-light';]
  // but.innerHTML='Delete';
  // but.onclick = function(){
  //   this.parentElement.remove();
  // }
  // $(cardBody).append('but')
  // $(cardBody).append('<button  id="delt" onclick="delfunction()" class="btn btn-primary delete waves-effect waves-light">Delete Note</button>');
  button = document.createElement('button')
  button.innerText = "Delete"
  button.id=id
 button.addEventListener("click", delfunction)
  console.log(button)
  cardBody.appendChild(button)
  card.appendChild(cardBody);
  // console.log(cardBody);
  // console.log(document.getElementById("delt"))
  // document.getElementById('any').appendChild(card);
  console.log("end of method");
  return card;
}

window.newlist = () => {
  const newlist = document.createElement('input');
  newlist.type = "text";
  console.log(newlist);
  lst_content.appendChild(newlist)
  // return newlist;
}

window.modal = () => {
  const modal = document.createElement('input');
  modal.type = "text";
  return modal;
}
