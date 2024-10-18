let ampliarUsu=document.querySelector("#ampliar-usuario")
let seccionUsu=document.querySelector(".dropdown-content2")
let cerrarUsu=document.querySelector("#cerrar-usuario")

ampliarUsu.addEventListener('click',()=>{   
    seccionUsuAmp.style.display="inline"
})
cerrarUsu.addEventListener('click',()=>{   
    seccionUsuAmp.style.display="none"
})

function selectImage(img) {
    document.getElementById("profile-picture").src = img.src;
  }
