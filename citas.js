const inputCita = document.getElementById('inputContenedor');
const lista = document.querySelector('.ulCitas');
const maxCitas = 3;


export function agregarCita(){
  
    const nuevaCita = inputCita.value;


    if(nuevaCita === ""){
        alert('Por favor, debe ingresar una tarea.');
        return;
    }

    if(lista.children.length <= maxCitas){
        

            //creamos un nuevo elemento lista
        const nuevaTarea = document.createElement('li');
        nuevaTarea.setAttribute('class', 'listaCitas');
    
    
        //creamos texto para la tarea
        const textoCita = document.createTextNode(nuevaCita);

        //creamos un botton de eliminar tarea
        const eliminarItemLista = document.createElement('button');
        eliminarItemLista.setAttribute('class', 'eliminarItem');
        eliminarItemLista.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

        eliminarItemLista.addEventListener('click',function(){
            const item = eliminarItemLista.parentElement;
            item.remove();
        });

        //anadir texto y boton
        nuevaTarea.appendChild(textoCita);
        nuevaTarea.appendChild(eliminarItemLista);

        //anadir la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
    
        
    }else{
        alert('Ya has alcanzado el numero maximo de citas. Eliminar una cita para agregar otra');
    }
    //limpiar campo
    inputCita.value = "";
}

