const listaDeTareas = [
    { id: 1719886142052, tarea: "Hacer mercado", checked: false },
    { id: 1719886158840, tarea: "Estudiar para la prueba", checked: false },
    { id: 1719886166020, tarea: "Sacar a pasear a Tobby", checked: false },
  ];
  
  const btnAgregar = document.querySelector(".btn");
  const inputNuevaTarea = document.querySelector(".form-control");
  const listadoDeTareas = document.querySelector(".listadoDeTareas");
  const tareasTotales = document.querySelector(".tareasTotales");
  const tareasRealizadas = document.querySelector(".tareasRealizadas");
  
  actualizarLista();
  
  btnAgregar.addEventListener("click", () => {
    const nuevaTarea = {
      id: Date.now(),
      tarea: inputNuevaTarea.value,
      checked: false,
    };
    listaDeTareas.push(nuevaTarea);
    inputNuevaTarea.value = "";
    actualizarLista();
  });
  
  function actualizarLista() {
    let html = "";
  
    for (let item of listaDeTareas) {
      html += `<li>
                <div class="id">${item.id}</div>
                <div class="tarea">${item.tarea}</div>
                <div class="inputs-container">
                  <input class="check" type="checkbox" data-id="${item.id}" ${
        item.checked ? "checked" : ""
      } onchange="checkList(${item.id}, this.checked)">
                  <i class="fas fa-trash-alt btn-eliminar" onclick="borrar(${
                    item.id
                  })"></i>
                </div>
              </li>`;
    }
  
    listadoDeTareas.innerHTML = html;
    actualizarContador();
    actualizarCheckedCount();
  }
  
  function checkList(id, isChecked) {
    const tarea = listaDeTareas.find((item) => item.id === id);
    if (tarea) {
      tarea.checked = isChecked;
      actualizarContador();
      actualizarCheckedCount();
    }
  }
  
  function borrar(id) {
    const index = listaDeTareas.findIndex((item) => item.id === id);
    if (index !== -1) {
      listaDeTareas.splice(index, 1);
      actualizarLista();
      actualizarContador();
      actualizarCheckedCount();
    }
  }
  
  function actualizarContador() {
    tareasTotales.innerHTML = listaDeTareas.length;
  }
  
  function actualizarCheckedCount() {
    const countChecked = listaDeTareas.filter((item) => item.checked).length;
    tareasRealizadas.innerHTML = countChecked;
    return countChecked;
  }
  