import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function StatsChart({ data }) {
  const latest = data[data.length - 1] || { S: 0, I: 0, R: 0 };

  return (
    <div>
      <h2 className="text-xl font-bold text-[var(--neon-pink)] mb-2">📈 SIR Statistics</h2>

      
      <div className="text-sm text-white mb-4 grid grid-cols-3 gap-2 text-center">
        <div className="bg-[var(--neon-green)] text-black p-2 rounded-xl shadow-[0_0_8px_var(--neon-green)]">
          <strong>Susceptible:</strong> {latest.S}
        </div>
        <div className="bg-[var(--neon-red)] text-black p-2 rounded-xl shadow-[0_0_8px_var(--neon-red)]">
          <strong>Infected:</strong> {latest.I}
        </div>
        <div className="bg-[var(--neon-purple)] text-white p-2 rounded-xl shadow-[0_0_8px_var(--neon-purple)]">
          <strong>Recovered:</strong> {latest.R}
        </div>
      </div>

    
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="step" stroke="white" label={{ value: 'Time Step', position: 'insideBottom', dy: 10, fill: 'white' }} />
          <YAxis stroke="white" label={{ value: 'People', angle: -90, position: 'insideLeft', fill: 'white' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#111', border: '1px solid #888' }}
            labelStyle={{ color: 'var(--neon-yellow)' }}
          />
          <Legend
            wrapperStyle={{ color: 'white' }}
          />
          <Line type="monotone" dataKey="S" stroke="#39FF14" strokeWidth={2} dot={false} name="Susceptible" />
          <Line type="monotone" dataKey="I" stroke="#FF073A" strokeWidth={2} dot={false} name="Infected" />
          <Line type="monotone" dataKey="R" stroke="#B026FF" strokeWidth={2} dot={false} name="Recovered" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatsChart;
