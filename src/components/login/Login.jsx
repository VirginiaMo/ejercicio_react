import './Login.css'

const login = () => {
    return (  

        <div className="formulario">
                <label>Email</label>
                <input placeholder="Introduce tu correo"></input>
                <label>Contraseña</label>
                <input type="text" placeholder="Introduce tu contraseña"></input>
            <div className="checkboxAnchor">
                <input className="input" type="checkbox"></input>
                <label>Recuérdame</label>
                <a href="/#">He olvidado la contraseña</a>
            </div>
                <button>Iniciar Sesión</button>
        </div>
       
    );
}
 
export default login;