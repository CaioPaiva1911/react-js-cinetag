import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <section className={styles.conttainer}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;