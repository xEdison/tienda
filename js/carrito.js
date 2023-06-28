let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const carritoTotal = document.getElementById('carrito-total');

    carritoLista.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.nombre + ' - $' + item.precio;
        carritoLista.appendChild(li);
    });

    carritoTotal.textContent = 'Total: $' + total;
}