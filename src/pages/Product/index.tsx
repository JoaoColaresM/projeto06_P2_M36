import { useParams } from "react-router-dom"
import Hero from "../../components/Hero"
import Section from "../../components/Section"
import Galley from "../../components/Gallery"

const Product = () => {
    const {id} = useParams()

    return (
      <>
        <Hero/>
        <Section title="Sobre o jogo" background="black">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eum dolores veniam voluptas consectetur placeat.
            Deleniti voluptatum non repudiandae laudantium, quidem dignissimos harum maiores delectus, rem unde ipsa porro eos odio.
          </p>
        </Section>
        <Section title="Mais detalhes" background="gray">
          <p>
            <b>Plataforma</b>: PlayStation 5<br/>
            <b>Desenvolvedor:</b> Avargrg egerbe<br/>
            <b>Editora:</b> jrgejbgkjbejvbejnejvnejvnejke<br/>
            <b>Idiomas:</b> jgkwjbkjvkjv kjv sfjkv kjv kjvs jv <br/>        </p>
        </Section>
        <Galley/>
      </>
    )
}

export default Product