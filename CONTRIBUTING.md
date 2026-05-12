# Contributing to NothingOS

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Workflow
1. Branch: `git checkout -b feat/your-feature`
2. Build with TypeScript strict mode
3. Add tests in `tests/`
4. PR with clear description

## Commit Convention
```
feat: add device telemetry dashboard
fix: resolve WebSocket reconnection loop
docs: update device API integration guide
test: add product catalog unit tests
```
