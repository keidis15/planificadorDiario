
const notasInput = document.querySelector('.inputContent');
const contenidoText = document.querySelector('.agregarNotaP');

export function agregarNota(){
    const nuevaNota = notasInput.value;
    if(nuevaNota !== ''){
        contenidoText.textContent = nuevaNota;

        //creamos un botton de eliminar tarea
        const eliminarItemLista = document.createElement('button');
        eliminarItemLista.setAttribute('class', 'eliminarItem');
        eliminarItemLista.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

        eliminarItemLista.addEventListener('click',function(){
            contenidoText.textContent = "";
            
        });

        //boton
        contenidoText.appendChild(eliminarItemLista);
        
            //limpiar campo
        notasInput.value = ""; 
    }else{
        alert('Ingrese un texto valido');
    }

    

    
}