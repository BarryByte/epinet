import React, { useState } from 'react';

function ControlsPanel({ beta, gamma, speed,
    setBeta, setGamma, setSpeed,
    graphType, setGraphType,
    onStep, onReset }) {
    return (
        <div className="p-4 rounded-xl border border-[var(--neon-yellow)] shadow-[0_0_10px_var(--neon-yellow)]">
            <h2 className="text-xl font-semibold text-[var(--neon-yellow)] mb-2">🕹️ Controls</h2>
            <div className="space-y-2">
                <label>
                    Infection Rate (β): {beta.toFixed(2)}
                    <input type="range" min="0" max="1" step="0.01" value={beta} onChange={e => setBeta(parseFloat(e.target.value))} className="w-full" />
                </label>
                <label>
                    Recovery Rate (γ): {gamma.toFixed(2)}
                    <input type="range" min="0" max="1" step="0.01" value={gamma} onChange={e => setGamma(parseFloat(e.target.value))} className="w-full" />
                </label>
                
                <div className="flex gap-2 mt-2 flex-wrap">
                    <button onClick={onStep} className="px-3 py-1 bg-[var(--neon-green)] text-black rounded shadow-[0_0_10px_var(--neon-green)]">
                        Step
                    </button>
                    <button onClick={onReset} className="px-3 py-1 bg-[var(--neon-red)] text-black rounded shadow-[0_0_10px_var(--neon-red)]">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ControlsPanel;
