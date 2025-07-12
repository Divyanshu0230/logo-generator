# Brandify - AI-Powered Logo Generator

Brandify is a modern, full-stack AI-powered logo generator. Instantly create, customize, and download professional logos for your brand, with a beautiful, original UI and robust backend.

---

## 🚀 Features
- AI-powered logo generation (Nebius AI)
- Multiple styles, colors, and sizes
- User authentication (Clerk)
- Logo history and gallery
- Rate limiting (Upstash Redis)
- Observability (Helicone)
- Responsive, modern UI
- Download logos in high quality

---

## 🛠️ Tech Stack
- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js API routes / Server Actions
- **Database:** PostgreSQL (NeonDB)
- **AI:** Nebius AI
- **Authentication:** Clerk
- **Rate Limiting:** Upstash Redis
- **Observability:** Helicone

---

## 🏗️ System Design

```mermaid
flowchart TD
  A[User (Web/Mobile)] -->|HTTP/HTTPS| B[Next.js Frontend (Brandify)]
  B -->|API Calls| C[API Route / Server Actions]
  C -->|DB Queries| D[(PostgreSQL / NeonDB)]
  C -->|AI Requests| E[Nebius AI API]
  C -->|Rate Limiting| F[Upstash Redis]
  C -->|Observability| G[Helicone]
  B -->|Auth| H[Clerk (Authentication)]
  B -->|Static Assets| I[Public CDN]
```

---

## 🧩 Low-Level System Design & Architecture

```mermaid
flowchart TD
  subgraph CLIENT[Client Side]
    A1[User Browser]
    A2[React Components]
    A3[Next.js Pages]
    A1 --> A2 --> A3
  end

  subgraph FRONTEND[Next.js Frontend]
    B1[UI Components]
    B2[API Calls (fetch, axios)]
    B3[Clerk Auth SDK]
    A3 --> B1
    B1 --> B2
    B1 --> B3
  end

  subgraph BACKEND[Next.js API/Server Actions]
    C1[API Route Handler]
    C2[Business Logic]
    C3[DB Access Layer]
    C4[AI Service Layer]
    C5[Rate Limiting Layer]
    C6[Observability Layer]
    B2 --> C1
    C1 --> C2
    C2 --> C3
    C2 --> C4
    C2 --> C5
    C2 --> C6
  end

  subgraph SERVICES[External Services]
    D1[(PostgreSQL / NeonDB)]
    D2[Nebius AI API]
    D3[Upstash Redis]
    D4[Helicone]
    D5[Clerk Auth API]
    D6[Public CDN]
    C3 --> D1
    C4 --> D2
    C5 --> D3
    C6 --> D4
    B3 --> D5
    B1 --> D6
  end
```

---

## ⚡ Quickstart

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Divyanshu0230/logo-generator.git
   cd logo-generator
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your keys (NeonDB, Nebius, Clerk, Upstash, Helicone)
4. **Run database migrations:**
   ```bash
   npx drizzle-kit migrate
   ```
5. **Start the dev server:**
   ```bash
   npm run dev
   ```
6. **Open [http://localhost:3000](http://localhost:3000)**

---

## 🌐 Deployment
- **Vercel (Recommended):** Import your repo, add env vars, and deploy.
- **Render:** Supported, but may require custom build/start commands.

---

## 👤 Author
- **Divyanshu Pratap Singh**  
  [GitHub](https://github.com/Divyanshu0230) | [LinkedIn](https://www.linkedin.com/in/divyanshu-pratap-singh-304546251/)

---

## 📄 License
MIT License. See [LICENSE](LICENSE) for details.
