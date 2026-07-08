# 🏆 Jersey CRM - World Cup 2026

This project is a custom-made **CRM (Customer Relationship Management) & Real-Time Inventory** built for a soccer jersey sales business for the 2026 World Cup. 

The system enables coordination of operations for a 3-person team (business owner, salesperson, and delivery driver) in a 100% free and cloud-synchronized manner.

---

## 🛠️ Architecture & Technologies
The application was designed under an agile, **$0 cost** architecture without server dependencies or complex compilers:

![System Architecture](architecture_diagram.png)

*   **Frontend:** HTML5, CSS3 (featuring a modern dark design and dynamic variables) and pure JavaScript (Vanilla JS).
*   **Database:** Google Firebase Firestore, allowing real-time data synchronization across multiple devices simultaneously.
*   **Hosting:** GitHub Pages, hosting the website publicly and for free.

---

## 📋 Key Features

### 1. 📅 Weekly Delivery Calendar
Designed for delivery logistics. Shows a Monday to Sunday schedule for the current week with controls to move weeks forward or backward.

![Weekly Calendar](calendar_view.png)

*   **Instant Details:** Clicking on any delivery opens a modal displaying the customer's name, delivery location, payment method, amount to collect, and the list of jerseys sold along with size, type, and name customization.
*   **Fast Delivery Update:** Includes a button to mark the order as "Delivered", immediately updating its status in the history log.

---

### 2. 📋 Order Management (Purchases & Stock)
Created to separate physical available stock from customer requests. It is split into two columns:
*   **Pending (To source):** List of jerseys sold but not yet physically in hand.
    *   *Inline editing:* Allows writing and updating the purchase cost of jerseys directly on the card, saving the value automatically to Firebase.
    *   *Green checkbox:* Pressing the checkbox highlights it green and transfers the order to the "Completed" column, **automatically adding +1** (or the order quantity) to the general inventory of that country.
*   **Completed (In hand):** List of sourced merchandise ready to pack. Cards are interactive and allow editing if there was a mistake in the order.

---

### 3. 👕 Intelligent Inventory Control
A grid displaying the 48 World Cup teams plus Cabo Verde.

![Inventory Control](inventory_view.png)

*   **Quick edit:** Click directly on the stock number to type the exact quantity without having to click the `+` button repeatedly.
*   **Add Product:** Button to manually add any product not included in the initial list.
*   **Negative Stock:** If you sell an item with `0` stock, the inventory automatically drops to `-1`, indicating in red how many items need to be sourced for that order.

---

### 4. 💰 Streamlined Sales Registration
A mobile-optimized form allowing team members to register an order in under 10 seconds.

![New Sale Form](new_sale_view.png)

*   **Predictive Search (Autocomplete):** Instead of long dropdowns, a smart search bar matches countries with their real-time stock as you type.
*   **Square Buttons:** Quick-touch selectors for Sales Channel (WhatsApp, Instagram, etc.) and Payment Method.
*   **Jersey Customization:** Options to select Size (S to XXL), Type (Home / Away), and a **Customize Name** checkbox (allowing you to enter a number and player name; defaults to `S/N` if disabled).

---

### 5. 📜 Complete History
A chronological table listing all saved transactions, amounts collected, and current status (Pending / Delivered) for audit purposes by the business administrator.

![Sales History](history_view.png)

---

## 💻 Developer Notes (How it was built)
The CRM was developed through pair programming with **Antigravity** (Google DeepMind's AI coding assistant).

*   **Design Approach:** Premium dark-mode *Glassmorphism* aesthetic. Shows a comfortable navigation sidebar on desktop and transitions into a bottom tab bar optimized for thumbs on mobile devices.
*   **Synchronization:** Firebase Firestore handles live updates. When a salesperson registers a sale on the street, the stock updates in the owner's inventory and the delivery appears instantly on the delivery driver's calendar.
