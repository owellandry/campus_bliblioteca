async function obtenerAutores() {
    const response = await fetch('/campus/autores');
    const data = await response.json();
    const autoresContainer = document.getElementById('autores-container');
    autoresContainer.innerHTML = JSON.stringify(data);
  }
  
  async function obtenerCategorias() {
    const response = await fetch('/campus/categorias');
    const data = await response.json();
    const categoriasContainer = document.getElementById('categorias-container');
    categoriasContainer.innerHTML = JSON.stringify(data);
  }
  
  async function obtenerEditoriales() {
    const response = await fetch('/campus/editoriales');
    const data = await response.json();
    const editorialesContainer = document.getElementById('editoriales-container');
    editorialesContainer.innerHTML = JSON.stringify(data);
  }
  