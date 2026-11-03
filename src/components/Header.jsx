import { Link } from 'react-router'
import joviIcon from '../assets/icons/jovi.svg'
import { useMenuMobile } from '../hooks/useMenuMobile'

const links = [
  { href: '/#solucao', texto: 'A Solução' },
  { href: '/#publico-alvo', texto: 'Público-Alvo' },
  { href: '/#galeria', texto: 'Galeria' },
  { href: '/#equipe', texto: 'Nossa Equipe' },
  { href: '/#contato', texto: 'Contato' },
]

function Header() {
  const { menuAberto, alternarMenu, fecharMenu } = useMenuMobile()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="flex h-20 items-center justify-between gap-6 px-[5%]">
        <div className="flex items-center gap-4">
          <Link
            to="/#comeco"
            onClick={fecharMenu}
            className="flex items-center gap-2 font-display text-2xl font-bold text-primary"
          >
            <img src={joviIcon} alt="Ícone JOVI" className="size-8" />
            JOVI AI
          </Link>
          <span className="hidden rounded-full border border-line bg-surface px-3 py-1 text-sm font-semibold text-muted sm:inline-block lg:hidden xl:inline-block">
            FIAP Challenge 2026
          </span>
        </div>

        
        <button
          onClick={alternarMenu}
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          className="flex flex-col gap-1.5 p-1 lg:hidden"
        >
          <span className={`h-[3px] w-7 rounded bg-secondary transition duration-300 ${menuAberto ? 'translate-y-[9px] rotate-45' : ''}`} />
          <span className={`h-[3px] w-7 rounded bg-secondary transition duration-300 ${menuAberto ? 'opacity-0' : ''}`} />
          <span className={`h-[3px] w-7 rounded bg-secondary transition duration-300 ${menuAberto ? '-translate-y-[9px] -rotate-45' : ''}`} />
        </button>

        <nav
          className={`absolute inset-x-0 top-20 flex flex-col items-center gap-6 border-b border-line bg-white py-10 shadow-md transition-all duration-400 lg:pointer-events-auto lg:static lg:translate-y-0 lg:flex-row lg:gap-8 lg:border-0 lg:py-0 lg:opacity-100 lg:shadow-none ${
            menuAberto ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-[150%] opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-6 lg:flex-row xl:gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={fecharMenu}
                  className="font-medium text-muted transition-colors hover:text-primary"
                >
                  {link.texto}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/minhas-capturas"
            onClick={fecharMenu}
            className="rounded-full bg-primary px-6 py-2.5 font-semibold whitespace-nowrap text-white transition-colors hover:bg-secondary"
          >
            Área do Estudante
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
