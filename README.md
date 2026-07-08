# Parched Islamabad - Marketing Website

A single-page, high-conversion marketing landing website for **Parched**, a delivery-first cloud kitchen cafe based in G-13, Islamabad. The website is styled after their official logo and Instagram aesthetic, featuring a warm cream background, organic olive green theme accents, and a playful, self-aware Gen-Z brand voice.

---

## 🚀 Quick Start

Ensure you have [Node.js](https://nodejs.org) installed on your system, then open your terminal in this directory and run:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the live interactive site.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Key File Structure

- **[`src/app/page.tsx`](file:///c:/Users/Lenovo/Desktop/Websites/Parched/src/app/page.tsx)**: Main single-page document containing all sections (Hero, Best Sellers Menu, Value Props, Reviews, operating Timings, and sticky Order Modal).
- **[`src/app/globals.css`](file:///c:/Users/Lenovo/Desktop/Websites/Parched/src/app/globals.css)**: Implements Tailwind CSS v4 design tokens, color palette configurations (olive green, cream, terracotta), scroll behaviors, and animations.
- **[`src/app/layout.tsx`](file:///c:/Users/Lenovo/Desktop/Websites/Parched/src/app/layout.tsx)**: Manages layout wrapping, SEO title tags, descriptions, OpenGraph social card previews, and pre-loading CDN fonts (`Plus Jakarta Sans` & `Outfit`).
- **[`public/`](file:///c:/Users/Lenovo/Desktop/Websites/Parched/public/)**: Contains all generated mock food photography assets used throughout the best sellers cards.

---

## 🛠️ Customisation Guide

### How to Edit Menu Items (Prices/Descriptions)
All menu items are stored in a JavaScript array at the top of `src/app/page.tsx` called `MENU_ITEMS`. 
To update any item, locate it and edit its fields:
```javascript
{
  id: "lasagna",
  name: "The Hero Beef Lasagna",
  category: "mains",
  description: "Layers of slow-cooked ragu...",
  price: "Rs. 950", // <-- Change pricing string here
  image: "/lasagna_hero.png",
  badge: "Most Hyped",
}
```

### How to Swap Food Photos
1. Save your real food photo as a `.png` or `.jpg` image.
2. Place it inside the `public/` folder.
3. Open `src/app/page.tsx`, find the menu item in `MENU_ITEMS`, and update the `image` field to reference your new filename (e.g. `image: "/my-real-lasagna.png"`).

### How to Update Links (WhatsApp / Instagram / Foodpanda)
Open `src/app/page.tsx` and scroll down to the **ORDER MODAL** section (around line 600) or check the anchor links in the buttons. Update the `href` strings with your real accounts:
- **WhatsApp**: Replace `https://wa.me/923001234567` with `https://wa.me/<your-phone-number-with-country-code>`.
- **Instagram**: Ensure the Instagram button points to your profile.
- **Foodpanda**: Replace `https://www.foodpanda.pk` with your actual foodpanda store page link.

---

## 🔗 How to Share with the Client

Choose one of these simple methods to send a preview link to your client:

### Method 1: Deploy Free to Vercel (Recommended)
This gives you a permanent, professional preview link (e.g., `parched.vercel.app`) that the client can open anywhere.
1. Run this command in your project terminal:
   ```bash
   npx vercel
   ```
2. Accept the prompts (type `Y`, log in if prompted, link project: `N`, name: `parched`).
3. Vercel will build the project and output a production URL which you can copy and message directly to the client.

### Method 2: Share your Local Server (ngrok)
This exposes your active development port (`http://localhost:3000`) to a temporary public URL without uploading files.
1. Keep the dev server running (`npm run dev`).
2. Run this command in a new terminal window:
   ```bash
   npx ngrok http 3000
   ```
3. Copy the forwarding URL (e.g. `https://xxxx.ngrok-free.app`) and send it to your client. Note: The link will work as long as your computer is on and the terminal is open.

### Method 3: Export as Static HTML Files
To hand over raw code files that can be uploaded to standard hosting providers (like Hostinger, Netlify, or CPanel):
1. Add `output: 'export'` to your [`next.config.ts`](file:///c:/Users/Lenovo/Desktop/Websites/Parched/next.config.ts) config file.
2. Run:
   ```bash
   npm run build
   ```
3. This creates a folder called `out/` in the root of the project. Zip this folder and send it to the client, or upload its contents to your web server.
