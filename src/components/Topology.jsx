import React from 'react';
import ReactFlow from 'reactflow';
 
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
function Topology() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>



  );
}

<<<<<<< HEAD
// export default Topology;
=======
export default Topology;
>>>>>>> 6b906fbbc382624ae9336065dcc4a880ca66c17e







