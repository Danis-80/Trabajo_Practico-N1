import "./Formulario.css"
export function Formulario() {
    return (
      <section>
        <h1>Alta de usuario</h1>
        <form className="Formulario">
          <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu Nombre" />
          <input type="text" id="Apellido" name="Apellido" placeholder="Ingresa tu Apellido" />
          <input type="text" id="e-mail" name="nombre" placeholder="e-mail" />
          <input type="text" id="Telefono" name="nombre" placeholder="Telefono" />
          <input type="password" id="Contraseña" name="nombre" placeholder="Contraseña" />
          <input type="password" id="Confirmar" name="nombre" placeholder=" Confirma tu Contraseña" />
          <button>Aceptar</button>
        </form>
      </section>
    );
  }
