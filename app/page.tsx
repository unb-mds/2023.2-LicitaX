import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>
          Aqui, em breve, você poderá acompanhar a quantidade de abertura de editais de licitação nos municípios do <span className={styles.cearaText}>Ceará</span>.
        </p>
        <p className={styles.cearaParagraph}></p>
        <p>
          <span>
            <a href="https://unb-mds.github.io/2023-2-Squad07/" target="_blank" rel="noopener noreferrer">
               Para saber mais sobre o projeto clique <span className={styles.blueLink}>aqui!</span>
            </a>
            <br />
            <a href="https://github.com/unb-mds/Squad07-front" target="_blank" rel="noopener noreferrer">
               Para acessar nosso repositório do front-end clique <span className={styles.blueLink}>aqui</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
