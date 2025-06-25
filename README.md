# 🦠 EpiNet: Epidemic Spread Simulator on Networks

EpiNet is an interactive web-based tool that simulates the spread of an infectious disease over a network using the **SIR (Susceptible–Infected–Recovered)** model. It visualizes how infections propagate through connections in a network, with real-time animations and statistical charts.

## [Loom demo video link](https://www.loom.com/share/bfbe0d0c94bb49de96052674c6011b77?sid=50caeb9a-208f-4146-a07a-d8876dc21ba6)

## 🎯 Features

- 📊 **Live Simulation** using SIR model
- 🌐 **Graph Visualization** powered by Cytoscape.js
- 🕹️ **Step-by-Step Control** — simulate one step at a time
- 🎛️ **Adjustable Parameters** — Infection rate (β), Recovery rate (γ), Speed
- 🔄 **Resetable Graph** — regenerate network and start simulation over
- 📈 **Real-time Stats** with line charts (Recharts)
- 🎨 **Neon Themed** UI for intuitive and engaging visual interaction
- ✅ Fully static, client-side only — no server, no login

---

## 🧠 How It Works

The network is made up of nodes (people) and edges (connections). Each node is in one of three states:

- 🟢 **Susceptible (S)**: Healthy but vulnerable
- 🔴 **Infected (I)**: Currently infected
- 🔵 **Recovered (R)**: No longer infected and immune

At each simulation step:
- Infected nodes can infect susceptible neighbors (probability β)
- Infected nodes may recover (probability γ)

---

## 🛠 Tech Stack

| Layer               | Technology                     |
|--------------------|--------------------------------|
| Frontend Framework | React + Vite                   |
| Styling            | Tailwind CSS (neon theme)      |
| Graph Library      | Cytoscape.js                   |
| Charts             | Recharts                       |
| State Management   | React Hooks (useState, useEffect) |
| Deployment         | Vercel / Netlify (static site) |

---


