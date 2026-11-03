import CapturaCard from '../components/CapturaCard';
import { useAuth } from '../hooks/useAuth';
import { useCapturas } from '../hooks/useCapturas';

const filtros = [
  { id: 'todas', nome: 'Todas' },
  { id: 'estudo', nome: 'Estudos' },
  { id: 'trabalho', nome: 'Trabalho' },
  { id: 'financeiro', nome: 'Financeiro' },
];

function MinhasCapturas() {
  const { usuario, logout } = useAuth();
  const { capturas, total, carregando, erro, tentarDeNovo, pasta, setPasta, busca, setBusca } = useCapturas();

  return (
    <section className="min-h-[80vh] bg-surface px-[5%] py-12 md:py-16">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <img src={usuario.image} alt="" className="size-14 rounded-full border border-line bg-white" />
          <div>
            <p className="text-muted">Olá, {usuario.firstName}!</p>
            <h1 className="text-3xl">Minhas Capturas</h1>
          </div>
        </div>

        <button
          onClick={logout}
          className="self-start rounded-lg border border-line bg-white px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary sm:self-auto"
        >
          Sair
        </button>
      </div>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setPasta(filtro.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                pasta === filtro.id
                  ? 'border-primary bg-primary text-white'
                  : 'border-line bg-white text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {filtro.nome}
            </button>
          ))}
        </div>

        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar no texto extraído..."
          className="w-full rounded-lg border border-line bg-white px-4 py-2.5 outline-none focus:border-primary lg:max-w-xs"
        />
      </div>

      {carregando && <p className="py-10 text-center text-muted">Carregando suas capturas...</p>}

      {erro && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
          <p className="mb-4 font-medium text-red-700">{erro}</p>
          <button onClick={tentarDeNovo} className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-secondary">
            Tentar de novo
          </button>
        </div>
      )}

      {!carregando && !erro && (
        <>
          <p className="mb-4 text-sm text-muted">
            Mostrando {capturas.length} de {total} capturas
          </p>

          {capturas.length === 0 ? (
            <p className="rounded-xl border border-dashed border-line bg-white p-10 text-center text-muted">
              Nenhuma captura encontrada.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {capturas.map((captura) => (
                <CapturaCard key={captura.id} {...captura} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MinhasCapturas;