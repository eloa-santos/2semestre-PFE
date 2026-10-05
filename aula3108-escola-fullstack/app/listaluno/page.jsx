'use client';

import { useState } from "react";
import Header from "../componentes/header";

export default function Listaluno() {
  // Estado para armazenar a lista de alunos
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "Kelvin Destaque", idade: 18, serie: "3A", ra: "232300" },
    { id: 2, nome: "Ana Maria", idade: 17, serie: "2B", ra: "232301" },
    { id: 3, nome: "Carlos Eduardo", idade: 16, serie: "1C", ra: "232302" },
  ]);

  // Estados para a busca
  const [termoBusca, setTermoBusca] = useState("");
  const [buscaAplicada, setBuscaAplicada] = useState("");

  // Estado para controlar o aluno que está sendo editado
  const [alunoEditando, setAlunoEditando] = useState(null);

  // Função disparada ao clicar no botão de Pesquisar
  const handlePesquisar = (e) => {
    e?.preventDefault();
    if (termoBusca.trim().length >= 3) {
      setBuscaAplicada(termoBusca.trim());
    }
  };

  // Atualiza em tempo real se o usuário apagar o campo de busca
  const handleBuscaChange = (e) => {
    const valor = e.target.value;
    setTermoBusca(valor);
    if (valor.trim().length < 3) {
      setBuscaAplicada("");
    }
  };

  // Limpa a pesquisa
  const handleLimparBusca = () => {
    setTermoBusca("");
    setBuscaAplicada("");
  };

  // Filtra os alunos caso haja 3 ou mais caracteres pesquisados
  const alunosExibidos = buscaAplicada.length >= 3
    ? alunos.filter((aluno) =>
        aluno.nome.toLowerCase().includes(buscaAplicada.toLowerCase())
      )
    : alunos;

  // Função para excluir um aluno
  const handleExcluir = (id) => {
    if (confirm("Tem certeza que deseja excluir este aluno?")) {
      setAlunos(alunos.filter((aluno) => aluno.id !== id));
    }
  };

  // Função para abrir o modo de edição
  const handleIniciarEdicao = (aluno) => {
    setAlunoEditando({ ...aluno });
  };

  // Função para salvar a edição do aluno
  const handleSalvarEdicao = (e) => {
    e.preventDefault();
    setAlunos(
      alunos.map((aluno) =>
        aluno.id === alunoEditando.id ? alunoEditando : aluno
      )
    );
    setAlunoEditando(null); // Fecha o formulário de edição
  };

  // Atualiza os campos do aluno em edição
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlunoEditando({ ...alunoEditando, [name]: value });
  };

  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <div style={styles.card}>
          <div style={styles.headerTitle}>
            <h2 style={styles.title}>Lista de Alunos</h2>
            <span style={styles.badge}>{alunos.length} Alunos Cadastrados</span>
          </div>

          {/* Área de Pesquisa */}
          <form onSubmit={handlePesquisar} style={styles.searchBox}>
            <input
              type="text"
              placeholder="Digite ao menos 3 caracteres..."
              value={termoBusca}
              onChange={handleBuscaChange}
              style={styles.searchInput}
            />
            <button
              type="submit"
              style={styles.btnPesquisar}
              disabled={termoBusca.trim().length < 3}
            >
              Pesquisar
            </button>
            {buscaAplicada && (
              <button
                type="button"
                onClick={handleLimparBusca}
                style={styles.btnLimpar}
              >
                Limpar
              </button>
            )}
          </form>

          {/* Dica visual para quando houver menos de 3 caracteres */}
          {termoBusca.length > 0 && termoBusca.length < 3 && (
            <span style={styles.searchNotice}>
              * Digite pelo menos 3 caracteres para ativar o botão de pesquisa.
            </span>
          )}

          <div style={styles.tableResponsive}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.theadRow}>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Nome</th>
                  <th style={styles.th}>Idade</th>
                  <th style={styles.th}>Série</th>
                  <th style={styles.th}>RA</th>
                  <th style={styles.th}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {alunosExibidos.map((aluno, index) => (
                  <tr
                    key={aluno.id}
                    style={index % 2 === 0 ? styles.trEven : styles.trOdd}
                  >
                    <td style={styles.td}>{aluno.id}</td>
                    <td style={{ ...styles.td, fontWeight: "bold" }}>
                      {aluno.nome}
                    </td>
                    <td style={styles.td}>{aluno.idade} anos</td>
                    <td style={styles.td}>{aluno.serie}</td>
                    <td style={styles.td}>{aluno.ra}</td>
                    <td style={styles.tdActions}>
                      <button
                        style={styles.btnEditar}
                        onClick={() => handleIniciarEdicao(aluno)}
                      >
                        Editar
                      </button>
                      <button
                        style={styles.btnExcluir}
                        onClick={() => handleExcluir(aluno.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
                {alunosExibidos.length === 0 && (
                  <tr>
                    <td colSpan="6" style={styles.noData}>
                      Nenhum aluno encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Modal / Formulário Simples de Edição */}
          {alunoEditando && (
            <div style={styles.modalOverlay}>
              <div style={styles.modalContent}>
                <h3 style={{ marginTop: 0, color: "#333" }}>Editar Aluno</h3>
                <form onSubmit={handleSalvarEdicao} style={styles.form}>
                  <label style={styles.label}>
                    Nome:
                    <input
                      type="text"
                      name="nome"
                      value={alunoEditando.nome}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </label>
                  <label style={styles.label}>
                    Idade:
                    <input
                      type="number"
                      name="idade"
                      value={alunoEditando.idade}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </label>
                  <label style={styles.label}>
                    Série:
                    <input
                      type="text"
                      name="serie"
                      value={alunoEditando.serie}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </label>
                  <label style={styles.label}>
                    RA:
                    <input
                      type="text"
                      name="ra"
                      value={alunoEditando.ra}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </label>
                  <div style={styles.modalActions}>
                    <button
                      type="button"
                      onClick={() => setAlunoEditando(null)}
                      style={styles.btnCancelar}
                    >
                      Cancelar
                    </button>
                    <button type="submit" style={styles.btnSalvar}>
                      Salvar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
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
  searchBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  searchInput: {
    flex: 1,
    padding: "10px 14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "0.95rem",
    outline: "none",
  },
  btnPesquisar: {
    backgroundColor: "#d32f2f",
    color: "#ffffff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
  btnLimpar: {
    backgroundColor: "#757575",
    color: "#ffffff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  searchNotice: {
    display: "block",
    fontSize: "0.8rem",
    color: "#d32f2f",
    marginBottom: "15px",
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
  tdActions: {
    padding: "14px 16px",
    borderBottom: "1px solid #e0e0e0",
    display: "flex",
    gap: "8px",
  },
  trEven: {
    backgroundColor: "#ffffff",
  },
  trOdd: {
    backgroundColor: "#f9f9f9",
  },
  noData: {
    textAlign: "center",
    padding: "20px",
    color: "#777",
  },
  btnEditar: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.85rem",
  },
  btnExcluir: {
    backgroundColor: "#d32f2f",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.85rem",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.9rem",
    color: "#555",
    gap: "4px",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "0.95rem",
  },
  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "10px",
  },
  btnCancelar: {
    backgroundColor: "#9e9e9e",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  btnSalvar: {
    backgroundColor: "#2e7d32",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};