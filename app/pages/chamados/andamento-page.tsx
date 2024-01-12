import FrameNav from "~/components/frame-nav";
import React from "react";

export default function ChamadosAndamento(){

    return (
        <div className="flex h-full w-full items-center bg-white">
            <FrameNav>
                
                <div className="flex h-full w-full flex-col justify-start rounded-md p-6">
                    {/* <div className="max-w-screen-xl px-4 py-8 text-black sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Lista de chamados
                            </h2>
                        </div>
                    </div> */}

                    <div className="max-w-screen-xl px-4 py-8 text-black sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div className="max-w-xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Chamados em andamento
                        </h2>

                        <p className="mt-4 text-gray-900">
                            Segue a lista de chamados em andamento.
                        </p>
                        </div>

                        <div className="mt-8 flow-root w-[600px] cursor-pointer rounded-md border-2 border-transparent bg-green-100 px-4 py-3 hover:border-2 hover:border-blue-500">
                            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Cliente</dt>
                                <dd className="text-gray-700 sm:col-span-2"> RIOFRÁS COMÉRCIO DE TRATORES IMPLEMENTOS LTDA</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Descrição</dt>
                                <dd className="text-red-700 sm:col-span-2">Outlook não funciona</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Técnico</dt>
                                <dd className="text-gray-700 sm:col-span-2">Jeferson</dd>
                                </div>
                            </dl>
                        </div>

                        
                    </div>

                   

                    <div className="w-full">
                        {/* <TableWithStripedRows /> */}
                    </div>
                </div>
            </FrameNav>
        </div>
    )
}