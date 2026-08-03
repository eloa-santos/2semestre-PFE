import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Turma from "../img/terceiro.jpg";
import styles from "./home.module.css";

export default function HomePage(){
    return(
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <section className={styles.bannerSection}>
                    <Image 
                        src={Turma} 
                        alt="Foto da Turma do Terceiro A" 
                        className={styles.bannerImage}
                        priority
                    />
                </section>
                <section className={styles.infoSection}>
                    <h3 className={styles.title}>Informações</h3>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <h6 className={styles.cardTitle}>Formatura 18/12/2026</h6>
                            <p className={styles.cardText}>Todos estarão reunidos para viver esse momento especial em nossas vidas.</p>
                        </div>
                        <div className={styles.card}>
                            <h6 className={styles.cardTitle}>Próximo Trote 11/08/2026</h6>
                            <p className={styles.cardText}>Tema do trote: Personagens</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}