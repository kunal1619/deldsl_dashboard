"use client"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import Link from 'next/link'



const navigation = [
  { name: 'Librenms', href: 'http://192.168.10.42/' },
  { name: 'Grafana', href: 'http://192.168.10.84:3000/d/yCkaWwJmz/alert_dashboard?refresh=10s&orgId=1'},
  { name: 'Kibana', href: 'http://192.168.10.84:5601/app/kibana#/home?_g=()' },
  { name: 'Backup server', href: 'http://192.168.10.44/cbackup/index.php?r=user%2Flogin' },
  { name: 'Prometheus', href: 'http://192.168.10.84:9090/graph' },
  { name: 'Height8', href: 'http://203.110.80.140/h8ssrms/Login.aspx' },
]

const Details = ()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (

    <div className="bg-white h-full">
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



      <div className="relative px-6 lg:px-8">
   
        <div className="mx-auto max-w-2xl py-8 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">

    <div className="wrapper">
        <h1> <span className='text-orange-400'>delDSL</span> Directory and Resources</h1>
        
             <div className="content-box">
             <Link href='/topology'>
             <div className="card cursor-pointer">
                    <i className="bx bx-bar-chart-alt bx-md"></i>
                    <h2>Network Topology</h2>

                </div>
             </Link>
                
                <Link href="#">
                <div className="card cursor-pointer">
                    <i className="bx bx-laptop bx-md"></i>
                    <h2>Airtel Transit</h2>
                         
                </div>
                </Link>
              
                <div className="card cursor-pointer">
                    <i className='bx bx-user bx-md'></i>

                    <h2>POP map</h2>
                         
                </div>
                <div className="card cursor-pointer">
                    <i className="bx bx-mail-send bx-md"></i>
                    <h2>Running VLAN</h2>
                  
                         
                </div>
                <Link href="/extensions">
                <div className="card cursor-pointer">
                    <i className="bx bx-bar-chart-alt bx-md"></i>
                    <h2>Phone Extensions</h2>        
                </div>
                </Link>
                
                <div className="card cursor-pointer">
                    <i className="bx bx-paint bx-md"></i>
                    <h2>Roaster</h2>
                  
                         
                </div>
             </div>
    </div>


                     </div>
         
        </div>


      </div>

    </div>

  )
}

export default Details;


