ClientPilot 🚀

A lightweight client management dashboard for freelancers and small businesses

🧩 Overview

ClientPilot is a modern, frontend-only client management dashboard built to help freelancers and small teams organize clients, track their status, and store important notes — all in one clean interface.

It replaces messy spreadsheets, scattered WhatsApp messages, and notebooks with a simple, professional system that works entirely in the browser.

🎯 The Problem It Solves

Many small businesses struggle with:

Losing track of client details

Confusion over who is a lead, active, or completed client

Managing clients across Excel, email, and chat apps

Overly complex or expensive CRM tools

ClientPilot solves this by offering a simple, intuitive, and affordable alternative focused on what small teams actually need.

👥 Who It’s For

Freelancers (designers, developers, writers, consultants)

Small agencies

Coaches and service-based businesses

Anyone managing multiple clients without a full CRM

✨ Key Features

📋 Client Management

Add, edit, and delete clients

Store name, email, phone, company, status, and notes

🏷️ Client Status Tracking

Lead → Active → Completed

Clear color-coded status badges

🔍 Search & Filter

Search clients by name or company

Filter clients by status

📝 Client Notes

Add notes per client

Auto-saved locally

💾 Local Persistence

Data stored in localStorage

No backend required

🎨 Modern UI

Clean SaaS-style dashboard

Light & dark mode

Smooth animations with Framer Motion

📱 Responsive Design

Works on desktop and mobile devices

🛠️ Tech Stack

Next.js (App Router)

React

TypeScript

Tailwind CSS

Framer Motion

Lucide React (icons)

This project is intentionally frontend-only to demonstrate strong UI, UX, and state management skills.

📁 Project Structure
src/
├─ app/
│  ├─ dashboard/
│  ├─ clients/
│  ├─ settings/
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ ClientTable.tsx
│  ├─ ClientModal.tsx
│  ├─ StatusBadge.tsx
│  └─ Sidebar.tsx
├─ lib/
│  └─ storage.ts
├─ types/
│  └─ client.ts

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/clientpilot.git
cd clientpilot

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


Open:

http://localhost:3000

🌍 Deployment

ClientPilot is ready to deploy on Vercel or Netlify.

npm run build

💼 Portfolio Value

This project demonstrates:

Real-world dashboard design

Frontend state management

Business-focused UX thinking

SaaS-style UI polish

Ability to build tools for non-technical users

It is designed to be reused and customized for client projects.

🧠 Future Enhancements (Optional)

Export client data

Reminder / follow-up UI

Role-based views

API or backend integration

📄 License

This project is for educational and portfolio purposes.
You are free to customize and extend it for client work.





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
