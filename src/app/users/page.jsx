import Link from "next/link"; 
import Boton from "@/components/boton"; 
import axios from "axios";
import '../estilos.css'; 


async function usuariosApp() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuarios() {
    const usuarios = await usuariosApp();

    return (
        <div className="usuarios-container"> 
            <h1 className="titulo-usuarios">Usuarios</h1> 
            <p className="descripcion-usuarios">Estas en usuarios</p> 
            <table className="usuarios-table"> 
                <thead>
                    <tr>
                        <th className="table-header">Id</th> 
                        <th className="table-header">User</th>
                        <th className="table-header">User Name</th>
                        <th className="table-header">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td className="table-data">{usuario.id}</td> 
                            <td className="table-data">
                                <Link href={`/users/${usuario.id}`} className="link-usuario">{usuario.name}</Link> 
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
