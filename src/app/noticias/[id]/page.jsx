import axios from "axios";
import '../estilos.css'; 


async function universidadesMexico() {
    const url = "http://universities.hipolabs.com/search?country=Mexico";
    const universidades = await axios.get(url);
    return universidades.data;
}

export default async function Noticia({ params }) {
    const universidades = await universidadesMexico();

    
    const id = parseInt(params.id, 10);
    const universidad = universidades[id - 1] || null; 

    return (
        <div className="noticia-container"> 
            <h1 className="titulo-noticia">Noticias</h1> 
            <p className="descripcion-noticia">Estas en noticias</p> 
            {universidad ? ( 
                <table className="universidad-table"> 
                    <thead>
                        <tr>
                            <th className="table-header">Id</th> 
                            <th className="table-header">Universidad</th> 
                            <th className="table-header">Sitio web</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-data">{id}</td> 
                            <td className="table-data">{universidad.name}</td> 
                            <td className="table-data">
                                <a href={universidad.web_pages[0]} target="_blank" rel="noopener noreferrer">
                                    {universidad.web_pages[0]} 
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
