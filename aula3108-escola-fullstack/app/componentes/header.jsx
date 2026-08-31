import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Projeto Escola</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link href="/" style={styles.link}>Início</Link></li>
          <li><Link href="/cadaluno" style={styles.link}>Cadastro de Alunos</Link></li>
          <li><Link href="/listaluno" style={styles.link}>Lista de Alunos</Link></li>
          <li><Link href="/notaluno" style={styles.link}>Lançar Notas</Link></li>
          <li><Link href="/listnota" style={styles.link}>Boletins / Notas</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#d32f2f", // Vermelho característico do SESI
    color: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  navList: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "opacity 0.2s",
  },
};