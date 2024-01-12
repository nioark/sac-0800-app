import React from "react";
import { useLocation, useNavigate } from "@remix-run/react";


function LayerChamado(props : any){
    const location = useLocation();

    if (location.pathname.startsWith("/chamados")) {
        return (
        <div className="flex h-full w-48 select-none flex-col justify-between border-e bg-slate-100">
            <div className="px-4 py-4">
                <ul className="">
                    <h1 className="mb-2 border-b text-2xl font-bold text-gray-800">Chamados</h1>
                    <li>
                    <a
                        href="/chamados/adicionar"
                        className="mb-2 flex items-center rounded-lg bg-gray-200 px-2 py-2 text-sm font-bold text-gray-700"
                    >
                        <span className="material-symbols-outlined mr-2">
                            add
                        </span>
                        Adicionar
                    </a>
                    </li>
                    <li>
                    <a
                        href="/chamados/aberto"
                        className="mb-2 flex items-center rounded-lg bg-gray-200 px-2 py-2 text-sm font-bold text-gray-700"
                    >
                        <span className="material-symbols-outlined mr-2">
                            arrow_outward
                        </span>
                        Abertos
                    </a>
                    </li>
                    <li>
                    <a
                        href="/chamados/andamento"
                        className="flex items-center rounded-lg bg-gray-200 px-2 py-2 text-sm font-bold text-gray-700"
                    >
                        <span className="material-symbols-outlined mr-2">
                            chronic
                        </span>
                        Em Andamento
                    </a>
                    </li>

                </ul>
            </div>
        </div>
        )
    }
    
    return <></>
}

export default function FrameNav(props : any) {

  return (
    <>
        <div className="flex">

            <div className="flex h-screen w-16 flex-col justify-between bg-slate-900">
                <div>
                    <div className="inline-flex h-16 w-16 items-center justify-center">
                    <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                        L
                    </span>
                    </div>

                    <div className="border-t border-gray-100">
                        <div className="px-2">
                            <ul className="select-none space-y-1 border-gray-100 pt-4">


                            <li>
                                <a
                                href="/home"
                                className="group relative flex cursor-pointer justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-slate-700 hover:text-gray-400">
                                <span className="material-symbols-outlined">
                                    home
                                </span>

                                <span className="invisible absolute start-full top-1/2 z-10 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                    home
                                </span>
                                </a>
                            </li>

                            <li>
                                <a
                                className="group relative flex cursor-pointer justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-slate-700 hover:text-gray-400">
                                <span className="material-symbols-outlined">
                                    desktop_windows
                                </span>

                                <span className="invisible absolute start-full top-1/2 z-10 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                    Chamados
                                </span>
                                </a>
                            </li>

                            <li>
                                <a
                                href=""
                                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-slate-700 hover:text-gray-400">
                                <span className="material-symbols-outlined">
                                    description
                                </span>
                                <span className="invisible absolute start-full top-1/2 z-10 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                    Relatório
                                </span>
                                </a>
                            </li>

                            <li>
                                <a
                                href=""
                                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-slate-700 hover:text-gray-400">
                                <span className="material-symbols-outlined">
                                    account_circle
                                </span>

                                <span className="invisible absolute start-full top-1/2 z-10 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                    Conta
                                </span>
                                </a>
                            </li>

                            <li>
                                <a
                                href=""
                                className="group relative flex justify-center rounded py-1.5 text-gray-500 hover:bg-slate-700 hover:text-gray-400">
                                <span className="material-symbols-outlined">
                                    group
                                </span>

                                <span className="invisible absolute start-full top-1/2 z-10 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                    Técnicos
                                </span>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="sticky inset-x-0 bottom-0 bg-slate-900 p-2">
                    <form action="/logout">
                    <button
                        type="submit"
                        className="hover:text-red-400-700 group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-red-600 hover:bg-slate-700">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                        </svg>

                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        Logout
                        </span>
                    </button>
                    </form>
                </div>
            </div>


        </div>

        <div className="flex h-full w-full flex-col">

            <div className="flex h-12 w-full justify-end bg-slate-900 pr-4">

                
                
                <div className="flex h-full items-center justify-center">
                    <span className="me-3 flex h-3 w-3 rounded-full bg-yellow-300"></span>
                    2 Chamados Abertos
                </div>    

                <div className="flex h-full items-center justify-center pl-4">
                    <span className="me-3 flex h-3 w-3 rounded-full bg-green-500"></span>
                    3 Chamados Em Andamento
                </div>    

            </div>
            <div className="flex h-full w-full">

                <LayerChamado />
                <div className="flex flex-grow">
                    {props.children}
                </div>
            </div>

        </div>
    </>
  );
}
