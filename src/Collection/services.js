import './Collection/views.js';


export function resetForm(form) {
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
