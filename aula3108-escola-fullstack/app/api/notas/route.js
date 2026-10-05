import db from "@/app/db/banco";
import { NextResponse } from "next/server";

export async function ListNotas() {
    const notas = db.prepare('SELECT notas.id, notas.t1, notas.t2, notas.n1, notas.n2, notas.n3, alunos.nome, alunos.ra * FROM notas INNER JOIN alunos ON notas.id_aluno = alunos.id_aluno ORDER BY alunos.nome ').all();
    return NextResponse.json(notas)
}

export async function SalvaNotas(request) {
    try{
        const dados = await request.json();
        const sql = db.prepare(`INSERT INTO notas (id_aluno, t1, t2, n1, n2, n3 ) VALUES (?,?,?,?,?,?)`);
        sql.run(dados.id_aluno, dados.t1, dados.t2, dados.n1, dados.n2, dados.n3)
        return NextResponse.json({
            mensagem: "Nota cadastrado com sucesso!"
        })
    }catch(error){
        console.error('Erro ao realizar o cadastro', error)
    }
}
export async function EditNotas(request) {
    try{
        const dados = await request.json();
        const sql = db.prepare(`UPDATE notas SET id_aluno = ?, t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ? WHERE id_nota = ?`);
        sql.run(dados.id_aluno, dados.t1, dados.t2, dados.n1, dados.n2, dados.n3)
        return NextResponse.json({
            mensagem: "Nota atualizada com sucesso!"
        })
    }catch(error){
        console.error('Erro ao realizar a alteração', error)
    }
}

export async function ExcluiNotas(request) {
    try{
        const dados = await request.json();
        const sql = db.prepare(`DELETE FROM notas WHERE id_nota = ?`);
        sql.run(dados.id_aluno)
        return NextResponse.json({
            mensagem: "Nota excluída com sucesso!"
        })
    }catch(error){
        console.error('Erro ao realizar a exclusão', error)
    }
}

