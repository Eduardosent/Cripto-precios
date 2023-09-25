  const convertir = () =>{
    const rate = document.getElementById('rate').value;
    const numero = document.getElementById('numero').value;
    const valor = 1/parseFloat(rate);
    const conversion = valor * numero;

     const convertido = createElement('h4');
     convertido.textContent = `${numero} unidades de esta criptomoneda tienen el valor de ${conversion}`;
    
     const padre = document.querySelector('.conversiones');
     padre.appendChild(convertido);
  }