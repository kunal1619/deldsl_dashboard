"use client"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import 'reactflow/dist/style.css';
 



const navigation = [
  { name: 'Librenms', href: 'http://192.168.10.42/' },
  { name: 'Grafana', href: 'http://192.168.10.84:3000/d/yCkaWwJmz/alert_dashboard?refresh=10s&orgId=1'},
  { name: 'Kibana', href: 'http://192.168.10.84:5601/app/kibana#/home?_g=()' },
  { name: 'Backup server', href: 'http://192.168.10.44/cbackup/index.php?r=user%2Flogin' },
  { name: 'Prometheus', href: 'http://192.168.10.84:9090/graph' },
  { name: 'Height8', href: 'http://203.110.80.140/h8ssrms/Login.aspx' },
]

const Extensions = ()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div className="bg-white bg-cover  min-h-screen">
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
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
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
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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

        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-32">
         
          <div className="">
           {/* -----------------Extensions------------ */}

           {/* -----------------NOC team------------- */}

           
           <section className="container mx-auto p-6 font-mono">
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">Name (NOC team)</th>
            <th className="px-4 py-3">Extension</th>
            <th className="px-4 py-3">Mobile no.</th>

          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">Pradeep sharma</p>
                  {/* <p className="text-xs text-gray-600">Ast. manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">6013</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9910495862 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                <p className="font-semibold text-black">PN Singh</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">####</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> 9910495861 </span>
            </td>
        
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Ram Avatar Sharma</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">6003</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 9871759090 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Neeraj Saxena</p>
                  {/* <p className="text-xs text-gray-600">Programmer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6009</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9560452890 </span>
            </td>
   
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Amar Singh</p>
                  {/* <p className="text-xs text-gray-600">Designer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6001</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> 9910492672 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Mohit Malhotra</p>
                  {/* <p className="text-xs text-gray-600">Pen Tester</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6008</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 8802880201 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Rahul Tomar</p>
                  {/* <p className="text-xs text-gray-600">6002</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6002</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9999473861 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Jitendra Kumar</p>
                  {/* <p className="text-xs text-gray-600">Data</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6004</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 7065924251 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Helpdesk</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6000</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 7065308601</span>
            </td>
            
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Sachin Uriyat</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6005</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9876543210 </span>
            </td>
            
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Paramjeet Singh</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6007</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 7678954181 </span>
            </td>
            
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Sandeep Dwivedi</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6012</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9971481452 </span>
            </td>
            
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Himanshu Mathur</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6010</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9468522478 </span>
            </td>
            
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Kunal Singh</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6014</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9340639669 </span>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* ---------------------------------NOC team end ------------------------- */}

{/* --------------------------------------Sales and billing team start------------ */}

          
<section className="container mx-auto p-6 font-mono">
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">Name(Sales & billing team)</th>
            <th className="px-4 py-3">Extension</th>
            <th className="px-4 py-3">Mobile no.</th>

          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">Anand Ojha</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">6301</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9910495880 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                <p className="font-semibold text-black">Sumit Yadav</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">6309</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> 99114778259</span>
            </td>
        
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Farooq Mohamad</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">6310</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 9999039910 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Ram Swaroop</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">####</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 8368107770 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Kishant Kumar</p>
                  {/* <p className="text-xs text-gray-600">Programmer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6303</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9871433113 </span>
            </td>
   
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Mritunjay Shrivastava</p>
                  {/* <p className="text-xs text-gray-600">Designer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6307</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> 9717218844 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Arvind Yadav</p>
                  {/* <p className="text-xs text-gray-600">Pen Tester</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6312</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9716587232 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Vinit Kumar</p>
                  {/* <p className="text-xs text-gray-600">6010</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6311</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9266638105 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Shobhnath yadav</p>
                  {/* <p className="text-xs text-gray-600">Data</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6308</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9910655835 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Bidyadhar mishra</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6309</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9560950802 </span>
            </td>
            
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Pradeep Minj</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6309</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 8826715439 </span>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
{/* --------------------------------------Sales and billing team end------------ */}


{/* --------------------------------------Line staff start------------ */}

          
<section className="container mx-auto p-6 font-mono">
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">Name(Line staff and FE)</th>
            <th className="px-4 py-3">Extension</th>
            <th className="px-4 py-3">Mobile no.</th>

          </tr>
        </thead>
        <tbody className="bg-white">
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Mahinder Parihar</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6015</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9205589577 </span>
            </td>
            
          </tr>
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Rohit Kumar</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">####</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9205243234 </span>
            </td>
            
          </tr>
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Champalal Parihar</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">6011</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 8769309845 </span>
            </td>
            
          </tr>
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Mohit Sharma</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">####</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9982234116 </span>
            </td>
            
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">Mahipal Amit Sardana</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">####</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9212249490 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                <p className="font-semibold text-black">H-1 POP</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">####</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> 2705008</span>
            </td>
        
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Heritage School POP(Nitinpal)</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">2855124</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 8887593651 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">JMD Megapolish</p>
                  {/* <p className="text-xs text-gray-600">Manager</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">####</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> 2659000 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">VTC POP</p>
                  {/* <p className="text-xs text-gray-600">Programmer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">####</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 2666000 </span>
            </td>
   
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">VPP POP</p>
                  {/* <p className="text-xs text-gray-600">Designer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">####</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> 2821000 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">UV POP (Parsanand)</p>
                  {/* <p className="text-xs text-gray-600">Pen Tester</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">####</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 98109333136 </span>
            </td>
           
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Vinit Kumar</p>
                  {/* <p className="text-xs text-gray-600">6010</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">####</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9266638105 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Conscient One Mall(Rajnish - Guard)</p>
                  {/* <p className="text-xs text-gray-600">Data</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">####</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 7065690281 </span>
            </td>
          
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src="/profile.png" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold">Sunvision faculty Tollfree</p>
                  {/* <p className="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td className="px-4 py-3 border text-md font-semibold">####</td>
            <td className="px-4 py-3 border text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 9650184859 </span>
            </td>
            
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</section>
{/* --------------------------------------Sales and billing team end------------ */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Extensions;


