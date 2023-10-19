import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <p>
        Aqui, em breve, você poderá acompanhar a quantidade de abertura de editais de licitação nos municípios do <span className={styles.cearaText}>Ceará</span>.
      </p>
    </div>
  );
}
