import Link from "next/link"; 
import Boton from "@/components/boton"; 
import axios from "axios";
import '../estilos.css'; 


async function universidadesMexico() {
    const url = "http://universities.hipolabs.com/search?country=Mexico";
    const universidades = await axios.get(url);
    return universidades.data;
}

export default async function Noticias() {
    const universidades = await universidadesMexico();

    return (
        <div className="noticias-container"> 
            <h1 className="titulo-noticias">Noticias</h1> 
            <p className="descripcion-noticias">Estas en noticias</p> 
            <table className="noticias-table"> 
                <thead>
                    <tr>
                        <th className="table-header">Id</th> 
                        <th className="table-header">Universidad</th>
                        <th className="table-header">Sitio web</th>
                    </tr>
                </thead>
                <tbody>
                    {universidades.map((universidad, i) => (
                        <tr key={i}>
                            <td className="table-data">{i + 1}</td>
                            <td className="table-data">
                                <Link href={`/noticias/${i + 1}`} className="link-universidad">{universidad.name}</Link>
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
