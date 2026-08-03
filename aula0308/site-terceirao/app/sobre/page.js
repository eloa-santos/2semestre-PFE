import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.content}>
                
                {/* Cabeçalho da Página */}
                <div className={styles.sobreHeader}>
                    <h2>Nossa História</h2>
                    <p className={styles.subTitle}>3º Ano A - SESI Mirandópolis</p>
                </div>

                {/* Descrição Principal */}
                <section className={styles.storySection}>
                    <p>
                        Somos a turma do 3º Ano A da escola SESI de Mirandópolis. Ao longo de nossa jornada, 
                        construímos não apenas aprendizado acadêmico, mas também laços de amizade, trabalho 
                        em equipe e memórias inesquecíveis. Esta página é dedicada a registrar nossa trajetória 
                        e celebrar nosso último ano do Ensino Médio juntos rumo à formatura!
                    </p>
                </section>

                {/* Métricas / Estatísticas da Turma */}
                <section className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>3</span>
                        <span className={styles.statLabel}>Anos Juntos</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>União & Parceria</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>2026</span>
                        <span className={styles.statLabel}>Ano de Formatura</span>
                    </div>
                </section>

                {/* Cards de Destaques / Pilares da Turma */}
                <section className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <h4>🎓 Foco no Futuro</h4>
                        <p>
                            Dedicação nos estudos, vestibulares e na preparação para o mercado de trabalho 
                            e os próximos passos de nossas carreiras.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h4>🎉 Tradição & Trotes</h4>
                        <p>
                            Momentos de descompressão, criatividade e diversão com nossos trotes temáticos 
                            mensais marcando a reta final da escola.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h4>🤝 Espírito de Equipe</h4>
                        <p>
                            Uma turma unida dentro e fora das salas de aula, apoiando uns aos outros nas 
                            provas, projetos e eventos escolares.
                        </p>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}