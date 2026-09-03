'use client';

import Header from "../componentes/header";

export default function Listaluno() {
  // Exemplo de dados para dinamizar a tabela
  const alunos = [
    { id: 1, nome: "Kelvin Destaque", idade: 18, serie: "3A", ra: "232300" },
  ];

  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <div style={styles.card}>
          <div style={styles.headerTitle}>
            <h2 style={styles.title}>Lista de Alunos</h2>
            <span style={styles.badge}>{alunos.length} Alunos Cadastrados</span>
          </div>

          <div style={styles.tableResponsive}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.theadRow}>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Nome</th>
                  <th style={styles.th}>Idade</th>
                  <th style={styles.th}>Série</th>
                  <th style={styles.th}>RA</th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((aluno, index) => (
                  <tr 
                    key={aluno.id} 
                    style={index % 2 === 0 ? styles.trEven : styles.trOdd}
                  >
                    <td style={styles.td}>{aluno.id}</td>
                    <td style={{ ...styles.td, fontWeight: "bold" }}>{aluno.nome}</td>
                    <td style={styles.td}>{aluno.idade} anos</td>
                    <td style={styles.td}>{aluno.serie}</td>
                    <td style={styles.td}>{aluno.ra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
  },
  main: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    width: "100%",
    maxWidth: "900px",
    borderTop: "5px solid #d32f2f",
  },
  headerTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "10px",
  },
  title: {
    margin: 0,
    color: "#333333",
    fontSize: "1.6rem",
  },
  badge: {
    backgroundColor: "#ffebee",
    color: "#d32f2f",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "bold",
  },
  tableResponsive: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  theadRow: {
    backgroundColor: "#d32f2f",
    color: "#ffffff",
  },
  th: {
    padding: "12px 16px",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  td: {
    padding: "14px 16px",
    borderBottom: "1px solid #e0e0e0",
    color: "#444444",
    fontSize: "0.95rem",
  },
  trEven: {
    backgroundColor: "#ffffff",
  },
  trOdd: {
    backgroundColor: "#f9f9f9",
  },
};