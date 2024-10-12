import Link from "next/link"; // Importar Link de Next.js
import Boton from "@/components/boton"; // Importar el componente Boton
import axios from "axios";
import '../estilos.css'; // Asegúrate de que la ruta sea correcta


async function usuariosApp() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuarios() {
    const usuarios = await usuariosApp();

    return (
        <div className="usuarios-container"> {/* Clase para el contenedor principal */}
            <h1 className="titulo-usuarios">Usuarios</h1> {/* Clase para el título */}
            <p className="descripcion-usuarios">Estas en usuarios</p> {/* Clase para la descripción */}
            <table className="usuarios-table"> {/* Clase para la tabla de usuarios */}
                <thead>
                    <tr>
                        <th className="table-header">Id</th> {/* Clase para los encabezados */}
                        <th className="table-header">User</th>
                        <th className="table-header">User Name</th>
                        <th className="table-header">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td className="table-data">{usuario.id}</td> {/* Clase para los datos de la tabla */}
                            <td className="table-data">
                                <Link href={`/users/${usuario.id}`} className="link-usuario">{usuario.name}</Link> {/* Clase para el enlace */}
                            </td>
                            <td className="table-data">{usuario.username}</td>
                            <td className="table-data">{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
