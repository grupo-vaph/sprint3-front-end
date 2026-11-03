import { useState } from 'react'

// controla o menu hamburguer do celular
export function useMenuMobile() {
  const [menuAberto, setMenuAberto] = useState(false)

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  function fecharMenu() {
    setMenuAberto(false)
  }

  return { menuAberto, alternarMenu, fecharMenu }
}
