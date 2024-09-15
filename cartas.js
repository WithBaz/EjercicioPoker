document.querySelector('#registrar').addEventListener('click', function() { 
	guardarCarta();
	pintarTabla();
});


document.querySelectorAll('.btncarta').forEach(button => {
    button.addEventListener('click', () => {
      let datos = JSON.parse(localStorage.getItem('datos'));
  
      datos.forEach(item => {
        if (item.numero === button.dataset.carta) {
          item.cantidad++;
        }
      });
  
      localStorage.setItem('datos', JSON.stringify(datos));
      pintarTabla();
    });
  });

function guardarCarta(){

	var numero = document.querySelector('#numero').value;
	var carta = document.querySelector('#carta').value;
	var datos = localStorage.getItem('datos');

	datos = JSON.parse(datos);

	var dato = {numero: numero, carta: carta, cantidad: '0'};

	datos.push(dato);

	localStorage.setItem('datos', JSON.stringify(datos));
    document.querySelector('#numero').value = '';
    document.querySelector('#carta').value = '';
}

function cargarJSON(){
	var miObjeto = [];
		localStorage.setItem('datos', JSON.stringify(miObjeto));
}

function pintarTabla(){
	var datos = localStorage.getItem('datos');

	let res = document.querySelector('#listado');
		res.innerHTML = '';

	console.log('objetoObtenido: ', JSON.parse(datos));
	datos = JSON.parse(datos);

	for(let item of datos) {
		res.innerHTML += `<tr>
  				<td>${item.numero}</td>
  				<td>${item.carta}</td>
  				<td>${item.cantidad}</td>
			</tr>`;
	}
}


function leerJSON() {
            $.getJSON("../data/datos.json", function(datos) {
                console.log(datos);
            });
        }
leerJSON();
cargarJSON();
pintarTabla();
