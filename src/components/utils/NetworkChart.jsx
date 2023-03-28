import {ResponsiveNetwork} from '@nivo/network';

const data = {
    "nodes": [
      {
        "id": "Node 1",
        "height": 1,
        "size": 24,
        "label": "Java",
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 2",
        "height": 1,
        "size": 24,
        "label": "Python",
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 3",
        "height": 1,
        "label": "Python",
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 4",
        "height": 1,
        "label": "Python",
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 5",
        "height": 1,
        "label": "Python",
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 0",
        "height": 2,
        "size": 32,
        "label": "Python",
        "color": "rgb(244, 117, 96)"
      },
      {
        "id": "Node 1.0",
        "height": 0,
        "size": 12,
        "label": "Python",
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.1",
        "height": 0,
        "size": 12,
        "label": "Python",
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.2",
        "height": 0,
        "label": "Spring",
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      }
    ],
    "links": [
      {
        "source": "Node 0",
        "target": "Node 1",
        "distance": 80
      },
      {
        "source": "Node 1",
        "target": "Node 1.0",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.1",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.2",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.3",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.4",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.5",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.6",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 2",
        "distance": 80
      },
      {
        "source": "Node 2",
        "target": "Node 1",
        "distance": 80
      },
      {
        "source": "Node 2",
        "target": "Node 2.0",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.1",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.2",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 3",
        "distance": 80
      },
      {
        "source": "Node 3",
        "target": "Node 3.0",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.1",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.2",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.3",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.4",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.5",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.6",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.7",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.8",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 4",
        "distance": 80
      },
      {
        "source": "Node 4",
        "target": "Node 4.0",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.1",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.2",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.3",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 5",
        "distance": 80
      },
      {
        "source": "Node 5",
        "target": "Node 5.0",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.1",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.2",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.3",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.4",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.5",
        "distance": 50
      }
    ]
  };
  

  const NetworkChart = ({sizeFactor, linkFactor, repulsivity, linkWidth, actSizeFactor, nodeBorderWidth}) => {
    return (
      <ResponsiveNetwork
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={(e)=> e.distance*linkFactor}
      centeringStrength={1}
      repulsivity={repulsivity}
      nodeSize={(node)=> node.size*sizeFactor}
      activeNodeSize={(n)=> actSizeFactor*n.size}
      inactiveNodeSize={(n)=>n.size}
      nodeColor={(e)=> e.color}
      nodeBorderWidth={2}
      enableLabel={true}
      nodeBorderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  0.8
              ]
          ]
      }}
      linkThickness={(n)=>2+2*n.target.data.height}
      linkBlendMode="multiply"
      motionConfig="wobbly"
      linkWidth={linkWidth}
      iterations={50}
      nodeTooltip={( node ) => (
        <div style={{ backgroundColor: 'white', padding: '10px', color: 'black' }}>
          <div>{`Name: ${node.node.data.label}`}</div>
          <div>{`Size: ${node.size}`}</div>
        </div>
      )}
      />
    );
  }
  
  export default NetworkChart