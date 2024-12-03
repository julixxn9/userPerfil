 
const formulario = document.getElementById("userForm");
const perfil = document.getElementById("perfil");
const formDiv = document.getElementById("divFrom");

const userPerfil = {
    nombre:"",
    edad: "",
    email: "",
    phone: "",
    dir: "",
    img: ""
};

function crearFormulario(evento) {
    evento.preventDefault();
  userPerfil.nombre = document.getElementById("name").value;
  userPerfil.edad = document.getElementById("edad").value;
  userPerfil.email = document.getElementById("correo").value;
  userPerfil.phone = document.getElementById("phone").value;
  userPerfil.dir = document.getElementById("direccion").value;


    perfil.innerHTML =  `
          <h2>Perfil de usuario</h2>
          <p>
          <span>Foto de Perfil</span>
              <img src="${userPerfil.img}" alt="">
          </p>
          <p>
              <span>Nombre</span>
              ${userPerfil.nombre}
          </p>
          <p>
              <span>Edad</span>
              ${userPerfil.edad}
          </p>
          <p>
              <span>Correo</span>
              ${userPerfil.email}
          </p>
          <p>
              <span>Telefono</span>
              ${userPerfil.phone}
          </p>
          <p>
          <span>Direccion</span>
              ${userPerfil.dir}
          </p>
          <button type="button" onclick="modificarPerfil()">modificar</button>`;
        perfil.style.padding = "20px";
      formDiv.innerHTML = "";
      formDiv.style.padding = "0px";
}

function modificarPerfil() {
    perfil.style.padding = "0px";
    perfil.innerHTML = "";
    formDiv.style.padding = "20px";
    formDiv.innerHTML = `
          <form onsubmit="crearFormulario(event)" id="userForm">
        <h2>Modificar perfil de usuario</h2>
        <label for="name"
          >Nombre
          <input type="text" id="name" required value = "${userPerfil.nombre}" />
        </label>
        <label for="edad"
          >Edad
          <input type="number" id="edad" required value = "${userPerfil.edad}"/>
        </label>
        <label for="correo"
          >Correo
          <input type="email" id="correo" required value = "${userPerfil.email}" />
        </label>
        <label for="phone"
          >Telefono
          <input type="tel" id="phone" required value = "${userPerfil.phone}" />
        </label>
        <label for="direccion"
          >Direccion
          <input type="number" id="direccion" required value = "${userPerfil.dir}" />
        </label>
        <label class="insertarImg">
          <span>Foto de perfil</span>
          <button type="button" class="botonFoto" onclick="urlImagen()">
            <span>Seleccionar</span>
            <img id="img" src="${userPerfil.img}" alt="foto">
          </button>
        </label>
        <button id="modificar" type="submit">Actualizar</button>
        <button id="volver" onclick="volverPerfil()">Cancelar</button>
      </form>
    `;
}

function urlImagen (){
  let url = prompt("Ingrese la URL de la nueva imagen:");
  userPerfil.img = url;
  document.getElementById("img").src=userPerfil.img;
  // Mostrar un prompt para ingresar la URL de la nueva imagen
}

function volverPerfil(){

    perfil.innerHTML =  `
          <h2>Perfil de usuario</h2>
          <p>
          <span>Foto de Perfil</span>
              <img src="${userPerfil.img}" alt="">
          </p>
          <p>
              <span>Nombre</span>
              ${userPerfil.nombre}
          </p>
          <p>
              <span>Edad</span>
              ${userPerfil.edad}
          </p>
          <p>
              <span>Correo</span>
              ${userPerfil.email}
          </p>
          <p>
              <span>Telefono</span>
              ${userPerfil.phone}
          </p>
          <p>
          <span>Direccion</span>
              ${userPerfil.dir}
          </p>
          <button type="button" onclick="modificarPerfil()">modificar</button>`;
        perfil.style.padding = "20px"
      formDiv.innerHTML = "";
      formDiv.style.padding = "0px"
}

