# JOVI AI - A Câmera que Pensa com Você

Projeto do FIAP Challenge 2026 feito pelo Grupo VAPH. O JOVI é uma câmera com IA que reconhece o que você está fotografando (documento, lousa ou recibo), extrai o texto e organiza a foto na pasta certa.

Na Sprint 4 a landing page da Sprint 03 foi passada de HTML, CSS e JavaScript para **React + Tailwind CSS**, e ganhou login, uma área privada do estudante e consumo de API.

## Links

- Deploy na Vercel: 
- Repositório: https://github.com/grupo-vaph/sprint3-front-end

## Tecnologias utilizadas

- React 19 + Vite
- React Router (rotas públicas e privada)
- Tailwind CSS 4
- Hooks do React: useState, useEffect, useContext, useMemo e useRef
- Hooks customizados: useMenuMobile, useGaleria, useContactForm, useScrollToHash, useAuth, useLogin e useCapturas
- Context API para o login
- API DummyJSON (API pública) para o login
- API mockada com as capturas (`public/api/capturas.json`)
- Oxlint (verificação do código)
- Git, GitHub e Vercel

## Como instalar as dependências

Precisa ter o [Node.js](https://nodejs.org) instalado, na versão 20.19 ou mais nova (dá para ver com `node -v`).

```bash
git clone https://github.com/grupo-vaph/sprint3-front-end.git
cd sprint3-front-end
npm install
```

Se estiver usando o .ZIP da entrega, é só extrair, abrir o terminal dentro da pasta e rodar `npm install`.

## Como executar o projeto

```bash
npm run dev
```

Depois é só abrir http://localhost:5173 no navegador.

Outros comandos:

- `npm run build`: gera a versão de produção na pasta `dist`
- `npm run preview`: abre a versão de produção em http://localhost:4173
- `npm run lint`: verifica o código com o Oxlint

## Servidores / back-end

O projeto não tem back-end próprio, então não precisa rodar nenhum servidor além do `npm run dev`.

- O login é feito na API pública DummyJSON (`https://dummyjson.com/auth/login`), então precisa de internet.
- As capturas da área do estudante vêm do arquivo `public/api/capturas.json`, que funciona como uma API mockada servida pelo próprio Vite (e pela Vercel no deploy).

## Usuário e senha para teste

- **Usuário:** emilys
- **Senha:** emilyspass

Para testar: clique em **Área do Estudante** no menu, faça o login e você vai para a página **Minhas Capturas**. Se clicar em **Sair** e tentar abrir `/minhas-capturas`, o site manda de volta para o login.

## Rotas

| Rota | Tipo | O que tem |
| --- | --- | --- |
| `/` | Pública | Landing page (Hero, Solução, Público-Alvo, Galeria, Equipe e Contato) |
| `/login` | Pública | Login da área do estudante |
| `/minhas-capturas` | Privada | Capturas organizadas pela IA, com filtro por pasta e busca |
| qualquer outra | Pública | Página 404 |

## O que mudou da Sprint 03 para a Sprint 4

- A página foi dividida em componentes React, usando props (SectionTitle, StatCard, MembroCard, Input, CapturaCard)
- O CSS foi trocado por Tailwind CSS, mantendo as mesmas cores, fontes e layout
- O JavaScript da galeria e do formulário virou hooks customizados
- O menu hambúrguer do celular agora funciona (na Sprint 03 o botão não existia no HTML)
- O formulário de contato mostra o erro de cada campo
- Login com a API DummyJSON e área privada "Minhas Capturas" consumindo a API mockada
- Página 404

## Estrutura de pastas

```
public/
  api/capturas.json     -> API mockada
src/
  assets/               -> ícones e imagens
  components/           -> componentes (Header, Footer, seções, cards, PrivateRoute)
  context/              -> contexto do login
  hooks/                -> hooks customizados
  pages/                -> páginas de cada rota
  services/api.js       -> chamadas para as APIs
  App.jsx               -> rotas
  main.jsx
  index.css             -> Tailwind e cores do projeto
```

## Uso de IA no projeto

Usamos o Claude como apoio nesta sprint. Ele ajudou a planejar como passar o projeto de HTML/CSS para React com Tailwind, a separar a lógica em hooks customizados, a montar o login com a rota privada, a criar os dados da API mockada de capturas e a escrever este README. Nós do grupo revisamos e testamos o código e fizemos os commits, e o conteúdo, o visual e a ideia do JOVI continuam sendo os que a equipe criou nas sprints anteriores.

## Integrantes

- Enzo Gabriel Pereira - RM 570659
- Pedro Henrique Moura Aguiar - RM 570715
- Victor Ulisses de Morais Silva - RM 572634
- Henrique Giusti de Souza - RM 570766
- Pietro Alexandre Guerato - RM 571232
