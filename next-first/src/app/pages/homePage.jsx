import Header from "../componentes/header";
import Footer from "../componentes/footer";
import Image from "next/image";
import Hotel from "../img/hotel.jpeg";

export default function HomePage(){
    return(
        <>
            <Header titulo='hotel Inn Terraço'/>
                <main>
                    <Image src={Hotel} width={800} height={400}/>
                    <h2>Bem vindo ao melhor hotel</h2>
                </main>
            <Footer/>
        </>
    )
}