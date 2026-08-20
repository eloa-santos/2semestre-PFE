'use client';
import { useState } from "react";
import Header from "../componentes/header";

export default function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [result, setResult] = useState(null);
  const [expressao, setExpressao] = useState("");
  const [historico, setHistorico] = useState([]);

  function calcular(operador) {
    if (n1 === "" || n2 === "") return;

    const num1 = Number(n1);
    const num2 = Number(n2);
    let res = 0;
    let exp = `${num1} ${operador} ${num2}`;

    if (operador === "+") res = num1 + num2;
    if (operador === "-") res = num1 - num2;
    if (operador === "×") res = num1 * num2;
    if (operador === "÷") {
      if (num2 === 0) {
        res = "Erro (divisão por 0)";
      } else {
        res = num1 / num2;
      }
    }

    setExpressao(`${exp} =`);
    setResult(res);

    // Salva o cálculo no histórico
    setHistorico((prev) => [{ exp, res, id: Date.now() }, ...prev]);
  }

  function limpar() {
    setN1("");
    setN2("");
    setResult(null);
    setExpressao("");
  }

  function limparHistorico() {
    setHistorico([]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-slate-100 antialiased p-4">
      <Header />

      <main className="max-w-md mx-auto mt-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        <h1 className="text-xl font-semibold tracking-wide text-indigo-300 mb-6 text-center">
          Calculadora
        </h1>

        {/* Display do Resultado Principal */}
        <div className="mb-6 p-5 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col items-end justify-center min-h-[90px] shadow-inner">
          <span className="text-xs font-mono text-slate-400 min-h-[16px]">
            {expressao}
          </span>
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 break-all mt-1">
            {result !== null ? result : "0"}
          </span>
        </div>

        {/* Entradas */}
        <div className="space-y-4">
          <div>
            <label htmlFor="n1" className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">
              Primeiro número
            </label>
            <input
              id="n1"
              type="number"
              placeholder="0"
              value={n1}
              onChange={(e) => setN1(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/80 focus:border-indigo-500 transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="n2" className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">
              Segundo número
            </label>
            <input
              id="n2"
              type="number"
              placeholder="0"
              value={n2}
              onChange={(e) => setN2(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/80 focus:border-indigo-500 transition-all duration-200"
            />
          </div>

          {/* Botões de Operação */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => calcular("+")}
              className="py-3 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 transition-all"
            >
              + Somar
            </button>
            <button
              onClick={() => calcular("-")}
              className="py-3 px-4 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all"
            >
              - Subtrair
            </button>
            <button
              onClick={() => calcular("×")}
              className="py-3 px-4 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all"
            >
              × Multiplicar
            </button>
            <button
              onClick={() => calcular("÷")}
              className="py-3 px-4 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all"
            >
              ÷ Dividir
            </button>
          </div>

          <button
            onClick={limpar}
            className="w-full py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-medium text-sm rounded-xl border border-red-500/20 transition-all active:scale-98"
          >
            Limpar Campos
          </button>
        </div>

        {/* Histórico de Resultados */}
        {historico.length > 0 && (
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Histórico de Resultados
              </h2>
              <button
                onClick={limparHistorico}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                Limpar histórico
              </button>
            </div>
            <ul className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {historico.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-2.5 bg-slate-900/60 rounded-lg text-sm border border-slate-800/60"
                >
                  <span className="text-slate-400 font-mono">{item.exp}</span>
                  <span className="font-bold text-indigo-400">{item.res}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
    
  );
  <Estilos/>
}