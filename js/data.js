export function guardarProducto(producto) {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
  }
  
  export function obtenerProductos() {
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  