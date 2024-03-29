"use client"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import ReactFlow, {Controls, Background} from 'reactflow';
import 'reactflow/dist/style.css';



const navigation = [
  { name: 'Librenms', href: 'http://192.168.10.42/' },
  { name: 'Grafana', href: 'http://192.168.10.84:3000/d/yCkaWwJmz/alert_dashboard?refresh=10s&orgId=1'},
  { name: 'Kibana', href: 'http://192.168.10.84:5601/app/kibana#/home?_g=()' },
  { name: 'Backup server', href: 'http://192.168.10.44/cbackup/index.php?r=user%2Flogin' },
  { name: 'Prometheus', href: 'http://192.168.10.84:9090/graph' },
  { name: 'Height8', href: 'http://203.110.80.140/h8ssrms/Login.aspx' },
]

const Topology = ()=> {

  // const { fitView } = useZoomPanHelper();
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // default (bezier), straight , step and smoothstep
  const edges =  [
    { id: '2-1', source: '1', target: '2',label: "XGE0/0/1" , type: "step and smoothstep" , animated: true, style:{strokeWidth:3, stroke: '#ff8533'}},
    { id: '3-5', source: '3', target: '5',label: "XGE0/0/1" , type: "step and smoothstep" , animated: true, style:{strokeWidth:3, stroke: '#ff8533'}},
    { id: '4-6', source: '4', target: '6',label: "XGE0/0/4" , type: "step and smoothstep" , animated: true, style:{strokeWidth:3, stroke: '#ff8533'}},
    { id: '2-5', source: '2', target: '5',label: "XGE0/0/4(80.19) - XGE0/0/3(80.18)", type: "step", animated: true },
    { id: '5-6', source: '5', target: '6',label: "XGE0/0/4(80.19) - XGE0/0/3(80.20)",type: "step", animated: true },

    // --------------------------core routers-----------------------------

    { id: '7-9', source: '7', target: '9',label: "XGE0/1/2(80.11)" , type: "step and smoothstep" , animated: true, style:{strokeWidth:2, stroke: '#ff8533'}},
    { id: '8-9', source: '8', target: '9',label: "XGE0/1/1(80.11)" , type: "step and smoothstep" , animated: true, style:{strokeWidth:2, stroke: '#ff8533'}},
    { id: '9-10', source: '9', target: '10',label: "Xe0/0/1:0(10.80) - (80.11)sfp-plus 5" , type: "step" , animated: true},
    { id: '9-11', source: '9', target: '11',label: "Xe0/0/1:0(10.80) - (80.11)sfp-plus 5" , type: "step" , animated: true, style:{strokeWidth:1, stroke: '#330000'}},
    { id: '2-6', source: '2', target: '6',label: "Xe0/0/3(80.20) - XGE0/0/2(80.18)" , type: "step" , animated: true, style:{strokeWidth:1, stroke: '#330000'}},
    { id: '2-15', source: '2', target: '15',label: "Ge0/0/7(80.10) - GE0/0/1(80.18)" , type: "step" , animated: true, style:{strokeWidth:1, stroke: '#330000'}},
    { id: '2-15', source: '2', target: '15',label: "Ge0/0/7(80.10) - GE0/0/1(80.18)" , type: "step and smoothstep" , animated: true, style:{strokeWidth:1, stroke: '#330000'}},
    { id: '2-15', source: '2', target: '15',label: "Ge0/0/7(80.10) - GE0/0/1(80.18)" , type: "straight" , animated: true, style:{strokeWidth:1, stroke: '#330000'}},
    
  ];

  const initialNodes = [
    { id: '1', position: { x: 400, y: 0 }, data: { label: 'TATA MUX 1G AS4755' } , type: 'input'},
    { id: '2', position: { x: 70, y: 130 }, data: { label: 'Extreme Peering(Mill) 80.18 (Hybrid)'} },
    { id: '3', position: { x: 700, y: 0 }, data: { label: 'Extreme 3G (Sify) As49378'} },
    { id: '4', position: { x: 900, y: 0 }, data: { label: 'Google 2G (R2NET) As15169'} },
    { id: '5', position: { x: 500, y: 130 }, data: { label: 'Extreme Peering 80.19 (Sify)'} },
    { id: '6', position: { x: 900, y: 130 }, data: { label: 'Extreme Peering 80.20 (R2NET)'} },

    // --------------------------core routers-----------------------------
    { id: '7', position: { x: 0, y: 250 }, data: { label: 'Google 2G AS15169 (Tata P2P)' } },
    { id: '8', position: { x: 170, y: 250 }, data: { label: 'Airtel 1.5G AS9498'} },

    { id: '9', position: { x: 0, y: 400 }, data: { label: 'Juniper 80.11' } },
    { id: '10', position: { x: 350, y: 400 }, data: { label: '80.70 BRAS 10.80'} },
    { id: '11', position: { x: 570, y: 400 }, data: { label: '80.74 BRAS 80.80'} },
    { id: '12', position: { x: 780, y: 400 }, data: { label: '80.50 Router NE8000 80.15'} },
    { id: '13', position: { x: 980, y: 400 }, data: { label: '80.30 BRAS(IP) 10.70'} },
    { id: '14', position: { x: 1180, y: 400 }, data: { label: 'CORE 80.9'} }, 
    { id: '15', position: { x: 1370, y: 400 }, data: { label: 'CORE 80.10'} }, 
    
  ];
  // const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];


  return (
    <div className="bg-white bg-cover overflow-hidden h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
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
              <a key={item.name} href={item.href} target='_blank' className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-600 duration-150">
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
           {/* -----------------topology------------ */}
          <div className='h-screen '>

      <ReactFlow 
        nodes={initialNodes} 
        edges={edges}  
        elementsSelectable={false}
        nodesConnectable={false}
        nodesDraggable={false}
        snapToGrid={true}
        panOnScroll={true}
        paneMoveable={false}>
      <Background variant="dots" gap={16} size={2} color="#dddddd" />
      <Controls className="react-flow_controls" showInteractive={false} />
      </ReactFlow>

      <ReactFlow nodes={initialNodes} edges={initialEdges} />

    </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Topology;










