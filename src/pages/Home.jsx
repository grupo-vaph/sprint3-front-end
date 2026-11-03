import Contato from '../components/Contato'
import Equipe from '../components/Equipe'
import Galeria from '../components/Galeria'
import Hero from '../components/Hero'
import PublicoAlvo from '../components/PublicoAlvo'
import Solucao from '../components/Solucao'

function Home() {
  return (
    <>
      <Hero />
      <Solucao />
      <PublicoAlvo />
      <Galeria />
      <Equipe />
      <Contato />
    </>
  )
}

export default Home
