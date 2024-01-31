"use client"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react'




const navigation = [
  { name: 'Librenms', href: 'http://192.168.10.42/' },
  { name: 'Grafana', href: 'http://192.168.10.84:3000/d/yCkaWwJmz/alert_dashboard?refresh=10s&orgId=1'},
  { name: 'Kibana', href: 'http://192.168.10.84:5601/app/kibana#/home?_g=()' },
  { name: 'Backup server', href: 'http://192.168.10.44/cbackup/index.php?r=user%2Flogin' },
  { name: 'Prometheus', href: 'http://192.168.10.84:9090/graph' },
  { name: 'Height8', href: 'http://203.110.80.140/h8ssrms/Login.aspx' },
]

const ExtMatrix = ()=> {

  // const { fitView } = useZoomPanHelper();
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  


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
              <a key={item.name} href={item.href} target='_blank' className="target:_blank text-base font-semibold leading-6 text-gray-900 hover:text-gray-600 duration-150">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
               <span aria-hidden="true"></span>
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
                      target='_blank'
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
         
          <div className="text-center">
           {/* -----------------matrixes------------ */}
           <section className="pb-12 pt-10 dark:bg-dark lg:pb-[30px] lg:pt-[10px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Escalation matrixes
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                <span className='text-amber-500'>delDSL</span> <span className='text-gray-600'>alignment</span> 
              </h2>
              
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap ">

        <ServiceCard
            title="TATA"
            // details="Escalation matrix of Tata communication limited"
            icon={ 
            <img src='/matrix_pic/TCS_Logo.jpg' alt='logo'/>}
            site={'/matrixPages/tata'}
          />
      
          <ServiceCard
            title="Airtel"
            // details="Escalation matrix of Airtel"
            icon={
                <img src='/matrix_pic/airtel.webp' alt='logo' />
            }
            site={'/matrixPages/airtel'}
          />
          <ServiceCard
            title="Sterlite"
            // details="Escalation matrix of Sterlite"
            icon={
                <img src='/matrix_pic/Sterlite_Logo.jpg' alt='logo' />
            }
            site={'/matrixPages/Sterlite'}
          />
          <ServiceCard
            title="Ranext"
            // details="Escalation matrix of Ranext"
            icon={
                <img src='/matrix_pic/RANext-Logo.png' alt='logo' />
            }
            site={'/matrixPages/ranext'}
          />
          <ServiceCard
            title="Ishan (Indus link)"
            // details="Escalation matrix of Ishan(Indus link)"
            icon={
                <img src='/matrix_pic/ishan.webp' alt='logo' />
            }
            site={'/matrixPages/ishan'}
            
          />
          <ServiceCard
            title="ATC"
            // details="Escalation matrix of ATC"
            icon={
              <img src='/matrix_pic/atc.png' alt='logo' />
            }
            site={'/matrixPages/atc'}
          />
          <ServiceCard
            title="SIFY"
            // details="Escalation matrix of SIFY"
            icon={
              <img src='/matrix_pic/Sify.png' alt='logo' />
            }
            site={'/matrixPages/sify'}
          />
          <ServiceCard
            title="R2 NET"
            // details="Escalation matrix of R2 NET"
            icon={
              <img src='/matrix_pic/r2net-logo.jpg' alt='logo' />
            }
            site={'/matrixPages/r2net'}
          />
          <ServiceCard
            title="Extreme"
            // details="Escalation matrix of Extreme"
            icon={
              <img src='/matrix_pic/Extreme.jpg' alt='logo' />
            }
            site={'/matrixPages/extreme'}
          />
          <ServiceCard
            title="SS Omnia"
            // details="Escalation matrix of SS Omnia"
            icon={
              <img src='/matrix_pic/ss.png' alt='logo' />
            }
            site={'/matrixPages/ssomnia'}
          />
          <ServiceCard
            title="Offcom"
            // details="Escalation matrix of Offcom"
            icon={
              <img src='/matrix_pic/offcom.jpg' alt='logo' />
            }
            site={'/matrixPages/offcom'}
          />
          <ServiceCard
            title="Vodafone"
            // details="Escalation matrix of SS Vodafone"
            icon={
              <img src='/matrix_pic/voda.png' alt='logo' />
            }
            site={'/matrixPages/codafone'}
          />
          <ServiceCard
            title="Nextra"
            // details="Escalation matrix of SS Nextra"
            icon={
              <img src='/matrix_pic/nextra.jpg' alt='logo' />
            }
            site={'/matrixPages/nextra'}
          />
          <ServiceCard
            title="VSNL"
            // details="Escalation matrix of SS VSNL"
            icon={
              <img src='/matrix_pic/VSNL.jpg' alt='logo' />
            }
            site={'/matrixPages/vsnl'}
          />
          
        </div>
      </div>
    </section>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ExtMatrix;

// box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
const ServiceCard = ({ icon, title, details, site }) => {
    return (
      <>
      
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
        <Link href= {site}>
          <div className="mb-9 rounded-[20px] bg-white p-6 box_shadow hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10 cursor-pointer">
            <div className="mb-2 flex h-[100px] w-[100px] items-center justify-center rounded-2xl bg-primary mx-auto hover:scale-150 transform transition duration-30">
              {icon}
            </div>
            <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
              {title}
            </h4>
            <p className="text-body-color dark:text-dark-6">{details}</p>
          </div>
          </Link>
        </div>
        
      </>
    );
  };











