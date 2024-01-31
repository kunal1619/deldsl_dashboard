"use client"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'




const navigation = [
  { name: 'Librenms', href: 'http://192.168.10.42/' },
  { name: 'Grafana', href: 'http://192.168.10.84:3000/d/yCkaWwJmz/alert_dashboard?refresh=10s&orgId=1'},
  { name: 'Kibana', href: 'http://192.168.10.84:5601/app/kibana#/home?_g=()' },
  { name: 'Backup server', href: 'http://192.168.10.44/cbackup/index.php?r=user%2Flogin' },
  { name: 'Prometheus', href: 'http://192.168.10.84:9090/graph' },
  { name: 'Height8', href: 'http://203.110.80.140/h8ssrms/Login.aspx' },
]

const airtel = ()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white bg-cover overflow-hidden min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">delDSL</span>
              <img
                className="h-14px w-auto"
                src="/logo.png"
                alt=""
              />
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
              <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-600 duration-150">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-amber-500">
              
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">delDSL</span>
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="delDSL"
                />
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
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
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
                <span className='text-amber-500'>Airtel</span> <span className='text-gray-600'>Escalation</span> 
              </h2>
              
            </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800">
                    Level - 0(7*24)
                </th>
                <th scope="col" className="px-6 py-3 text-xl bg-gray-50">
                    Level - 1(7*24)
                </th>
                <th scope="col" className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800">
                    Level - 2(7*24)
                </th>
                <th scope="col" className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800">
                    Level - 3(7*24)
                </th>
                <th scope="col" className="px-6 py-3 text-xl bg-gray-50 dark:bg-gray-800">
                    Level - 4(7*24)
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    0-1 hrs
                </th>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                0-2 hrs
                </td>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                2-4 hrs
                </td>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                4-8 hrs
                </td>
                <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                8 hrs ++
                </td>
                
            </tr>
            
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Support desk
                </th>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Service manager's
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Operation head's desk
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Service operation center head's desk
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Network operation center head's desk
                </td>
               
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  Toll free: 1800 102 001 <br></br>
                  Toll free: +91 1244609696
                </th>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: 8527812323
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                For Unmanaged services: 8448519148 <br></br>
                For managed services: 9667798080
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: 7042000229
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: 7303497037
                </td>
                
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  Email: enterprise.data@airtel.com
                </th>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Email: ice.manager@airtel.com
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                For Unmanaged services: head.isp@airtel.com <br></br>
                For managed services: dutymanager.mnoc@airtel.com
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: b2b.sochead@airtel.com
                </td>
                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                contact: noc.head@airtel.com
                </td>
                
            </tr>
          
        </tbody>
    </table>
</div>

    
      </div>
    </div>
  )
}

export default airtel;


