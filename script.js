console.log("JS cargado correctamente");
const adminMode = true;


function toggleHorario(){

    let lista = document.getElementById("listaHorarios")
    let flecha = document.getElementById("flecha")

    if(lista.style.display === "block"){

        lista.style.display = "none"
        flecha.innerHTML = "▼"

    }else{

        lista.style.display = "block"
        flecha.innerHTML = "▲"

    }

}

const datos = {

    LUN:[20,40,60,90,70,40],

    MAR:[15,35,55,80,100,50],

    MIE:[25,45,65,85,75,50],

    JUE:[30,50,70,95,90,60],

    VIE:[40,60,85,100,95,80],

    SAB:[50,70,100,95,85,60],

    DOM:[0,5,10,15,10,5]
}

const dias = document.querySelectorAll(".dias span")

const barras = document.querySelectorAll(".barra")

dias.forEach(dia => {

    dia.addEventListener("click", () => {

        dias.forEach(d => d.classList.remove("activo"))

        dia.classList.add("activo")

        let valores = datos[dia.innerText]

        barras.forEach((barra,index)=>{

            barra.style.height = valores[index] + "%"

        })

    })

})

/* ========================= */
/* GALERÍA DE FOTOS */
/* ========================= */

const fotos = [

    "FOTOO 1.jpeg",
    "FOTO 2.jpeg",
    "imagenes/FOTO 3.jpeg",
    "imagenes/FOTO 4.jpeg",
    "imagenes/FOTO 5.jpeg",
    "imagenes/FOTO6.jpeg",
    "imagenes/FOTO 7.jpeg",
    "imagenes/FOTO 8.jpeg",
    "imagenes/FOTO 9.jpeg",
    "imagenes/FOTO 10.jpeg",
    "imagenes/FOTO 11.jpeg",
    "imagenes/FOTO 12.jpeg",
    "imagenes/FOTO 13.jpeg",
    "imagenes/FOTO 14.jpeg",
    "imagenes/FOTO 15.jpeg",
    "imagenes/FOTO 16.jpeg",
    "imagenes/FOTO 17.jpeg",
    "imagenes/FOTO 18.jpeg",
    "imagenes/FOTO 19.jpeg",
    "imagenes/FOTO 20.jpeg",
    "imagenes/FOTO 21.jpeg",
    "videos/VIDEOO 1.mp4",

]

function abrirGaleria(){

    const modal = document.getElementById("modalGaleria")
    const contenedor = document.getElementById("contenedorFotos")

    contenedor.innerHTML = ""

    fotos.forEach(item => {

        // SI ES VIDEO
        if(item.includes(".mp4") || item.includes(".webm")){
    contenedor.innerHTML += `
        <video controls class="video-galeria">
            <source src="${item}" type="video/mp4">
        </video>
    `
}
        // SI ES IMAGEN
        else{
            contenedor.innerHTML += `
                <img src="${item}" class="img-galeria">
            `
        }

    })

    modal.style.display = "block"
}

function cerrarGaleria(){ document.getElementById("modalGaleria").style.display = "none" }

/* ========================= */
/* ZOOM + TECLADO */
/* ========================= */

let imagenActual = 0;

// SOLO IMÁGENES
const fotosSolo = fotos.filter(item => !item.includes(".mp4"));

document.addEventListener("click", function(e){

    if(e.target.classList.contains("img-galeria")){

        const srcImagen = e.target.getAttribute("src");

        imagenActual = fotosSolo.indexOf(srcImagen);

        abrirZoom(srcImagen);
    }

});

function abrirZoom(src){

    document.getElementById("imagenZoom").src = src;

    document.getElementById("modalZoom").style.display = "flex";
}

function cerrarZoom(){

    document.getElementById("modalZoom").style.display = "none";
}

/* TECLADO */

document.addEventListener("keydown", function(e){

    const modal = document.getElementById("modalZoom");

    if(modal.style.display === "flex"){

        // →
        if(e.key === "ArrowRight"){

            imagenActual++;

            if(imagenActual >= fotosSolo.length){
                imagenActual = 0;
            }

            abrirZoom(fotosSolo[imagenActual]);
        }

        // ←
        if(e.key === "ArrowLeft"){

            imagenActual--;

            if(imagenActual < 0){
                imagenActual = fotosSolo.length - 1;
            }

            abrirZoom(fotosSolo[imagenActual]);
        }

        // ESC
        if(e.key === "Escape"){
            cerrarZoom();
        }

    }

});


function abrirMapa(){
    window.open("https://www.google.com/maps?q=9513+Kennesaw+Rd+North+Chesterfield+VA+23236", "_blank");
}

let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];

function actualizarRating(){

    let ratingCompleto =
    document.getElementById("ratingCompleto");

    let ratingGrande =
    document.getElementById("ratingNumberGrande");

    let starsGrande =
    document.getElementById("ratingStarsGrande");

    let totalGrande =
    document.getElementById("totalReviews");

    let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

    // SI NO HAY REVIEWS

    if(reviews.length === 0){

        if(ratingCompleto){
            ratingCompleto.innerText =
            "0.0 ☆☆☆☆☆ (0 opiniones de Google)";
        }

        if(ratingGrande){
            ratingGrande.innerText = "0.0";
        }

        if(starsGrande){
            starsGrande.innerText = "☆☆☆☆☆";
        }

        if(totalGrande){
            totalGrande.innerText = "0 opiniones";
        }

        return;
    }

    let total = 0;

    reviews.forEach(review => {

        total += review.estrellas;

    });

    let promedio =
    total / reviews.length;

    let estrellas =
    Math.round(promedio);

    let estrellasTexto =

        "⭐".repeat(estrellas) +
        "☆".repeat(5 - estrellas);

    // TEXTO ARRIBA

    if(ratingCompleto){

        ratingCompleto.innerText =

        `${promedio.toFixed(1)} ${estrellasTexto} (${reviews.length} opiniones de Google)`;
    }

    // MODAL GRANDE

    if(ratingGrande){

        ratingGrande.innerText =
        promedio.toFixed(1);
    }

    if(starsGrande){

        starsGrande.innerText =
        estrellasTexto;
    }

    if(totalGrande){

        totalGrande.innerText =
        `${reviews.length} opiniones`;
    }
}
actualizarRating();

function abrirOpiniones(){
    console.log("CLICK DETECTADO");
    document.getElementById("modalOpiniones").style.display = "flex";
}

function cerrarOpiniones(){
    document.getElementById("modalOpiniones").style.display = "none";
}

/* ========================= */
/* BOTONES FUNCIONALES */
/* ========================= */

function abrirSitio(){

    window.location.href = "landing.html";

}

function comoLlegar(){

    window.open(
        "https://www.google.com/maps?q=9513+Kennesaw+Rd+North+Chesterfield+VA+23236",
        "_blank"
    );

}

function guardarPagina(){

    alert("Página guardada ⭐");

}

function compartirPagina(){

    navigator.clipboard.writeText(window.location.href);

    alert("Link copiado 🔗");

}

function llamarTelefono(){

    window.location.href =
    "tel:+18048784382";

}

function toggleExtras(){

    let extras =
    document.getElementById("botonesExtra");

    if(extras.style.display === "flex"){

        extras.style.display = "none";

    }else{

        extras.style.display = "flex";

    }

}

function toggleTags(){

    let extras = document.getElementById("extrasTags");

    if(extras.style.display === "flex"){

        extras.style.display = "none";

    }else{

        extras.style.display = "flex";
    }
}

const tags = document.querySelectorAll(".tag");

tags.forEach(tag => {

    tag.addEventListener("click", () => {

        // SOLO DENTRO DEL MISMO GRUPO

        let contenedor = tag.parentElement;

        let tagsDelGrupo = contenedor.querySelectorAll(".tag");

        tagsDelGrupo.forEach(t => {
            t.classList.remove("activo");
        });

        tag.classList.add("activo");

    });

});

function abrirEscribirOpinion(){

    document.getElementById("modalEscribir")
    .style.display = "flex";
}

function cerrarEscribirOpinion(){

    document.getElementById("modalEscribir")
    .style.display = "none";
}

let estrellasSeleccionadas = 0;

function seleccionarEstrella(num){

    estrellasSeleccionadas = num;

    let estrellas =
    document.querySelectorAll(".stars-select span");

    estrellas.forEach((estrella,index)=>{

        if(index < num){

            estrella.innerHTML = "★";
            estrella.style.color = "#fbbc04";

        }else{

            estrella.innerHTML = "☆";
            estrella.style.color = "#dadce0";
        }

    });

}

function publicarReview(){

    let texto =
    document.getElementById("textoOpinion").value;
    let nombre =
document.getElementById("nombreUsuario").value;

    let archivos =
    document.getElementById("subirMedia").files;

    if(estrellasSeleccionadas === 0 || texto === "" || nombre === ""){
        alert("Completa las estrellas y opinión");

        return;
    }

    let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

    let archivosBase64 = [];

    let archivosProcesados = 0;

    if(archivos.length > 0){

        for(let i = 0; i < archivos.length; i++){

            let reader = new FileReader();

            reader.onload = function(e){

                archivosBase64.push({
                    tipo: archivos[i].type,
                    data: e.target.result
                });

                archivosProcesados++;

                if(archivosProcesados === archivos.length){

                    guardarReview();
                }

            };

            reader.readAsDataURL(archivos[i]);
        }

    }else{

        guardarReview();
    }

    function guardarReview(){

        let nuevaReview = {

            nombre:nombre,

            estrellas: estrellasSeleccionadas,

            texto:texto,

            fecha:new Date().toLocaleDateString(),

            fechaCompleta:new Date(),

            archivos: archivosBase64

        };

        reviews.unshift(nuevaReview);

        localStorage.setItem(
            "reviews",
            JSON.stringify(reviews)
        );

        mostrarReviews();

        actualizarRating();

        cerrarEscribirOpinion();

        document.getElementById("textoOpinion").value = "";

        document.getElementById("subirMedia").value = "";

        estrellasSeleccionadas = 0;
    }
}

let tipoOrden = "relevantes";

function ordenarReviews(tipo){

    tipoOrden = tipo;

    mostrarReviews();
}

function mostrarReviews(){

    let lista =
    document.getElementById("listaOpiniones");

    let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

    lista.innerHTML = "";

    // ORDENAR

    if(tipoOrden === "recientes"){

        reviews.sort((a,b)=>
            new Date(b.fechaCompleta) -
            new Date(a.fechaCompleta)
        );
    }

    if(tipoOrden === "alta"){

        reviews.sort((a,b)=>
            b.estrellas - a.estrellas
        );
    }

    if(tipoOrden === "baja"){

        reviews.sort((a,b)=>
            a.estrellas - b.estrellas
        );
    }

    if(tipoOrden === "relevantes"){

        reviews.sort((a,b)=>{

            let puntosA =
            (a.estrellas * 2);

            let puntosB =
            (b.estrellas * 2);

            return puntosB - puntosA;
        });
    }

    reviews.forEach((review,index) => {

        let mediaHTML = "";

        if(review.archivos){

            review.archivos.forEach(archivo => {

                if(archivo.tipo.includes("image")){

                    mediaHTML += `
                        <img src="${archivo.data}">
                    `;

                }else if(archivo.tipo.includes("video")){

                    mediaHTML += `
                        <video controls>
                            <source src="${archivo.data}">
                        </video>
                    `;
                }

            });

        }

        lista.innerHTML += `

        <div class="review-item">

            <button class="eliminar-review"
            onclick="eliminarReview(${index})">
                ✕
            </button>

            <button class="compartir-review"
            onclick="compartirReview(${index})">
                🔗
            </button>

            <div class="review-header">

                <div style="display:flex;align-items:center;gap:14px;">

                    <div class="avatar">
                        ${review.nombre.charAt(0)}
                    </div>

                    <div>

                        <h3 style="
                        font-size:17px;
                        margin:0;
                        ">
                            ${review.nombre}
                        </h3>

                        <small style="
                        color:#5f6368;
                        font-size:12px;
                        ">
                            ${review.fecha}
                        </small>

                    </div>

                </div>

            </div>

            <div class="review-stars">

                ${"⭐".repeat(review.estrellas)}

            </div>

            <p class="texto-review">

                ${review.texto}

            </p>

            <div class="review-fotos">

                ${mediaHTML}

            </div>

        </div>

        `;
    });
}

function eliminarReview(index){

    let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.splice(index,1);

    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );

    actualizarRating();
    mostrarReviews();
    
}

function compartirReview(index){

    let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

    let review = reviews[index];

    let textoCompartir = `
⭐ ${review.estrellas} estrellas

${review.texto}

- ${review.nombre}
`;

    if(navigator.share){

        navigator.share({

            title:"Review",

            text:textoCompartir

        });

    }else{

        navigator.clipboard.writeText(textoCompartir);

        alert("Review copiada 🔗");
    }
}
