import { guardarProducto, obtenerProductos } from "./data.js";

const form = document.getElementById("producto-form");
const lista = document.getElementById("lista-productos");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);

  const nuevoProducto = { nombre, precio };
  guardarProducto(nuevoProducto);

  mostrarProductos();
  form.reset();
});

function mostrarProductos() {
  const productos = obtenerProductos();
  lista.innerHTML = "";

  productos.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${p.nombre} - $${p.precio}`;
    lista.appendChild(li);
  });
}

mostrarProductos();
