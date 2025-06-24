export function generateRandomGraph(n, p) {
  const elements = [];
  for (let i = 0; i < n; i++) {
    elements.push({ data: { id: `${i}` } });
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.random() < p) {
        elements.push({ data: { source: `${i}`, target: `${j}` } });
      }
    }
  }
  return elements;
}

export function generateGridGraph(rows, cols) {
  const elements = [];
  const getId = (r, c) => `${r}-${c}`;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      elements.push({ data: { id: getId(r, c) } });
      if (r > 0) elements.push({ data: { source: getId(r, c), target: getId(r - 1, c) } });
      if (c > 0) elements.push({ data: { source: getId(r, c), target: getId(r, c - 1) } });
    }
  }
  return elements;
}

export function generateSmallWorldGraph(n, k, p) {
  const elements = [];
  for (let i = 0; i < n; i++) {
    elements.push({ data: { id: `${i}` } });
  }

  
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k / 2; j++) {
      const neighbor = (i + j) % n;
      elements.push({ data: { source: `${i}`, target: `${neighbor}` } });
    }
  }

 
  for (let i = 0; i < elements.length; i++) {
    const edge = elements[i];
    if (!edge.data.source || Math.random() > p) continue;
    const src = edge.data.source;
    let tgt;
    do {
      tgt = `${Math.floor(Math.random() * n)}`;
    } while (tgt === src || elements.find(e => e.data.source === src && e.data.target === tgt));
    edge.data.target = tgt;
  }

  return elements;
}
