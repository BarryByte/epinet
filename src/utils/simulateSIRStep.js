export function simulateSIRStep(elements, states, beta, gamma) {
  const newStates = { ...states };

  // Extract nodes and edges
  const nodes = elements.filter(e => e.data.id && !e.data.source);
  const edges = elements.filter(e => e.data.source && e.data.target);

  for (const node of nodes) {
    const nodeId = node.data.id;
    if (states[nodeId] === 'I') {
      // Find neighbors
      const neighbors = edges
        .filter(e => e.data.source === nodeId || e.data.target === nodeId)
        .map(e => (e.data.source === nodeId ? e.data.target : e.data.source));

      // Try to infect neighbors
      neighbors.forEach(n => {
        if (states[n] === 'S' && Math.random() < beta) {
          newStates[n] = 'I';
        }
      });

      // Try to recover
      if (Math.random() < gamma) {
        newStates[nodeId] = 'R';
      }
    }
  }

  return newStates;
}
