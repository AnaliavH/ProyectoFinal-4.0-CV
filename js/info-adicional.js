const infoAdicionalBody= document.querySelector(".info-adicional-body");
const btnInfoAdicional= document.querySelector(".btnInfoAdicional");

function mostrarInfoAdicional() {
    infoAdicionalBody.classList.toggle("info-adicional-body_activo");
    if (infoAdicionalBody.classList.contains("info-adicional-body_activo")) {
        btnInfoAdicional.setAttribute("aria-label", "Cerrar Información Adicional");
    } else {
        btnInfoAdicional.setAttribute("aria-label", "Mostrar Información Adicional");
    }
}

btnInfoAdicional.addEventListener("click", mostrarInfoAdicional);