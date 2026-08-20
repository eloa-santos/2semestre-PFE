
'use client';
import { useState } from "react";
import "./jurossimples.css";

export default function JurosSimples() {
  const [capital, setCapital] = useState("");
  const [txJuros, setTxJuros] = useState("");
  const [tempo, setTempo] = useState("");
  const [result, setResult] = useState(null);

  const calcularJuros = (e) => {
    e.preventDefault();

    const cap = parseFloat(capital) || 0;
    const tax = (parseFloat(txJuros) || 0) / 100;
    const temp = parseFloat(tempo) || 0;

    const juros = cap * tax * temp;
    const montante = cap + juros;

    setResult({
      juros: juros.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      montante: montante.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    });
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h2 className="calculator-title">Calculadora de Juros Simples</h2>
        
        <form onSubmit={calcularJuros} className="calculator-form">
          <div className="input-group">
            <label htmlFor="capital">Capital Inicial (R$)</label>
            <input
              id="capital"
              type="number"
              step="any"
              placeholder="Ex: 1000"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="txJuros">Taxa de Juros (%)</label>
            <input
              id="txJuros"
              type="number"
              step="any"
              placeholder="Ex: 5"
              value={txJuros}
              onChange={(e) => setTxJuros(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="tempo">Tempo (período)</label>
            <input
              id="tempo"
              type="number"
              step="any"
              placeholder="Ex: 12"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Calcular
          </button>
        </form>

        {result && (
          <div className="result-card">
            <div className="result-item">
              <span className="result-label">Juros Rendidos:</span>
              <span className="result-value">R$ {result.juros}</span>
            </div>
            <div className="result-item total">
              <span className="result-label">Montante Total:</span>
              <span className="result-value">R$ {result.montante}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}