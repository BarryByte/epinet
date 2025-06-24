import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

function GraphCanvas({ graphElements, nodeStates }) {
    const cyRef = useRef(null);
    const containerRef = useRef(null);
    const initializedRef = useRef(false); // track if cytoscape is already initialized

    useEffect(() => {
        if (!initializedRef.current && containerRef.current && graphElements.length > 0) {
            cyRef.current = cytoscape({
                container: containerRef.current,
                elements: graphElements,
                style: [
                    {
                        selector: 'node',
                        style: {
                            label: 'data(id)',
                            'background-color': '#39FF14',
                            color: 'white',
                            'text-outline-width': 1,
                            'text-outline-color': '#000',
                            'font-size': 12,
                        },
                    },
                    {
                        selector: 'edge',
                        style: {
                            width: 2,
                            lineColor: '#888',
                            targetArrowShape: 'none',       
                            sourceArrowShape: 'none',       
                            curveStyle: 'bezier',           
                            'overlay-padding': '6px',
                            'z-index': 2
                        }
                    },
                ],
                layout: { name: 'cose', animate: true },
            });

            initializedRef.current = true;
        }
    }, [graphElements]);

    useEffect(() => {
        if (!cyRef.current) return;

        cyRef.current.nodes().forEach(node => {
            const state = nodeStates[node.id()];
            if (state === 'S') node.style('background-color', '#39FF14');    // Neon Green
            else if (state === 'I') node.style('background-color', '#FF073A'); // Red
            else if (state === 'R') node.style('background-color', '#B026FF'); // Purple
        });
    }, [nodeStates]);

    return (
        <div
            ref={containerRef}
            className="w-full h-[500px] rounded-lg border border-[var(--neon-purple)] shadow-[0_0_10px_var(--neon-purple)]"
        />
    );
}

export default GraphCanvas;
