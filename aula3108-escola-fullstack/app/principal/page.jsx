import Header from "../componentes/header";
import Link from "next/link";

export default function Principal() {
  return (
    <div style={styles.container}>
      <Header />
      
      {/* Banner principal com imagem de fundo */}
      <section style={styles.heroSection}>
        <div style={styles.overlay}>
          <h2 style={styles.heroTitle}>Bem-vindo ao Sistema Escolar</h2>
          <p style={styles.heroSubtitle}>SESI Mirandópolis</p>
        </div>
      </section>

      {/* Conteúdo com atalhos de acesso rápido */}
      <main style={styles.mainContent}>
        <h3 style={styles.sectionTitle}>Acesso Rápido</h3>
        
        <div style={styles.cardGrid}>
          <Link href="/cadaluno" style={styles.card}>
            <h4>➕ Cadastrar Aluno</h4>
            <p>Adicione novos alunos à base de dados da escola.</p>
          </Link>

          <Link href="/listaluno" style={styles.card}>
            <h4>📋 Lista de Alunos</h4>
            <p>Consulte a lista completa de alunos matriculados.</p>
          </Link>

          <Link href="/notaluno" style={styles.card}>
            <h4>📝 Lançar Notas</h4>
            <p>Registre e atualize as notas das avaliações.</p>
          </Link>

          <Link href="/listnota" style={styles.card}>
            <h4>📊 Relatório de Notas</h4>
            <p>Visualize as médias e desempenho da turma.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    margin: 0,
  },
  heroSection: {
    // Substitua o link da URL abaixo pelo caminho da sua imagem (ex: '/escola.jpg')
    backgroundImage: `url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "320px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)", // Camada escura para dar contraste ao texto
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    padding: "0 1rem",
  },
  heroTitle: {
    fontSize: "2.5rem",
    margin: "0 0 10px 0",
  },
  heroSubtitle: {
    fontSize: "1.3rem",
    margin: 0,
    fontWeight: "300",
  },
  mainContent: {
    maxWidth: "1100px",
    margin: "-40px auto 40px auto", // Faz os cards "subirem" levemente sobre o banner
    padding: "0 20px",
    position: "relative",
    zIndex: 2,
  },
  sectionTitle: {
    color: "#333",
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    display: "none", // Mantido opcional caso queira exibir
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#333",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.2s, boxShadow 0.2s",
    borderTop: "4px solid #d32f2f",
  },
};