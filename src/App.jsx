import React, { useState, useEffect } from 'react';
import GraphCanvas from './components/GraphCanvas';
import ControlsPanel from './components/ControlsPanel';
import StatsChart from './components/StatsChart';
import SimulationInfo from './components/SimulationInfo';
import { simulateSIRStep } from './utils/simulateSIRStep';
import { generateRandomGraph } from './utils/generateGraph';

function App() {
  const [elements, setElements] = useState([]);
  const [nodeStates, setNodeStates] = useState({});
  const [beta, setBeta] = useState(0.3);
  const [gamma, setGamma] = useState(0.1);
  const [speed, setSpeed] = useState(30);

  const [step, setStep] = useState(0);
  const [duration, setDuration] = useState(0);
  const [peakInfected, setPeakInfected] = useState(0);
  const [chartData, setChartData] = useState([]);

  const handleReset = () => {
    setStep(0);
    setDuration(0);
    setPeakInfected(0);
    setChartData([]);

    const el = generateRandomGraph(20, 0.1);
    setElements(el);

    const initialStates = {};
    el.forEach(e => {
      if (e.data.id) initialStates[e.data.id] = 'S';
    });

    const keys = Object.keys(initialStates);
    if (keys.length > 0) {
      initialStates[keys[Math.floor(Math.random() * keys.length)]] = 'I';
    }

    setNodeStates(initialStates);
  };

  useEffect(() => {
    handleReset();
  }, []);

  const handleStep = () => {
    setNodeStates(prevStates => {
      const newStates = simulateSIRStep(elements, prevStates, beta, gamma);

      const infected = Object.values(newStates).filter(s => s === 'I').length;
      const recovered = Object.values(newStates).filter(s => s === 'R').length;
      const susceptible = Object.values(newStates).filter(s => s === 'S').length;

      setStep(prev => prev + 1);
      setDuration(prev => prev + 1);
      setPeakInfected(prev => Math.max(prev, infected));

      setChartData(prev => [
        ...prev,
        { step: prev.length, S: susceptible, I: infected, R: recovered }
      ]);

      return newStates;
    });
  };

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: 'var(--background)' }}>
      <h1 className="text-3xl font-bold text-center mb-4 text-[var(--neon-green)]">
        🦠 EpiNet: Epidemic Spread Simulator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-4 rounded-xl border border-[var(--neon-green)] shadow-[0_0_20px_var(--neon-green)]">
          <GraphCanvas graphElements={elements} nodeStates={nodeStates} />
        </div>
        <div className="space-y-4">
          <ControlsPanel
            beta={beta}
            gamma={gamma}
            speed={speed}
            setBeta={setBeta}
            setGamma={setGamma}
            setSpeed={setSpeed}
            onStep={handleStep}
            onReset={handleReset}
          />
          <SimulationInfo
            step={step}
            duration={duration}
            peakInfected={peakInfected}
          />
        </div>
      </div>

      <div className="mt-4 p-4 rounded-xl border border-[var(--neon-pink)] shadow-[0_0_15px_var(--neon-pink)]">
        <StatsChart data={chartData} />
      </div>
    </div>
  );
}

export default App;
