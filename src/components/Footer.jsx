import joviBrancoIcon from '../assets/icons/jovi-branco.svg'

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-night-deep py-10 text-[0.95rem] text-gray-400">
      <div className="flex flex-col items-center justify-between gap-6 px-[5%] text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2.5 text-lg text-white">
          <img src={joviBrancoIcon} alt="Ícone JOVI" className="size-6" />
          <strong>JOVI</strong>
        </div>

        <p>&copy; 2026 JOVI AI Camera - FIAP Challenge. All rights reserved.</p>

        <ul className="flex gap-7">
          <li>
            <a href="#privacidade" className="hover:text-white">Privacidade</a>
          </li>
          <li>
            <a href="#termos-de-uso" className="hover:text-white">Termos de Uso</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
