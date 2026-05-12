# NothingOS

> Your wearable. Your world.

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org)
[![Part of](https://img.shields.io/badge/MrNothing-Ecosystem-purple)](https://github.com/Davidcarmelalex/MrNothing)

**NothingOS** is the digital hub for the MrNothing smart wearable ecosystem — a high-fidelity control center for managing, personalizing, and monitoring your devices in real time.

---

## Features

| Feature | Description |
|---------|-------------|
| 🔴 Real-time device status | Live telemetry from connected wearables |
| ⚙️ Deep personalization | Custom settings, themes, and behavioral profiles |
| 🛒 Product catalog | Browse and configure the full MrNothing hardware lineup |
| 📦 Order management | Track purchases, shipping, and hardware history |
| 🧠 AI configuration | Configure on-device agent behavior and triggers |

---

## Architecture

```
nothingos/
├── src/
│   ├── app/              Next.js App Router
│   │   ├── page.tsx      Landing / product showcase
│   │   ├── dashboard/    Device control center
│   │   ├── shop/         Product catalog
│   │   ├── orders/       Order history
│   │   └── settings/     Device personalization
│   ├── components/       Reusable UI components
│   └── lib/              API clients, utilities
├── public/               Static assets
└── tests/                Unit and integration tests
```

---

## Stack

- **Framework:** Next.js 16 · React 19 · TypeScript
- **Styling:** Tailwind CSS 4
- **State:** Zustand
- **Realtime:** WebSocket / Server-Sent Events
- **Backend:** Connected to MrNothing device API

---

## Quick Start

```bash
git clone https://github.com/Davidcarmelalex/nothingos
cd nothingos
npm install
cp .env.example .env.local
npm run dev   # http://localhost:3000
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Part of the [MrNothing](https://github.com/Davidcarmelalex/MrNothing) ecosystem.
