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
  User["User (Web/Mobile)"] -->|HTTP/HTTPS| Frontend["Next.js Frontend (Brandify)"]
  Frontend -->|API Calls| ServerActions["API Route / Server Actions"]
  ServerActions -->|DB Queries| Database[("PostgreSQL / NeonDB")]
  ServerActions -->|AI Requests| AI["Nebius AI API"]
  ServerActions -->|Rate Limiting| Redis["Upstash Redis"]
  ServerActions -->|Observability| Helicone["Helicone"]
  Frontend -->|Auth| Clerk["Clerk (Authentication)"]
  Frontend -->|Static Assets| CDN["Public CDN"]
```

---

## 🧩 Low-Level System Design & Architecture

```mermaid
flowchart TD
  subgraph CLIENT["Client Side"]
    Browser["User Browser"]
    ReactComponents["React Components"]
    NextPages["Next.js Pages"]
    Browser --> ReactComponents --> NextPages
  end

  subgraph FRONTEND["Next.js Frontend"]
    UIComponents["UI Components"]
    APICalls["API Calls"]
    ClerkSDK["Clerk Auth SDK"]
    NextPages --> UIComponents
    UIComponents --> APICalls
    UIComponents --> ClerkSDK
  end

  subgraph BACKEND["Next.js API/Server Actions"]
    APIRoute["API Route Handler"]
    BusinessLogic["Business Logic"]
    DBLayer["DB Access Layer"]
    AIServices["AI Service Layer"]
    RateLimit["Rate Limiting Layer"]
    Observability["Observability Layer"]
    APICalls --> APIRoute
    APIRoute --> BusinessLogic
    BusinessLogic --> DBLayer
    BusinessLogic --> AIServices
    BusinessLogic --> RateLimit
    BusinessLogic --> Observability
  end

  subgraph SERVICES["External Services"]
    NeonDB["PostgreSQL / NeonDB"]
    NebiusAI["Nebius AI API"]
    Upstash["Upstash Redis"]
    HeliconeS["Helicone"]
    ClerkAPI["Clerk Auth API"]
    PublicCDN["Public CDN"]
    DBLayer --> NeonDB
    AIServices --> NebiusAI
    RateLimit --> Upstash
    Observability --> HeliconeS
    ClerkSDK --> ClerkAPI
    UIComponents --> PublicCDN
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
