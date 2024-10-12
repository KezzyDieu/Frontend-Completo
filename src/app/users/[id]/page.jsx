import axios from "axios";
import '../estilos.css'; 

async function usuariosApp() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function UsuarioDetalle({ params }) {
    const usuarios = await usuariosApp();
    const id = parseInt(params.id, 10);
    const usuario = usuarios[id - 1];

    return (
        <div className="usuario-detalle"> {/* Clase para el contenedor principal */}
            <h1 className="titulo-usuario">Detalles del Usuario</h1>
            {usuario ? (
                <>
                    
                    <h2>Información General</h2>
                    <table className="detalle-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Nombre de Usuario</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>Sitio Web</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{usuario.id}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.phone}</td>
                                <td>
                                    <a href={`https://${usuario.website}`} target="_blank" rel="noopener noreferrer">
                                        {usuario.website}
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    <h2>Dirección del Usuario</h2>
                    <table className="detalle-table">
                        <thead>
                            <tr>
                                <th>Calle</th>
                                <th>Suite</th>
                                <th>Ciudad</th>
                                <th>Código Postal</th>
                                <th>Latitud</th>
                                <th>Longitud</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{usuario.address.street}</td>
                                <td>{usuario.address.suite}</td>
                                <td>{usuario.address.city}</td>
                                <td>{usuario.address.zipcode}</td>
                                <td>{usuario.address.geo.lat}</td>
                                <td>{usuario.address.geo.lng}</td>
                            </tr>
                        </tbody>
                    </table>

                    
                    <h2>Compañía del Usuario</h2>
                    <table className="detalle-table">
                        <thead>
                            <tr>
                                <th>Nombre de la Compañía</th>
                                <th>Frase de la Compañía</th>
                                <th>BS de la Compañía</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{usuario.company.name}</td>
                                <td>{usuario.company.catchPhrase}</td>
                                <td>{usuario.company.bs}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ) : (
                <p>No se encontró el usuario con el ID proporcionado.</p>
            )}
        </div>
    );
}