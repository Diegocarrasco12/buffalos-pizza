function irAlMenu() {
    window.location.href = "#menu";
  }
  
  let carrito = [];
  let total = 0;
  
  function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalEl = document.getElementById("total");
  
    lista.innerHTML = "";
    carrito.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio}`;
      lista.appendChild(li);
    });
  
    totalEl.textContent = `Total: $${total}`;
  }
  
  function finalizarPedido() {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
  
    // Oculta carrito y muestra datos de transferencia
    document.getElementById("carrito").style.display = "none";
    document.getElementById("transferencia").style.display = "block";
  
    // Muestra total
    document.getElementById("total-transferencia").innerHTML = `<strong>Total a pagar:</strong> $${total}`;
  
    // Limpia el carrito interno
    carrito = [];
    total = 0;
    actualizarCarrito();
  }
  
  function volverAlMenu() {
    document.getElementById("transferencia").style.display = "none";
    document.getElementById("carrito").style.display = "block";
  }
  