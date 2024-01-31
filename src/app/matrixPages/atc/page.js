"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const navigation = [
  { name: "Librenms", href: "http://192.168.10.42/" },
  {
    name: "Grafana",
    href: "http://192.168.10.84:3000/d/yCkaWwJmz/alert_dashboard?refresh=10s&orgId=1",
  },
  { name: "Kibana", href: "http://192.168.10.84:5601/app/kibana#/home?_g=()" },
  {
    name: "Backup server",
    href: "http://192.168.10.44/cbackup/index.php?r=user%2Flogin",
  },
  { name: "Prometheus", href: "http://192.168.10.84:9090/graph" },
  { name: "Height8", href: "http://203.110.80.140/h8ssrms/Login.aspx" },
];

const atc = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white bg-cover overflow-hidden min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">delDSL</span>
              <img className="h-14px w-auto" src="/logo.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-600 duration-150"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-amber-500"
            ></a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">delDSL</span>
                <img className="h-8 w-auto" src="/logo.png" alt="delDSL" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    under construction...
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8  h-screen flex items-center justify-center">
        <div
          className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* --------------------table----------------------- */}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Our Escalation matrixes
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              <span className="text-amber-500">ATC</span>{" "}
              <span className="text-gray-600">Escalation</span>
            </h2>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800"
                >
                  CI Gurgaon
                </th>
                <th scope="col" className="px-6 py-3 text-xl bg-gray-50">
                  O&M Lead
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800"
                >
                 Circle head
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800"
                >
                  Sales manager
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800"
                >
                  FE
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800"
                >
                  
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                 Sh mukesh luncha
                </th>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Sh Dhananjay Pandey
                </td>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Sh Dhananjay Pandey
                </td>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Sh Scahin Vinayak
                </td>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Sumit ATC
                </td>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Nalni Jayant Arora 
                </td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  contact: 9310292610
                </th>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: 9771490303
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: 9706046001
                </td>
                
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: 7777076658
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact:  9891344615
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: 9316031666
                </td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Email: Mukesh.Luhach@atctower.in
                </th>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Email: dhananjay.pandey@atctower.in
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Email: 	Chiranjit.Medhi@atctower.in
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Email: 	Sachin.Vinayak@atctower.in
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Email: 	Sachin.Vinayak@atctower.in
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Email: 	Sachin.Vinayak@atctower.in
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default atc;
