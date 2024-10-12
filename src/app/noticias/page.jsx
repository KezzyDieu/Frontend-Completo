import Link from "next/link"; // Importar Link de Next.js
import Boton from "@/components/boton"; // Importar el componente Boton
import axios from "axios";
import '../estilos.css'; // Asegúrate de que la ruta sea correcta


async function universidadesMexico() {
    const url = "http://universities.hipolabs.com/search?country=Mexico";
    const universidades = await axios.get(url);
    return universidades.data;
}

export default async function Noticias() {
    const universidades = await universidadesMexico();

    return (
        <div className="noticias-container"> {/* Clase para el contenedor principal */}
            <h1 className="titulo-noticias">Noticias</h1> {/* Clase para el título */}
            <p className="descripcion-noticias">Estas en noticias</p> {/* Clase para la descripción */}
            <table className="noticias-table"> {/* Clase para la tabla de universidades */}
                <thead>
                    <tr>
                        <th className="table-header">Id</th> {/* Clase para los encabezados */}
                        <th className="table-header">Universidad</th>
                        <th className="table-header">Sitio web</th>
                    </tr>
                </thead>
                <tbody>
                    {universidades.map((universidad, i) => (
                        <tr key={i}>
                            <td className="table-data">{i + 1}</td> {/* Clase para los datos de la tabla */}
                            <td className="table-data">
                                <Link href={`/noticias/${i + 1}`} className="link-universidad">{universidad.name}</Link> {/* Clase para el enlace */}
                            </td>
                            <td className="table-data">{universidad.web_pages[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Boton />
        </div>
    );
}
