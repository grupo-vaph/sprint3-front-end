export async function fazerLogin(username, password) {
  let resposta

  try {
    resposta = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
  } catch {
    throw new Error('Sem conexão com o servidor. Tente de novo.')
  }

  if (!resposta.ok) {
    throw new Error('Usuário ou senha inválidos.')
  }

  return resposta.json()
}

export async function buscarCapturas() {
  const resposta = await fetch('/api/capturas.json')

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar suas capturas.')
  }

  return resposta.json()
}