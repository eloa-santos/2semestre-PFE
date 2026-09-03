'use client';

import { useState } from "react";
import Header from "../componentes/header";

export default function Notaluno() {
  const [aluno, setAluno] = useState('');
  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Notas do aluno ${aluno} cadastradas com sucesso!`);
    setAluno('');
    setT1('');
    setT2('');
    setN1('');
    setN2('');
    setN3('');
  };

  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <div style={styles.card}>
          <h2 style={styles.title}>Cadastro de Notas</h2>
          <p style={styles.subtitle}>
            Informe o nome do aluno e as respectivas avaliações.
          </p>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="aluno" style={styles.label}>Aluno</label>
              <input
                type="text"
                id="aluno"
                placeholder="Ex: Kelvin Destaque"
                value={aluno}
                onChange={(e) => setAluno(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            {/* Seção de Trabalhos */}
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label htmlFor="t1" style={styles.label}>Trabalho 1 (T1)</label>
                <input
                  type="number"
                  id="t1"
                  step="0.1"
                  min="0"
                  max="10"
                  placeholder="0.0 a 10.0"
                  value={t1}
                  onChange={(e) => setT1(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="t2" style={styles.label}>Trabalho 2 (T2)</label>
                <input
                  type="number"
                  id="t2"
                  step="0.1"
                  min="0"
                  max="10"
                  placeholder="0.0 a 10.0"
                  value={t2}
                  onChange={(e) => setT2(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            {/* Seção de Provas / Notas */}
            <div style={styles.rowThree}>
              <div style={styles.inputGroup}>
                <label htmlFor="n1" style={styles.label}>Nota 1 (N1)</label>
                <input
                  type="number"
                  id="n1"
                  step="0.1"
                  min="0"
                  max="10"
                  placeholder="0.0 - 10.0"
                  value={n1}
                  onChange={(e) => setN1(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="n2" style={styles.label}>Nota 2 (N2)</label>
                <input
                  type="number"
                  id="n2"
                  step="0.1"
                  min="0"
                  max="10"
                  placeholder="0.0 - 10.0"
                  value={n2}
                  onChange={(e) => setN2(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="n3" style={styles.label}>Nota 3 (N3)</label>
                <input
                  type="number"
                  id="n3"
                  step="0.1"
                  min="0"
                  max="10"
                  placeholder="0.0 - 10.0"
                  value={n3}
                  onChange={(e) => setN3(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <button type="submit" style={styles.button}>
              Cadastrar Notas
            </button>
          </form>
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
    alignItems: "center",
    padding: "40px 20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px 40px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    width: "100%",
    maxWidth: "550px",
    borderTop: "5px solid #d32f2f",
  },
  title: {
    margin: "0 0 8px 0",
    color: "#333333",
    fontSize: "1.6rem",
    textAlign: "center",
  },
  subtitle: {
    margin: "0 0 25px 0",
    color: "#666666",
    fontSize: "0.9rem",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  row: {
    display: "flex",
    gap: "15px",
  },
  rowThree: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  label: {
    marginBottom: "6px",
    fontSize: "0.85rem",
    fontWeight: "bold",
    color: "#444444",
  },
  input: {
    padding: "10px 12px",
    fontSize: "0.95rem",
    borderRadius: "6px",
    border: "1px solid #cccccc",
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#d32f2f",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};