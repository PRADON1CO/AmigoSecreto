// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){
    const amigoInput = document.getElementById('amigo');
    const amigo = amigoInput.value.trim();
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    if (amigo !== ''){
        const lista = document.getElementById('listaAmigos');

        let listaItem = document.createElement('li');
        listaItem.textContent = amigo; 

        //crear Botón para eliminar
        const buttonEliminar = document.createElement('button');
        buttonEliminar.className='btnEliminar';
        buttonEliminar.innerHTML = 'Eliminar';

        buttonEliminar.onclick = function(){
            lista.removeChild(listaItem)
        }

        // Agregar el botón dentro del <li>
        listaItem.appendChild(buttonEliminar);

        // Agregar el <li> a la lista
        lista.appendChild(listaItem);

        // Limpiar el input
        amigoInput.value = '';

    }else{
        alert('Agregue a un amigo por favor');
    }
}

function sortearAmigo(){
    const lista = document.getElementById('listaAmigos');
    const amigos = Array.from(lista.getElementsByTagName('li')); 
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Elegir un ganador aleatorio
    const ganadorIndex = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[ganadorIndex].firstChild.nodeValue.trim();

    // Limpiar la lista de resultados anteriores
    resultado.innerHTML = '';

    // Crear y agregar el ganador a la lista de resultados
    let ganadorItem = document.createElement('li');
    ganadorItem.textContent = `¡El amigo secreto es: ${ganador}! 🎉`;
    resultado.appendChild(ganadorItem)

    // Limpiar la lista de amigos
    lista.innerHTML = '';

    
}