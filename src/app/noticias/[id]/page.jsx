import axios from "axios";
import '../estilos.css'; // Asegúrate de que la ruta sea correcta


async function universidadesMexico() {
    const url = "http://universities.hipolabs.com/search?country=Mexico";
    const universidades = await axios.get(url);
    return universidades.data;
}

export default async function Noticia({ params }) {
    const universidades = await universidadesMexico();

    // Convertir params.id a número y asegurarte de que esté dentro del rango del array
    const id = parseInt(params.id, 10);
    const universidad = universidades[id - 1] || null; // Obtener la universidad específica, ajustando el índice

    return (
        <div className="noticia-container"> {/* Clase para el contenedor principal */}
            <h1 className="titulo-noticia">Noticias</h1> {/* Clase para el título */}
            <p className="descripcion-noticia">Estas en noticias</p> {/* Clase para la descripción */}
            {universidad ? ( // Verificar si la universidad existe
                <table className="universidad-table"> {/* Clase para la tabla de universidades */}
                    <thead>
                        <tr>
                            <th className="table-header">Id</th> {/* Clase para el encabezado de la tabla */}
                            <th className="table-header">Universidad</th> {/* Clase para el encabezado de la tabla */}
                            <th className="table-header">Sitio web</th> {/* Clase para el encabezado de la tabla */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-data">{id}</td> {/* Clase para los datos de la tabla */}
                            <td className="table-data">{universidad.name}</td> {/* Clase para los datos de la tabla */}
                            <td className="table-data">
                                <a href={universidad.web_pages[0]} target="_blank" rel="noopener noreferrer">
                                    {universidad.web_pages[0]} {/* Clase para los datos de la tabla */}
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p className="error-message">No se encontró la universidad con el ID proporcionado.</p> 
            )}
        </div>
    );
}
