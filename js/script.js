function escrever(event){
    const letrasDoTitulo = event.innerHTML.split('');
    event.innerHTML = '';

    letrasDoTitulo.forEach(function(letras, indice){
        setTimeout(function(){
            event.innerHTML += letras;
        }, 80 * indice)
    });
    
}
    


const frase = document.getElementById('titulo__header');

escrever(frase);