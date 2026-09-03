'use client';

import Header from "../componentes/header";

export default function Listnota() {
  const notas = [
    {
      id: 1,
      aluno: "Kelvin Destaque",
      t1: 8.5,
      t2: 9.0,
      n1: 7.5,
      n2: 8.0,
      n3: 9.5,
    },
  ];

  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <div style={styles.card}>
          <div style={styles.headerTitle}>
            <h2 style={styles.title}>Notas dos Alunos</h2>
            <span style={styles.badge}>{notas.length} Registros</span>
          </div>

          <div style={styles.tableResponsive}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.theadRow}>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Aluno</th>
                  <th style={styles.th}>T1</th>
                  <th style={styles.th}>T2</th>
                  <th style={styles.th}>N1</th>
                  <th style={styles.th}>N2</th>
                  <th style={styles.th}>N3</th>
                </tr>
              </thead>
              <tbody>
                {notas.map((item, index) => (
                  <tr
                    key={item.id}
                    style={index % 2 === 0 ? styles.trEven : styles.trOdd}
                  >
                    <td style={styles.td}>{item.id}</td>
                    <td style={{ ...styles.td, fontWeight: "bold" }}>
                      {item.aluno}
                    </td>
                    <td style={styles.tdScore}>{item.t1.toFixed(1)}</td>
                    <td style={styles.tdScore}>{item.t2.toFixed(1)}</td>
                    <td style={styles.tdScore}>{item.n1.toFixed(1)}</td>
                    <td style={styles.tdScore}>{item.n2.toFixed(1)}</td>
                    <td style={styles.tdScore}>{item.n3.toFixed(1)}</td>
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
    maxWidth: "950px",
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
  tdScore: {
    padding: "14px 16px",
    borderBottom: "1px solid #e0e0e0",
    color: "#222222",
    fontSize: "0.95rem",
    fontWeight: "500",
  },
  trEven: {
    backgroundColor: "#ffffff",
  },
  trOdd: {
    backgroundColor: "#f9f9f9",
  },
};