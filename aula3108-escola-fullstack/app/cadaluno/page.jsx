'use client';
import { useState } from "react";
import Header from "../componentes/header";

export default function Cadaluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [serie, setSerie] = useState('');
  const [ra, setRa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Aluno ${nome} cadastrado com sucesso!`);
    setNome('');
    setIdade('');
    setSerie('');
    setRa('');
  };



  async function cadastrarAluno(evento) {
      evento.preventDefault();
      const resposta = await fetch("/api/alunos", {
        method: "POST", 
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          nome, 
          idade,
          serie,
          ra
        })
      })
      const dados = await resposta.json();
      alert(dados.mensagem || dados.erro);
      if(resposta.ok){
        setNome("")
        setIdade("")
        setSerie("")
        setRa("")
      }
    }



  return (
    <div style={styles.container}>
      <Header />
      
      <main style={styles.main}>
        <div style={styles.card}>
          <h2 style={styles.title}>Cadastro de Alunos</h2>
          <p style={styles.subtitle}>Preencha os dados do aluno para efetuar o registro.</p>

          <form onSubmit={cadastrarAluno} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="nome" style={styles.label}>Nome Completo</label>
              <input 
                id="nome"
                type="text" 
                value={nome} 
                placeholder="Ex: João Silva"
                onChange={(e) => setNome(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label htmlFor="idade" style={styles.label}>Idade</label>
                <input 
                  id="idade"
                  type="number" 
                  value={idade} 
                  placeholder="Ex: 15"
                  onChange={(e) => setIdade(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="serie" style={styles.label}>Série / Turma</label>
                <input 
                  id="serie"
                  type="text" 
                  value={serie} 
                  placeholder="Ex: 1º Ano EM"
                  onChange={(e) => setSerie(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="ra" style={styles.label}>RA (Registro Aluno)</label>
              <input 
                id="ra"
                type="number" 
                value={ra} 
                placeholder="Ex: 123456"
                onChange={(e) => setRa(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <button type="submit" style={styles.button}>Cadastrar Aluno</button>
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
    maxWidth: "500px",
    borderTop: "5px solid #d32f2f", // Detalhe vermelho
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