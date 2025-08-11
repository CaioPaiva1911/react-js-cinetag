import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="Home" />
            <Titulo>
                <h1>A place to save your videos and movies!</h1>
            </Titulo>
            <Card id='1' titulo='Legend of the Guardians' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
            <Rodape />
        </>
    )
}

export default Inicio;