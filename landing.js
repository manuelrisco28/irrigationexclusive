function abrirModal(tipo){

    const modal = document.getElementById("serviceModal");

    const img = document.getElementById("modalImg");

    const title = document.getElementById("modalTitle");

    const text = document.getElementById("modalText");

    if(tipo === "sod"){

        img.src = "FOTO 17.jpeg";

        title.innerText = "Sod Installation";

        text.innerText = "We provide professional sod installation services to transform your lawn into a healthy, green, and beautiful outdoor space.";
    }

    if(tipo === "irrigation"){

        img.src = "FOTO 7.jpeg";

        title.innerText = "Irrigation Systems";

        text.innerText = "Our irrigation systems are designed to keep your landscape healthy while saving water and improving efficiency.";
    }

    if(tipo === "landscaping"){

        img.src = "FOTO 18.jpeg";

        title.innerText = "Landscaping";

        text.innerText = "We create beautiful landscaping solutions that enhance the appearance and value of your property.";
    }
if(tipo === "drainage"){

        img.src = "FOTO 20.jpeg";

        title.innerText = "Drainage Solutions";

        text.innerText = "Protect your property with efficient drainage solutions designed to prevent water accumulation and erosion.";
    }

    modal.style.display = "flex";
}

function cerrarModal(){

    document.getElementById("serviceModal")
    .style.display = "none";
}

function abrirTrustModal(){

    document.getElementById("trustModal")
    .style.display = "flex";
}

function cerrarTrustModal(){

    document.getElementById("trustModal")
    .style.display = "none";
}
