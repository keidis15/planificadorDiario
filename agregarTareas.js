
export function agregarTarea(){
    const lista = document.getElementById('listaTareas');
    const tareaInput = document.getElementById('nuevaTarea');
    const nuevaTareaTexto = tareaInput.value;
    

    if(nuevaTareaTexto === ""){
        alert('Por favor, debe ingresar una tarea.');
        return;
    }

    //creamos un nuevo elemento lista
    const nuevaTarea = document.createElement('li');
   nuevaTarea.setAttribute('class', 'box')
    //creamos texto para la tarea
    const textoTarea = document.createTextNode(nuevaTareaTexto);

    //creamos boton de tarea realizada
    const botonTachar = document.createElement('button');
    botonTachar.setAttribute('class','btn');


    //creamos un botton de eliminar tarea
    const eliminarItemLista = document.createElement('button');
    eliminarItemLista.setAttribute('class', 'eliminarItem');
    eliminarItemLista.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    eliminarItemLista.addEventListener('click',function(){
       const item = eliminarItemLista.parentElement;
       item.remove();
    });
    

    botonTachar.onclick = function(){
        nuevaTarea.classList.toggle('tachar');
        botonTachar.classList.toggle('icon');
         
    };


    //a;adir el texto y el boton a la nueva tarea
    nuevaTarea.appendChild(botonTachar);
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(eliminarItemLista);
    

    
    //anadir la nueva tarea a la lista
    lista.appendChild(nuevaTarea);
  
    //limpiar campo
    tareaInput.value = "";
    
};


