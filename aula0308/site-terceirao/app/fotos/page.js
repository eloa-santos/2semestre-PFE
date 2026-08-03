import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./fotos.module.css";

// Importe suas imagens aqui (certifique-se de adicioná-las na pasta /img)
import Foto1 from "../img/terceiro.jpg";
// import Foto2 from "../img/trote.jpg";
// import Foto3 from "../img/passeio.jpg";

export default function Fotos() {
    // Array fictício de dados das fotos (substitua ou adicione suas imagens)
    const fotosList = [
        { id: 1, src: Foto1, alt: "Foto da Turma 3A", legenda: "Nossa Turma - 2026" },
        { id: 2, src: Foto1, alt: "Dia do Trote", legenda: "Trote dos Personagens" },
        { id: 3, src: Foto1, alt: "Evento no Sesi", legenda: "Feira Cultural Sesi" },
        { id: 4, src: Foto1, alt: "Momentos da Galera", legenda: "Intervalo Descontraído" },
    ];

    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.content}>
                <p>Galeria de Fotos do 3º A</p>
                
                <div className={styles.galleryGrid}>
                    {fotosList.map((item) => (
                        <div key={item.id} className={styles.photoCard}>
                            <div className={styles.imageWrapper}>
                                <Image 
                                    src={item.src} 
                                    alt={item.alt} 
                                    fill
                                    className={styles.photo}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.caption}>
                                {item.legenda}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}