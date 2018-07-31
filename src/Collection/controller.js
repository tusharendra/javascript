import './Collection/services.js';

newfunction();

 function createHTMLElement(html){
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

document.getElementById("new_list").onclick = () => {
    const listEntry = document.getElementById('append_list');
    let text_input = createHTMLElement(`
     <input type="text" class="form-control"   id="listElement">
     `);
    listEntry.appendChild(text_input);
}
