"use client"

function nueva() {
    console.log("NUeva noticia")
}

export default function Boton() {
    return(
        <button onClick={nueva}>Nueva noticia</button>
    );
}