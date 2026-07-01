# Building a Real-Time Sales CRM with AI-Assisted Development

A friend of mine recently started a small business selling soccer jerseys for the 2026 FIFA World Cup. He reached out asking if I could build him a simple CRM (Customer Relationship Management) system for his team — something lightweight, mobile-friendly, and accessible to everyone on his team from anywhere, with shared data in real time.

He didn't need an enterprise-grade Salesforce setup. He needed something practical, fast, and tailored to his exact workflow: taking orders via Instagram and WhatsApp, tracking deliveries across the week, and keeping an eye on inventory as jerseys come in and go out. This is the story of how I built it.

---

## The Requirements

After a brief conversation, we defined five core needs:

1. **New Sale Registration** — A fast form to capture customer name, sales channel (WhatsApp/Instagram), payment method, delivery details, selected jerseys, and the final price.
2. **Delivery Calendar** — A weekly calendar view so the delivery person can see at a glance which packages need to go out on which day.
3. **Inventory Management** — An intuitive interface to track stock for 48+ national team jerseys, with quick add/subtract controls and the ability to type quantities directly.
4. **Sales History** — A complete log of all sales ever made, with date, client info, amounts, and delivery status.
5. **Cloud Database** — All data must live in the cloud so that all 3 team members (the owner, a salesperson, and the delivery person) can access the same real-time information from their phones or computers.

---

## The Architecture

I chose a deliberately simple and zero-cost architecture that any small business can replicate:

![Architecture Diagram](C:/Users/gabo_/.gemini/antigravity/brain/79bca18d-8a92-4b7d-9ccb-8ccdfbfa4b2e/architecture_diagram_1782863033519.png)

| Layer | Technology | Cost |
|-------|-----------|------|
| **Frontend** | Vanilla HTML, CSS, JavaScript | Free |
| **Hosting** | GitHub Pages | Free |
| **Database** | Google Firebase Firestore | Free (Spark plan) |

No frameworks. No build tools. No npm. Just three files — `index.html`, `styles.css`, and `app.js` — deployed to GitHub Pages and connected to a Firestore cloud database. This means:

- **Zero hosting costs** — GitHub Pages serves the website for free.
- **Zero database costs** — Firebase's free tier supports up to 50,000 reads and 20,000 writes per day, more than enough for a small team.
- **No server to maintain** — Everything runs in the browser and talks directly to Firestore.
- **Instant deployment** — Push to GitHub and the site updates automatically.

---

## The Development Process

For developing this CRM I used **Antigravity** (Google DeepMind's agentic AI coding assistant). The entire application — from concept to deployed product — was built through a collaborative conversation with the AI.

The workflow looked like this:

1. **I described the business problem** in plain language (in Spanish, my friend's native language).
2. **Antigravity researched** CRM best practices for small businesses and proposed an architecture.
3. **It generated an implementation plan** which I reviewed and approved.
4. **It wrote all the code** — HTML structure, CSS styling with a premium dark-mode aesthetic, and the full JavaScript logic.
5. **We iterated** — I requested changes (calendar view, square selection buttons, direct stock editing, adding Cabo Verde to the team list) and Antigravity updated the code.
6. **It guided me through deployment** — step-by-step instructions for Firebase setup and GitHub Pages publishing.

The entire process, from first message to live website, took a single afternoon.

---

## Feature Walkthrough

### 1. Delivery Calendar 📅

The main dashboard presents a **weekly calendar** view showing Monday through Sunday. Each day displays the deliveries scheduled for that date as clickable blocks. Team members can:

- Navigate between weeks using the **◀ / ▶ arrows**
- Click on any delivery to see full details (customer, products, location, payment info)
- Mark deliveries as completed directly from the detail modal

The current day is highlighted with a blue border so the delivery person always knows where to look first.

![Weekly Delivery Calendar](C:/Users/gabo_/.gemini/antigravity/brain/79bca18d-8a92-4b7d-9ccb-8ccdfbfa4b2e/calendar_view_1782862999223.png)

---

### 2. Inventory Control 👕

The inventory screen shows a responsive grid of all 49 national team jerseys (the 48 World Cup participants plus Cabo Verde, specifically requested by the client). Each card displays:

- The team name
- Current stock level with **+** and **−** buttons for quick adjustments
- A red **"SIN INVENTARIO"** (out of stock) label when stock reaches zero
- **Click-to-edit**: tapping the stock number turns it into a text input so you can type "50" directly instead of clicking "+" fifty times

There's also a **search bar** for quickly finding a specific team and a **"+ Nuevo Producto"** button to add new items that aren't in the original list.

![Inventory Management](C:/Users/gabo_/.gemini/antigravity/brain/79bca18d-8a92-4b7d-9ccb-8ccdfbfa4b2e/inventory_view_1782863006930.png)

---

### 3. New Sale Registration 💰

The sale form is designed for speed — since most sales come through WhatsApp or Instagram messages, the person registering them needs to do it quickly. Key design decisions:

- **Square selection buttons** instead of dropdowns for Sales Channel and Payment Method — one tap instead of two
- **Smart product selector** that only shows jerseys currently in stock
- **Automatic inventory deduction** — when a sale is registered, the stock counts update immediately in the database
- All fields are validated before submission

![New Sale Form](C:/Users/gabo_/.gemini/antigravity/brain/79bca18d-8a92-4b7d-9ccb-8ccdfbfa4b2e/new_sale_view_1782863013508.png)

---

### 4. Sales History 📜

A complete, sortable table showing every sale ever registered. Each row displays the date, customer name, sales channel, total charged, and a color-coded status badge:

- 🟢 **Entregado** (Delivered) — green badge
- 🔴 **Pendiente** (Pending) — red badge

This gives the business owner a clear picture of revenue and outstanding deliveries at any time.

![Sales History](C:/Users/gabo_/.gemini/antigravity/brain/79bca18d-8a92-4b7d-9ccb-8ccdfbfa4b2e/history_view_1782863020421.png)

---

## Design Philosophy

The UI follows a **premium dark-mode glassmorphism** aesthetic that might seem unusual for a small business tool, but it was a deliberate choice:

- **Dark backgrounds reduce eye strain** for someone checking their phone throughout the day
- **High contrast text and colored accents** make information scannable at a glance — critical when you're checking a delivery while standing in traffic
- **Responsive layout** — on desktop, a sidebar navigation; on mobile, a bottom tab bar optimized for thumb reach
- **Micro-animations** on buttons and cards give the app a native-app feel despite being a simple website

---

## Deployment

The deployment stack is intentionally simple:

1. **GitHub Pages** hosts the three frontend files (`index.html`, `styles.css`, `app.js`) as a static website
2. **Firebase Firestore** stores all inventory and sales data in the cloud
3. Any team member with the URL can access the CRM from any device — phone, tablet, or computer

The Firebase configuration lives directly in `app.js`, and the Firestore security rules are set to allow authenticated access for the team.

---

## Takeaways

What surprised me most about this project was the speed. In a single afternoon, through a natural conversation with an AI coding assistant, I went from "my friend needs a CRM" to a fully functional, cloud-connected, mobile-responsive web application deployed on the internet — with zero cost and zero infrastructure to maintain.

The key takeaways:

- **AI-assisted development dramatically compresses the timeline** for small, well-scoped projects
- **Zero-cost infrastructure exists** for small teams — GitHub Pages + Firebase free tier is a powerful combination
- **Simple tech is good tech** — no frameworks, no build steps, just three files that do exactly what the business needs
- **Design matters even for internal tools** — a polished UI increases adoption and makes the tool enjoyable to use

The CRM is now live and being used daily by a 3-person team to manage their World Cup 2026 jersey sales. Total cost: **$0/month**.
