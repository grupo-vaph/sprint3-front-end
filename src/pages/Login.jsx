import { Navigate } from 'react-router';
import joviIcon from '../assets/icons/jovi.svg';
import { useAuth } from '../hooks/useAuth';
import { useLogin } from '../hooks/useLogin';

function Login() {
  const { usuario } = useAuth();
  const { username, setUsername, password, setPassword, erro, carregando, handleSubmit } = useLogin();

  if (usuario) {
    return <Navigate to="/minhas-capturas" />
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-surface px-[5%] py-16">
      <div className="w-full max-w-md rounded-3xl border border-line bg-white p-6 shadow-lg sm:p-10">
        <div className="mb-6 flex items-center justify-center gap-2 font-display text-2xl font-bold text-primary">
          <img src={joviIcon} alt="Ícone JOVI" className="size-8" />
          JOVI AI
        </div>

        <h1 className="mb-2 text-center text-3xl">Área do Estudante</h1>
        <p className="mb-8 text-center text-muted">
          Entre para ver suas capturas organizadas pela IA do JOVI.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="mb-2 block font-medium text-muted">Usuário</label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-line px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block font-medium text-muted">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-line px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          {erro && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{erro}</p>}

          <button
            type="submit"
            disabled={carregando}
            className="w-full rounded-lg bg-primary py-3.5 font-semibold text-white transition-colors hover:bg-secondary disabled:opacity-60"
          >
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-6 rounded-lg border border-dashed border-primary/40 bg-primary/5 px-4 py-3 text-sm text-muted">
          <p className="font-semibold text-secondary">Usuário de teste</p>
          <p>
            Usuário: <strong className="text-ink">emilys</strong> | Senha:{' '}
            <strong className="text-ink">emilyspass</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;