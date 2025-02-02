// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){
    const amigoInput = document.getElementById('amigo');
    const amigo = amigoInput.value.trim();

    if (amigo !== ''){
        const lista = document.getElementById('listaAmigos');

        let listaItem = document.createElement('li');
        listaItem.textContent = amigo; 

        lista.appendChild(listaItem); 
        const buttonEliminar = document.createElement('button');
        buttonEliminar.className='btnEliminar';
        buttonEliminar.innerHTML = 'Eliminar';

        buttonEliminar.onclick = function(){
            lista.removeChild(listaItem)
        }
        listaItem.appendChild(buttonEliminar);
        lista.appendChild(listaItem);

        amigoInput.value = '';

    }else{
        alert('Agregue a un amigo por favor');
    }
}