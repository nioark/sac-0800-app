import FrameNav from "~/components/frame-nav";

export default function ChamadosAdicionar() {
  return (
    <div className="flex h-full w-full items-center bg-white">
      <FrameNav>
        <div className="flex h-full w-full flex-col justify-start rounded-md p-6">
          <div className="max-w-screen-xl px-4 py-8 text-black sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Adicionar chamado
              </h2>

              <p className="mt-4 text-gray-900">Crie um novo chamado</p>
            </div>

            <form className="mt-8 w-[500px]">
              <label
                htmlFor="website-admin"
                className="text-md mb-2 block font-bold text-gray-700 dark:text-white">
                Cliente
              </label>
              <div className="flex">
                <span className="inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-[18px] text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="H.BREMER FILHOS E LTDA"
                />
              </div>

              <label
                htmlFor="website-admin"
                className="text-md mb-2 mt-2 block font-bold text-gray-700 dark:text-white">
                Descrição
              </label>
              <div className="flex">
                <span className="border-e-1 inline-flex w-[42px] items-center rounded-s-md border border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                  <span className="material-symbols-outlined text-[18px]">
                    dvr
                  </span>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Micro"
                />
              </div>

            <div className="mt-4 flex items-center">
              <input
                id="checkbox"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Deixar em aberto
              </label>
            </div>

              <button
                type="submit"
                className="text-md mt-4 w-32 rounded-lg bg-blue-700 px-5 py-3 font-bold text-white">
                Adicionar
              </button>
            </form>


          </div>

          {/* <section className="flex w-full items-center justify-center bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg border-2 border-gray-200 bg-white p-8 text-gray-800 shadow shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="w-96 space-y-4">
                <div className="rounded-xl border-2 border-gray-200">
                  <label className="sr-only" htmlFor="name">
                    Cliente
                  </label>
                  <input
                    className="w-full rounded-lg p-3 text-sm"
                    placeholder="Cliente"
                    type="text"
                    id="name"
                    required
                  />
                </div>

                <div className="rounded-xl border-2 border-gray-200">
                  <label className="sr-only" htmlFor="name">
                    Descrição
                  </label>
                  <input
                    className="w-full rounded-lg p-3 text-sm"
                    placeholder="Descrição"
                    type="text"
                    id="name"
                    required
                  />
                </div>   

                <div className="rounded-xl border-2 border-gray-200">
                  <label className="sr-only" htmlFor="message">
                    Comentário
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Comentário"
                    rows="8"
                    id="message"></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section> */}
        </div>
      </FrameNav>
    </div>
  );
}
