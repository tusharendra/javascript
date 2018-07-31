function resetForm(form) {
    // clearing inputs
    const inputs = form.getElementsByTagName('input');
    //console.log(inputs)
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
    const selects = form.getElementsByTagName('select');
    for (var i = 0; i<selects.length; i++)
        selects[i].selectedIndex = 0;

    // clearing textarea
    const text= form.getElementsByTagName('textarea');
    for (var i = 0; i<text.length; i++)
        text[i].innerHTML= '';
//console.log(text.value)
    return false;
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

document.getElementById("new_list").onclick = () => {
    const listEntry = document.getElementById('append_list');
    let text_input = createHTMLElement(`
     <input type="text" class="form-control"   id="listElement">
     `);
    listEntry.appendChild(text_input);
}


function createHTMLElement(html){
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}


window.newfunction = () => {

  const sasa = document.getElementById('any');
  $.ajax({
    url:"http://localhost:3000/posts",
    method:"GET"
    }).done(data => {
        data.map(data => {
          sasa.appendChild(card(data.title,data.text,data.id));
        })
  })
}

window.delfunction = (title) => {
  //console.log(e, "this is my event data")
  //const sasa = document.getElementById('any');
  //this.parentElement.remove();

  console.log(title.target.id)
  $.ajax({
    url:`http://localhost:3000/posts/${title.target.id}`   ,
    method:"DELETE"
  }).done(() => {
    location.reload();
    newfunction();
  });
}

newfunction();

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
