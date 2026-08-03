import Link from "next/link";
import styles from "./header.module.css";

export default function Header(){
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <h1>Terceiro A</h1>
            </Link>
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="/" className={styles.navLink}>Home</Link></li>
                    <li><Link href="/sobre" className={styles.navLink}>Sobre</Link></li>
                    <li><Link href="/fotos" className={styles.navLink}>Fotos</Link></li>
                </ul>
            </nav>
        </header>
    )
}