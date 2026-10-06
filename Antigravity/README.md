# SmartTrip AI — Personalized Smart Trip Planner

> **Tagline:** *"Your Trip. Your Budget. Your Way."*

---

## 🎯 Design Thinking Focus

### The Problem
> **"Tourists struggle to plan personalized trips considering budget, time, interests and changing local conditions."**
- **Budget vs Dream:** Rigid budgets force travelers to compromise or risk runaway expenses.
- **Generic Itineraries:** Traditional booking sites output identical cookie-cutter packages regardless of whether the traveler is a student, family, or solo adventurer.
- **Unpredictable Conditions:** Sudden weather shifts and local hotel price surges disrupt vacations without providing instant alternatives.

### The Solution
> **"An AI-powered personalized travel planner combining itinerary generation, verified community experiences, and dynamic budget optimization."**
- **Smart Scoring Engine:** Matches activities based on $Score = 0.40 \times \text{Interest} + 0.25 \times \text{Budget} + 0.20 \times \text{Rating} + 0.15 \times \text{Weather}$.
- **Dynamic 40/35/25 Budget Optimizer:** Automatically splits funds across stay, dining, and activities with real-time expense logging.
- **Price Spike Detector & Hotel Switcher:** Detects surges (e.g. ₹2,000 $\to$ ₹2,800) and provides 1-click alternative switches that instantly restore financial balance.
- **Adaptive Weather Intelligence:** Suggests outdoor thrill/beaches during sunny days and automatically recommends indoor cultural/museum experiences during rainy conditions.

---

## 🚀 Application Structure & Pages

| # | Page / Feature | Key Functionalities |
|---|----------------|---------------------|
| 1 | **Home / Landing** | Visual hero with floating stat cards (₹10,000 Budget, 3 Days, AI Optimized, Weather Checked), "Why SmartTrip?" problem cards, 3 Traveler Personas (Students, Families, Solo), 3-step workflow, and Quick Demo launcher. |
| 2 | **Plan My Trip (7-Step Wizard)** | Multi-step interactive planner: Destination search + "Surprise Me", Date duration auto-calc, Budget presets (₹5k, ₹10k, ₹20k, ₹50k+), Traveler type selection, Multi-select interests, Travel pace & style, and Multi-stage AI thinking loader. |
| 3 | **AI Generated Itinerary** | Day-by-Day morning/afternoon/evening schedule, cost per activity, star ratings, interactive route map visualization, weather alert badges, details modal, PDF/text export, regenerate, and trip saving. |
| 4 | **Dynamic Budget Optimizer** | Total vs Spent vs Remaining gauges, visual category progress bars, Smart Allocation cards, live Price Spike Alert with side-by-side alternative switcher, and Expense Tracker. |
| 5 | **Community Feedback** | Filterable authentic review feed with tags (#HiddenGem, #StudentBudget, #Sunset), helpful upvotes, and interactive "Share Your Experience" modal. |
| 6 | **My Saved Trips** | Saved trips dashboard with status pills (*Upcoming*, *Planned*, *Completed*), view/edit/delete triggers, and direct budget optimizer integration. |
| 7 | **Profile & AI Personalization** | Traveler profile, travel statistics (Trips Planned: 4, Budget Saved: ₹14,200), default style/pace settings, and AI Personalization toggle (ON/OFF). |

---

## 🧪 Featured Working Demo: Goa Student Adventure

- **Destination:** Goa
- **Budget:** ₹10,000
- **Duration:** 3 Days
- **Traveler Type:** Student
- **Primary Focus:** Adventure, Culture & Hidden Gems
- **Allocated Budget:**
  - **Accommodation (40%):** ₹4,000
  - **Food (35%):** ₹3,500
  - **Activities (25%):** ₹2,500
- **Price Spike Showcase:**
  - Hotel increased from ₹2,000 to ₹2,800
  - One-click switch to *Palm Grove Eco Cottages* at ₹2,100 saves ₹700 instantly.

---

## 💻 Tech Stack

- **Core:** React 18, TypeScript, HTML5, Modern Modular ES Architecture
- **Styling:** Tailwind CSS, Glassmorphism, Responsive Grid System, HSL-tailored Palette (Deep Navy `#0B132B`, Sky Blue `#38BDF8`, Teal `#14B8A6`)
- **Icons & Visuals:** Lucide Icons, Canvas Confetti
- **Typography:** Google Fonts (Outfit for headings, Inter for clean body typography)
- **Persistence:** LocalStorage integration for trips, custom expenses, and community reviews

---

## 🏃 How to Run the Application

1. Simply double-click or open `index.html` in **any modern web browser** (Chrome, Edge, Firefox, Safari).
2. Or serve using any static server:
   ```bash
   npx serve .
   ```
3. Explore the 7 pages from the top navigation bar or click **"Explore Working Demo (Goa ₹10k)"** on the hero section.

---

## 🛡️ Service Architecture

- [`src/services/recommendationService.ts`](file:///c:/Users/admin/Desktop/Antigravity/src/services/recommendationService.ts): Composite AI scoring formula.
- [`src/services/weatherService.ts`](file:///c:/Users/admin/Desktop/Antigravity/src/services/weatherService.ts): Weather retrieval & suitability checker.
- [`src/services/travelPriceService.ts`](file:///c:/Users/admin/Desktop/Antigravity/src/services/travelPriceService.ts): Real-time pricing & price spike alert simulator.
- [`src/services/communityService.ts`](file:///c:/Users/admin/Desktop/Antigravity/src/services/communityService.ts): Community review filtering & submission.
- [`src/utils/budgetOptimizer.ts`](file:///c:/Users/admin/Desktop/Antigravity/src/utils/budgetOptimizer.ts): 40/35/25 calculation & expense tracker.
- [`src/utils/itineraryGenerator.ts`](file:///c:/Users/admin/Desktop/Antigravity/src/utils/itineraryGenerator.ts): Multi-day day/slot generator.
