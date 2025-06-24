import React from 'react';

function SimulationInfo({ step, peakInfected, duration }) {
  return (
    <div className="p-4 rounded-xl border border-[var(--neon-purple)] shadow-[0_0_10px_var(--neon-purple)]">
      <h2 className="text-xl font-semibold text-[var(--neon-purple)] mb-2">📊 Simulation Info</h2>
      <ul className="list-disc pl-5 text-sm">
        <li>Step: {step}</li>
        <li>Infected Peak: {peakInfected}</li>
        <li>Duration: {duration} steps</li>
      </ul>
    </div>
  );
}

export default SimulationInfo;
