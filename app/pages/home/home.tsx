import { useNavigate } from "@remix-run/react";
import "../../root.css";
import FrameNav from "~/components/frame-nav";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full items-center bg-white">
      <FrameNav>
        <div className="flex h-full w-full justify-center rounded-md p-6">
          <div className="max-w-screen-xl px-4 py-8 text-black sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Acessos rápidos
              </h2>

              <p className="mt-4 text-gray-900">
                Segue a lista de acessos mais importantes do sistema
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div onClick={() => navigate("/chamados/add")} className="flex cursor-pointer items-start gap-4 rounded-lg p-2 transition-all hover:bg-slate-100">
                <span className="material-symbols-outlined shrink-0 rounded-lg bg-gray-200 p-3">
                  add
                </span>

                <div>
                  <h2 className="text-lg font-bold">Abrir um chamado</h2>

                  <p className="mt-1 text-sm text-gray-900">
                    Clique aqui para abrir um novo chamado. Isso permitirá que
                    você registre seu suporte técnico diretamente pelo sistema.
                  </p>
                </div>
              </div>

              <div  onClick={() => navigate("/chamados/aberto")} className="flex cursor-pointer items-start gap-4 rounded-lg p-2 transition-all hover:bg-slate-100">
                <span className="material-symbols-outlined shrink-0 rounded-lg bg-gray-200 p-3">
                  arrow_outward
                </span>

                <div>
                  <h2 className="text-lg font-bold">Ver chamados abertos</h2>

                  <p className="mt-1 text-sm text-gray-900">
                    Clique aqui para ver todos os chamados de suporte técnico
                    abertos, esperando por um técnico.
                  </p>
                </div>
              </div>

              <div  onClick={() => navigate("/chamados/andamento")} className="flex cursor-pointer items-start gap-4 rounded-lg p-2 transition-all hover:bg-slate-100">
                <span className="material-symbols-outlined shrink-0 rounded-lg bg-gray-200 p-3">
                  chronic
                </span>

                <div>
                  <h2 className="text-lg font-bold">
                    Ver chamados em andamento
                  </h2>

                  <p className="mt-1 text-sm text-gray-900">
                    Clique aqui para ver todos os chamados de suporte técnico em
                    andamento.
                  </p>
                </div>
              </div>

              <div onClick={() => navigate("/relatorios")} className="flex cursor-pointer items-start gap-4 rounded-lg p-2 transition-all hover:bg-slate-100">
                <span className="material-symbols-outlined shrink-0 rounded-lg bg-gray-200 p-3">
                  quick_reference
                </span>

                <div>
                  <h2 className="text-lg font-bold">Relatórios</h2>

                  <p className="mt-1 text-sm text-gray-900">
                    Clique aqui para ver e gerar relatórios de chamados
                    técnicos.
                  </p>
                </div>
              </div>

              <div onClick={() => navigate("/config")} className="flex cursor-pointer items-start gap-4 rounded-lg p-2 transition-all hover:bg-slate-100">
                <span className="material-symbols-outlined shrink-0 rounded-lg bg-gray-200 p-3">
                  settings
                </span>

                <div>
                  <h2 className="text-lg font-bold">Configurações da conta</h2>

                  <p className="mt-1 text-sm text-gray-900">
                    Clique aqui para alterar as configurações da sua conta, como
                    nome, email e senha.
                  </p>
                </div>
              </div>

              <div onClick={() => navigate("/tecnicos")} className="flex cursor-pointer items-start gap-4 rounded-lg p-2 transition-all hover:bg-slate-100">
                <span className="material-symbols-outlined shrink-0 rounded-lg bg-gray-200 p-3">
                  groups
                </span>

                <div>
                  <h2 className="text-lg font-bold">Lista de Técnicos</h2>

                  <p className="mt-1 text-sm text-gray-900">
                    Clique aqui para ver a lista de técnicos disponiveis e
                    ocupados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FrameNav>
    </div>
  );
}
