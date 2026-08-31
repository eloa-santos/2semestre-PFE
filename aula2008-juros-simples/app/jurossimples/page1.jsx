'use client';
import { useState } from "react";
import "./juros.css";

export default function JurosCompostos() {
  const [capital, setCapital] = useState("");
  const [txJuros, setTxJuros] = useState("");
  const [tempo, setTempo] = useState("");
  const [result, setResult] = useState(null);

  const calcularJuros = (e) => {
    e.preventDefault();

    const cap = parseFloat(capital) || 0;
    const tax = (parseFloat(txJuros) || 0) / 100;
    const temp = parseFloat(tempo) || 0;

    // Fórmula dos Juros Compostos: M = C * (1 + i)^t
    const montante = cap * Math.pow(1 + tax, temp);
    const juros = montante - cap;

    setResult({
      juros: juros.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      montante: montante.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    });
  };

  return (
    <div className="calc-container">
      <form className="calc-card" onSubmit={calcularJuros}>
        <h2>Calculadora de Juros Compostos</h2>

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
          <label htmlFor="tempo">Tempo (períodos)</label>
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

        <button type="submit">Calcular Juros Compostos</button>

        {result && (
          <div className="result-container">
            <div className="result-row">
              <span>Juros acumulados:</span>
              <strong>R$ {result.juros}</strong>
            </div>
            <div className="result-row total">
              <span>Montante Total:</span>
              <strong>R$ {result.montante}</strong>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}