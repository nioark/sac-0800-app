import FrameNav from "~/components/frame-nav";
import React from "react";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
 
function TableWithStripedRows() {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl text-gray-800">
      <table className="w-full min-w-max table-auto text-left shadow">
        <thead className="bg-slate-200">
          <tr >
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                <h1
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </h1>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <p  color="blue-gray" className="font-normal">
                  {name}
                </p>
              </td>
              <td className="p-4">
                <p  color="blue-gray" className="font-normal">
                  {job}
                </p>
              </td>
              <td className="p-4">
                <p  color="blue-gray" className="font-normal">
                  {date}
                </p>
              </td>
              <td className="p-4">
                <p color="blue-gray" className="font-medium">
                  Edit
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ChamadosAberto(){

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
                            Chamados em aberto
                        </h2>

                        <p className="mt-4 text-gray-900">
                            Segue a lista de chamados esperando por um técnico
                        </p>
                        </div>

                        <div className="mt-8 flow-root w-[600px] cursor-pointer rounded-md border-2 border-transparent bg-yellow-100 px-4 py-3 hover:border-2 hover:border-blue-500">
                            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Cliente</dt>
                                <dd className="text-gray-700 sm:col-span-2">H.BREMER E FILHOS LTDA</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Descrição</dt>
                                <dd className="text-red-700 sm:col-span-2">Outlook não funciona</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Aberto por</dt>
                                <dd className="text-red-700 sm:col-span-2">Jeferson</dd>
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