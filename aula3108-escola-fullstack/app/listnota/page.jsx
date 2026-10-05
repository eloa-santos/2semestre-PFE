'use client';

import { useState } from "react";
import Header from "../componentes/header";

export default function Listnota() {
  const [notas, setNotas] = useState([
    {
      id: 1,
      aluno: "Kelvin Destaque",
      t1: 8.5,
      t2: 9.0,
      n1: 7.5,
      n2: 8.0,
      n3: 9.5,
    },
  ]);

  // Estado para controlar a exibição do modal de cadastro
  const [showModal, setShowModal] = useState(false);

  // Estado do formulário
  const [formData, setFormData] = useState({
    aluno: "",
    t1: "",
    t2: "",
    n1: "",
    n2: "",
    n3: "",
  });

  // Função para remover uma nota
  const handleExcluir = (id) => {
    setNotas(notas.filter((item) => item.id !== id));
  };

  // Atualiza os dados do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para adicionar uma nova nota
  const handleAdicionar = (e) => {
    e.preventDefault();

    if (!formData.aluno) {
      alert("Por favor, preencha o nome do aluno.");
      return;
    }

    const novaNota = {
      id: notas.length > 0 ? Math.max(...notas.map((n) => n.id)) + 1 : 1,
      aluno: formData.aluno,
      t1: parseFloat(formData.t1) || 0,
      t2: parseFloat(formData.t2) || 0,
      n1: parseFloat(formData.n1) || 0,
      n2: parseFloat(formData.n2) || 0,
      n3: parseFloat(formData.n3) || 0,
    };

    setNotas([...notas, novaNota]);
    setFormData({ aluno: "", t1: "", t2: "", n1: "", n2: "", n3: "" });
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <div style={styles.card}>
          <div style={styles.headerTitle}>
            <div>
              <h2 style={styles.title}>Notas dos Alunos</h2>
              <span style={styles.badge}>{notas.length} Registros</span>
            </div>
            <button style={styles.btnAdd} onClick={() => setShowModal(true)}>
              + Adicionar Nota
            </button>
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
                  <th style={styles.th}>Ações</th>
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
                    <td style={styles.td}>
                      <button
                        style={styles.btnDelete}
                        onClick={() => handleExcluir(item.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal para Adicionar Notas */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalTitle}>Adicionar Notas</h3>
            <form onSubmit={handleAdicionar}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nome do Aluno:</label>
                <input
                  type="text"
                  name="aluno"
                  value={formData.aluno}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.gridScores}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>T1:</label>
                  <input
                    type="number"
                    step="0.1"
                    name="t1"
                    value={formData.t1}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>T2:</label>
                  <input
                    type="number"
                    step="0.1"
                    name="t2"
                    value={formData.t2}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>N1:</label>
                  <input
                    type="number"
                    step="0.1"
                    name="n1"
                    value={formData.n1}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>N2:</label>
                  <input
                    type="number"
                    step="0.1"
                    name="n2"
                    value={formData.n2}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>N3:</label>
                  <input
                    type="number"
                    step="0.1"
                    name="n3"
                    value={formData.n3}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>

              <div style={styles.modalActions}>
                <button
                  type="button"
                  style={styles.btnCancel}
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button type="submit" style={styles.btnSave}>
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
    display: "inline-block",
    marginTop: "5px",
  },
  btnAdd: {
    backgroundColor: "#d32f2f",
    color: "#ffffff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  btnDelete: {
    backgroundColor: "#d32f2f",
    color: "#ffffff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
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
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  modalTitle: {
    marginTop: 0,
    color: "#333",
    borderBottom: "2px solid #d32f2f",
    paddingBottom: "10px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#555",
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  gridScores: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
  },
  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "20px",
  },
  btnSave: {
    backgroundColor: "#2e7d32",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  btnCancel: {
    backgroundColor: "#757575",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};