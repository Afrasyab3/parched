"use client";

import { useState } from "react";
import Image from "next/image";

// Recreated SVG logo from image
function LogoSvg({ className = "w-24 h-24", color = "#60693E", bg = "#FAF5ED" }) {
  return (
    <svg viewBox="0 0 320 320" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Adjusted curve path to perfectly arch the text PARCHED */}
        <path
          id="textPath"
          d="M 54,120 A 110,110 0 0,1 266,120"
          fill="none"
        />
      </defs>
      
      {/* Outer oval ring */}
      <ellipse
        cx="160"
        cy="175"
        rx="95"
        ry="115"
        fill="none"
        stroke={color}
        strokeWidth="4"
      />
      
      {/* Inner solid green oval */}
      <ellipse
        cx="160"
        cy="175"
        rx="72"
        ry="90"
        fill={color}
      />

      {/* Arched text "PARCHED" */}
      <text fill={color} className="font-display font-bold uppercase tracking-[0.2em]" style={{ fontSize: '28px' }}>
        <textPath href="#textPath" startOffset="50%" textAnchor="middle">
          PARCHED
        </textPath>
      </text>

      {/* ESTD 2025 details on the left and right */}
      {/* Left side: ES TD */}
      <text x="44" y="172" fill={color} className="font-sans font-bold text-center tracking-[0.05em]" style={{ fontSize: '13px' }} textAnchor="middle">
        ES
      </text>
      <text x="44" y="192" fill={color} className="font-sans font-bold text-center tracking-[0.05em]" style={{ fontSize: '13px' }} textAnchor="middle">
        TD
      </text>

      {/* Right side: 20 25 */}
      <text x="276" y="172" fill={color} className="font-sans font-bold text-center tracking-[0.05em]" style={{ fontSize: '13px' }} textAnchor="middle">
        20
      </text>
      <text x="276" y="192" fill={color} className="font-sans font-bold text-center tracking-[0.05em]" style={{ fontSize: '13px' }} textAnchor="middle">
        25
      </text>

      {/* Icons inside the green oval */}
      {/* Bread Loaf (white) */}
      <path
        d="M 125,148 C 125,139 135,133 160,133 C 185,133 195,139 195,148 C 195,152 185,156 160,156 C 135,156 125,152 125,148 Z"
        fill={bg}
      />
      {/* Slices cuts on bread */}
      <path d="M 142,136 Q 148,142 144,148" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 157,136 Q 163,142 159,148" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 172,136 Q 178,142 174,148" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Horizontal divider line in the center */}
      <line
        x1="116"
        y1="171"
        x2="204"
        y2="171"
        stroke={bg}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Coffee Cup (white) */}
      {/* Cup body */}
      <path
        d="M 128,187 C 128,206 140,216 160,216 C 180,216 192,206 192,187 Z"
        fill={bg}
      />
      {/* Cup handle */}
      <path
        d="M 192,192 C 199,192 205,195 205,200 C 205,205 199,208 192,208"
        fill="none"
        stroke={bg}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Coffee bean on the cup */}
      <ellipse
        cx="160"
        cy="201"
        rx="8"
        ry="5"
        transform="rotate(-25 160 201)"
        fill={color}
      />
      <path
        d="M 154,203 Q 160,201 166,199"
        stroke={bg}
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

// Menu items data
const MENU_ITEMS = [
  {
    id: "lasagna",
    name: "The Hero Beef Lasagna",
    category: "mains",
    description: "Layers of slow-cooked ragu, silky béchamel, and enough melted mozzarella to repair a broken heart. Truly legendary.",
    price: "Rs. 950",
    image: "/lasagna_hero.png",
    badge: "Most Hyped",
    spicy: false,
  },
  {
    id: "crepe",
    name: "Irresponsible Nutella Crepe",
    category: "desserts",
    description: "Warm, paper-thin crepes folded around an amount of Nutella we aren't legally allowed to disclose. Dusting of powdered sugar included.",
    price: "Rs. 480",
    image: "/nutella_crepe.png",
    badge: "Sweetest Sin",
    spicy: false,
  },
  {
    id: "brownie",
    name: "Dangerous Caramel Brownie",
    category: "desserts",
    description: "Fudgy, rich, and gooey enough to fix your mood instantly. Sweet caramel drizzle and a pinch of flaky sea salt on top.",
    price: "Rs. 350",
    image: "/brownie_delight.png",
    badge: "Staff Fav",
    spicy: false,
  },
  {
    id: "tres_leches",
    name: "Dreamy Tres Leches Cake",
    category: "desserts",
    description: "Soft sponge cake soaked in three types of milk, crowned with fluffy whipped cream and cinnamon. Wet (the good kind) and perfect.",
    price: "Rs. 550",
    image: "/tres_leches.png",
    badge: "Pure Cloud",
    spicy: false,
  },
  {
    id: "loaf_sandwich",
    name: "The Toasted Loaf Sandwich",
    category: "mains",
    description: "Golden toasted loaf bread stuffed with savory grilled chicken, cheese, and our secret sauce. Heavy, warm, and highly satisfying.",
    price: "Rs. 720",
    image: "/loaf_sandwich.png",
    badge: "Big Boy Option",
    spicy: false,
  },
  {
    id: "croissant",
    name: "Croissant Egg & Cheese",
    category: "mains",
    description: "Buttery, flaky golden croissant loaded with fluffy eggs and melted cheddar. For breakfast, lunch, or midnight cravings.",
    price: "Rs. 650",
    image: "/croissant_sandwich.png",
    badge: "Breakfast Star",
    spicy: false,
  },
  {
    id: "strawberry_vice",
    name: "Strawberry Vice Soda",
    category: "drinks",
    description: "Fizzy, fruity, and dangerously refreshing strawberry soda with fresh mint. The ultimate antidote to Islamabad's summer heat.",
    price: "Rs. 320",
    image: "/strawberry_vice.png",
    badge: "Best Seller",
    spicy: false,
  },
  {
    id: "caramel_coffee",
    name: "Creamy Caramel Coffee",
    category: "drinks",
    description: "Rich espresso blended with sweet caramel syrup, milk, and ice. Topped with a thick dollop of whipped cream.",
    price: "Rs. 400",
    image: "/caramel_coffee.png",
    badge: "Caffeine Kick",
    spicy: false,
  },
];

// Fun Gen-Z meme quotes generator
const MEME_QUOTES = [
  "You won't skip this ad, right? 🫣",
  "If you order right now, a chocolate-chip cookie might magically appear in your bag. (No promises, but our packer is in a good mood.)",
  "Our lasagna sheets are hand-rolled. Yes, our chef has strong forearms. Yes, he is single.",
  "Warning: Our portions are actually big. Please don't call us crying because you can't get off the couch.",
  "We don't do white tablecloths. We do food that tastes like a hug from someone who actually likes you.",
  "Your diet had a good run. But our lasagna is here now. It's time to let go.",
  "4.7/5 stars on Foodpanda because 0.3% of people just hate happiness.",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const filteredMenu = selectedCategory === "all" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % MEME_QUOTES.length);
  };

  return (
    <div className="min-h-screen bg-[#FAF5ED] text-[#262B17] selection:bg-[#60693E] selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Dynamic Marquee Header */}
      <div className="bg-[#60693E] text-[#FAF5ED] py-2.5 overflow-hidden text-xs md:text-sm font-semibold tracking-wider uppercase border-b-3 border-[#262B17] z-30 relative">
        <div className="animate-marquee flex whitespace-nowrap gap-12">
          <span>🍕 Islamabad's Hypiest Lasagna is in G-13!</span>
          <span>🍰 Homemade desserts baked fresh daily!</span>
          <span>🛵 4.7★ rated on Foodpanda (100+ reviews)!</span>
          <span>🕒 Open 11:00 AM to 11:00 PM daily!</span>
          <span>🍪 Free cookies randomly thrown in!</span>
          {/* Duplicate for seamless looping */}
          <span>🍕 Islamabad's Hypiest Lasagna is in G-13!</span>
          <span>🍰 Homemade desserts baked fresh daily!</span>
          <span>🛵 4.7★ rated on Foodpanda (100+ reviews)!</span>
          <span>🕒 Open 11:00 AM to 11:00 PM daily!</span>
          <span>🍪 Free cookies randomly thrown in!</span>
        </div>
      </div>

      {/* Main Navigation (Sticky/Glassmorphic) */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b-2 border-[#262B17]/10 px-4 md:px-8 py-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* SVG Logo Integration */}
            <LogoSvg className="w-12 h-12 hover:rotate-12 transition-transform duration-300" color="#60693E" bg="#FAF5ED" />
            <span className="font-display text-xl md:text-2xl font-black tracking-wider text-[#60693E] select-none">
              PARCHED<span className="text-[#D56B4E]">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide text-[#60693E]">
            <a href="#menu" className="hover:text-[#D56B4E] transition-colors duration-200 uppercase">The Cravings</a>
            <a href="#why-us" className="hover:text-[#D56B4E] transition-colors duration-200 uppercase">The Hype</a>
            <a href="#delivery" className="hover:text-[#D56B4E] transition-colors duration-200 uppercase">Where & When</a>
          </nav>

          <button 
            onClick={() => setIsOrderModalOpen(true)}
            className="px-5 py-2 bg-[#60693E] hover:bg-[#4E5531] text-[#FAF5ED] font-bold rounded-full border-2 border-[#262B17] shadow-[3px_3px_0px_0px_#262B17] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#262B17] transition-all duration-150 text-xs md:text-sm cursor-pointer uppercase tracking-wider"
          >
            Order Now 🛵
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#60693e08_1px,transparent_1px),linear-gradient(to_bottom,#60693e08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Hero Copy */}
        <div className="flex-1 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EFECE2] border-2 border-[#262B17] rounded-full text-xs md:text-sm font-black shadow-[2px_2px_0px_0px_#262B17] text-[#60693E] rotate-[-2deg] select-none">
            ⭐ ESTABLISHED 2025 · G-13 ISLAMABAD
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#262B17] leading-[1.05] max-w-2xl">
            YOUR DIET HAD A <span className="underline decoration-[#D56B4E] decoration-wavy decoration-3">GOOD RUN</span>. BUT WE'RE HERE NOW.
          </h1>

          <p className="text-base md:text-lg text-[#4E5531] max-w-lg font-medium leading-relaxed">
            We don't do fancy sit-down spots or tiny portions. We roll our own lasagna sheets, pack in irresponsible amounts of Nutella, and ship comfort food directly to your G-13 couch.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-8 py-4 bg-[#60693E] hover:bg-[#4E5531] text-[#FAF5ED] font-black text-lg rounded-full border-3 border-[#262B17] shadow-[5px_5px_0px_0px_#262B17] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0px_0px_#262B17] transition-all duration-150 animate-pulse-gentle flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              Order on Foodpanda 🍕
            </button>
            <a
              href="https://www.instagram.com/parched_islamabad/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-[#FAF5ED] hover:bg-[#EFECE2] text-[#60693E] font-black text-lg rounded-full border-3 border-[#262B17] shadow-[5px_5px_0px_0px_#262B17] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0px_0px_#262B17] transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              Instagram DMs 📲
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="flex items-center gap-6 pt-4 border-t border-[#262B17]/10 w-full select-none">
            <div>
              <div className="flex items-center gap-1 text-[#60693E]">
                <span className="text-2xl font-display font-black">4.7</span>
                <span className="text-[#C8943D] text-xl">★</span>
              </div>
              <p className="text-xs text-[#8D9671] font-bold uppercase tracking-wider">Foodpanda Rating</p>
            </div>
            <div className="w-px h-10 bg-[#262B17]/10" />
            <div>
              <div className="text-2xl font-display font-black text-[#60693E]">100+</div>
              <p className="text-xs text-[#8D9671] font-bold uppercase tracking-wider">Happy Reviews</p>
            </div>
            <div className="w-px h-10 bg-[#262B17]/10" />
            <div>
              <div className="text-2xl font-display font-black text-[#60693E]">100%</div>
              <p className="text-xs text-[#8D9671] font-bold uppercase tracking-wider">Mood Restored</p>
            </div>
          </div>
        </div>

        {/* Hero Visuals */}
        <div className="flex-1 w-full relative max-w-md lg:max-w-lg select-none">
          {/* Shadow Box Backdrop */}
          <div className="absolute inset-0 bg-[#60693E] rounded-3xl translate-x-4 translate-y-4 border-3 border-[#262B17]" />
          
          <div className="relative bg-[#FAF5ED] rounded-3xl border-3 border-[#262B17] p-4 md:p-6 overflow-hidden flex flex-col gap-4 shadow-xl">
            {/* Visual Header */}
            <div className="flex items-center justify-between border-b-2 border-[#262B17]/10 pb-4">
              <span className="text-sm font-bold text-[#8D9671] uppercase tracking-wider">✨ Star of the Show</span>
              <span className="px-2.5 py-0.5 bg-[#D56B4E] text-white text-xs font-black rounded-full uppercase tracking-wider">Hero Dish</span>
            </div>

            {/* Food Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#262B17] bg-[#EFECE2] group">
              <Image
                src="/lasagna_hero.png"
                alt="Piping hot Lasagna with cheese pull"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-w-768px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 bg-[#FAF5ED]/95 backdrop-blur-sm border-2 border-[#262B17] px-3 py-1 rounded-xl text-xs font-bold text-[#262B17] shadow-[2px_2px_0px_0px_#262B17]">
                ⚠️ Warning: Intense Drooling Ahead
              </div>
            </div>

            {/* Visual Description */}
            <div className="space-y-2 pt-2">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#60693E]">The Slow-Cooked Beef Lasagna</h3>
                <span className="font-display text-lg md:text-xl font-black text-[#D56B4E]">Rs. 950</span>
              </div>
              <p className="text-sm text-[#4E5531] leading-relaxed">
                Hand-rolled sheets layered with deep, slow-simmered beef bolognese and our rich signature béchamel. Melted till golden, bubbly brown. Comfort food at its absolute limit.
              </p>
            </div>
          </div>

          {/* Floating Sticker - Replaced emoji with brand green star badge details */}
          <div className="absolute -top-6 -right-6 md:-right-10 w-24 h-24 md:w-28 md:h-28 bg-[#C8943D] rounded-full border-3 border-[#262B17] flex flex-col items-center justify-center text-center p-2 font-display rotate-[12deg] shadow-lg animate-wiggle-slow text-[#FAF5ED]">
            <span className="text-2xl md:text-3xl">🧑‍🍳</span>
            <span className="text-[10px] md:text-xs font-extrabold uppercase leading-none tracking-tight">5-Star Taste</span>
          </div>
        </div>
      </section>

      {/* Interactive Meme Ribbon / Vibe Checker */}
      <section className="bg-[#EFECE2] py-6 border-y-3 border-[#262B17] relative select-none">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#D56B4E]">Parched Vibe Check 🫣</span>
            <p className="text-lg md:text-xl font-bold transition-all duration-300 italic text-[#262B17]">
              "{MEME_QUOTES[currentQuoteIndex]}"
            </p>
          </div>
          <button
            onClick={handleNextQuote}
            className="shrink-0 px-5 py-2 bg-[#FAF5ED] hover:bg-[#EFECE2] text-[#262B17] font-extrabold rounded-lg border-2 border-[#262B17] shadow-[2px_2px_0px_0px_#262B17] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#262B17] transition-all text-sm cursor-pointer"
          >
            Next Quote 🔮
          </button>
        </div>
      </section>

      {/* Best Sellers / Menu Section */}
      <section id="menu" className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs md:text-sm uppercase font-black tracking-widest text-[#60693E] bg-[#EFECE2] border-2 border-[#60693E] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#60693E]">
            😋 OUR CRAVINGS MENU
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#262B17]">
            OUR CRUSH-WORTHY BEST SELLERS
          </h2>
          <p className="text-base md:text-lg text-[#4E5531] max-w-xl mx-auto font-medium">
            We don’t do a million average dishes. We do a handful of spectacular, borderline-addictive plates that we've perfected over time.
          </p>

          {/* Menu Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 select-none">
            {["all", "mains", "desserts", "drinks"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-bold border-2 border-[#262B17] capitalize transition-all duration-150 text-sm md:text-base cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#60693E] text-[#FAF5ED] shadow-[3px_3px_0px_0px_#262B17] translate-x-[-1px] translate-y-[-1px]"
                    : "bg-white text-[#262B17] hover:bg-[#FAF5ED] hover:shadow-[3px_3px_0px_0px_#262B17] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[0px_0px_0px_0px]"
                }`}
              >
                {category === "all" ? "😋 Show All" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 card-perspective">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border-3 border-[#262B17] flex flex-col overflow-hidden hover:scale-[1.02] hover:-rotate-1 hover:shadow-[8px_8px_0px_0px_#60693E] transition-all duration-300 group"
            >
              
              {/* Product Image */}
              <div className="relative aspect-video w-full border-b-3 border-[#262B17] bg-[#EFECE2] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                />
                
                {/* Float Badge */}
                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#C8943D] border-2 border-[#262B17] text-[10px] font-black uppercase text-[#FAF5ED] rounded-lg tracking-wider shadow-[1px_1px_0px_0px_#262B17]">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-lg md:text-xl text-[#60693E] leading-tight tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#4E5531] line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#262B17]/10">
                  <span className="font-display font-black text-[#D56B4E] text-base md:text-lg">
                    {item.price}
                  </span>
                  
                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="px-4 py-1.5 bg-[#FAF5ED] hover:bg-[#60693E] hover:text-[#FAF5ED] text-[#60693E] border-2 border-[#262B17] rounded-full font-bold text-xs shadow-[2px_2px_0px_0px_#262B17] hover:shadow-[1px_1px_0px_0px_#262B17] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-150 cursor-pointer"
                  >
                    Add ➕
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Why People Keep Coming Back (Value Props) */}
      <section id="why-us" className="bg-[#EFECE2] py-20 md:py-32 px-4 border-y-3 border-[#262B17]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs md:text-sm uppercase font-black tracking-widest text-[#D56B4E]">
              💌 THE PARCHED PROMISE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#262B17]">
              WHY PARCHED FANS ARE OBSESSED
            </h2>
            <p className="text-base md:text-lg text-[#4E5531] max-w-xl mx-auto font-medium">
              We aren't a massive corporate chain. Here's why our delivery orders keep stacking up daily:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Prop 1 */}
            <div className="bg-[#FAF5ED] p-6 md:p-8 rounded-2xl border-3 border-[#262B17] shadow-[4px_4px_0px_0px_#262B17] space-y-4">
              <div className="w-12 h-12 bg-[#60693E] border-2 border-[#262B17] rounded-xl flex items-center justify-center text-[#FAF5ED] text-2xl font-bold shadow-[2px_2px_0px_0px_#262B17]">
                💵
              </div>
              <h3 className="font-display font-bold text-xl text-[#60693E]">5-Star Taste, Corner Price</h3>
              <p className="text-sm text-[#4E5531] leading-relaxed">
                Fine food shouldn't cost a fortune. We source premium, fresh ingredients and keep our overhead low to give you elite comfort food at prices that feel like a steal.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="bg-[#FAF5ED] p-6 md:p-8 rounded-2xl border-3 border-[#262B17] shadow-[4px_4px_0px_0px_#262B17] space-y-4">
              <div className="w-12 h-12 bg-[#D56B4E] border-2 border-[#262B17] rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-[2px_2px_0px_0px_#262B17]">
                👩‍🍳
              </div>
              <h3 className="font-display font-bold text-xl text-[#60693E]">In-House Baking, Always</h3>
              <p className="text-sm text-[#4E5531] leading-relaxed">
                No frozen factory mixes here. We make our lasagna sheets, bake our cookies, whip our cream, and fold our crepes fresh inside our kitchen. You can taste the home-baked texture.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="bg-[#FAF5ED] p-6 md:p-8 rounded-2xl border-3 border-[#262B17] shadow-[4px_4px_0px_0px_#262B17] space-y-4">
              <div className="w-12 h-12 bg-[#C8943D] border-2 border-[#262B17] rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-[2px_2px_0px_0px_#262B17]">
                📦
              </div>
              <h3 className="font-display font-bold text-xl text-[#60693E]">Built for the Islamabad Ride</h3>
              <p className="text-sm text-[#4E5531] leading-relaxed">
                Normal packaging leads to cold, soggy meals. We double-layer our boxes to ensure your lasagna arrives piping hot, your drinks stay frosty, and nothing leaks during the ride.
              </p>
            </div>

            {/* Prop 4 */}
            <div className="bg-[#FAF5ED] p-6 md:p-8 rounded-2xl border-3 border-[#262B17] shadow-[4px_4px_0px_0px_#262B17] space-y-4">
              <div className="w-12 h-12 bg-emerald-700 border-2 border-[#262B17] rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-[2px_2px_0px_0px_#262B17]">
                ❤️
              </div>
              <h3 className="font-display font-bold text-xl text-[#60693E]">A Team That Actually Cares</h3>
              <p className="text-sm text-[#4E5531] leading-relaxed">
                Messed up an order? We'll replace it immediately. Running late? We throw in a free cookie. We are humans cooking for humans, and we will always go the extra mile for you.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Review Strip Section */}
      <section className="bg-[#60693E] text-[#FAF5ED] py-12 px-4 border-b-3 border-[#262B17] relative overflow-hidden select-none">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 rounded-full border-4 border-white/5" />
        <div className="absolute left-10 bottom-0 -translate-x-12 translate-y-12 w-64 h-64 rounded-full border-4 border-white/5" />

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-[#C8943D] text-3xl">★</span>
              ))}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold">4.7★ ON FOODPANDA (100+ REVIEWS)</h3>
            <p className="text-sm font-light text-white/90 max-w-md">
              "The lasagna was boiling hot and tasted amazing. Literally the best lasagna in Islamabad. And the brownie is extremely fudgy." — A. Hashmi
            </p>
          </div>
          
          <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-6 py-3 bg-[#FAF5ED] hover:bg-[#EFECE2] text-[#60693E] border-2 border-[#262B17] shadow-[4px_4px_0px_0px_#262B17] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#262B17] rounded-full font-bold text-center transition-all duration-150 text-sm cursor-pointer uppercase tracking-wider"
            >
              Order on Foodpanda 🐼
            </button>
            <a
              href="https://www.instagram.com/parched_islamabad/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-transparent border-2 border-[#FAF5ED] text-[#FAF5ED] hover:bg-white/10 rounded-full font-bold text-center transition-all text-sm uppercase tracking-wider"
            >
              Follow on Instagram 📸
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Delivery Area Section */}
      <section id="delivery" className="py-20 md:py-32 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Info Column */}
        <div className="flex-1 space-y-6 md:space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EFECE2] border-2 border-[#262B17] rounded-full text-xs md:text-sm font-bold shadow-[2px_2px_0px_0px_#262B17] text-[#60693E] rotate-[-1deg] select-none">
            📍 G-13, ISLAMABAD
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#262B17]">
            WE DELIVER TO YOUR COUCH
          </h2>
          
          <p className="text-base md:text-lg text-[#4E5531] leading-relaxed max-w-xl font-medium">
            We are a delivery-first cloud kitchen located in **G-13, Islamabad**. Since we don't have a formal dine-in seating area, our entire focus is on ensuring your food arrives hot, fresh, and exceptionally delicious.
          </p>

          <div className="space-y-4 pt-2 border-t border-[#262B17]/10">
            
            {/* Delivery Hours */}
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1 select-none">⏰</span>
              <div>
                <h4 className="font-display font-bold text-lg text-[#60693E]">Operating Hours</h4>
                <p className="text-sm text-[#4E5531]">Open Daily from 11:00 AM – 11:00 PM</p>
              </div>
            </div>

            {/* Delivery Radius */}
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1 select-none">🛵</span>
              <div>
                <h4 className="font-display font-bold text-lg text-[#60693E]">Delivery Sectors</h4>
                <p className="text-sm text-[#4E5531]">
                  G-13, G-14, H-13, F-11 & surrounding sectors in Islamabad. 
                  <br />
                  <span className="text-xs text-[#8D9671] font-semibold">
                    *Too far for Foodpanda? Send us a DM on Instagram and we'll arrange a private rider!
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Map / Graphic Column */}
        <div className="flex-1 w-full relative max-w-md lg:max-w-lg select-none">
          <div className="absolute inset-0 bg-[#60693E] rounded-3xl translate-x-4 translate-y-4 border-3 border-[#262B17]" />
          
          <div className="relative bg-[#FAF5ED] rounded-3xl border-3 border-[#262B17] p-6 md:p-8 flex flex-col justify-center gap-6 shadow-xl">
            <div className="text-center space-y-2 border-b-2 border-[#262B17]/10 pb-4">
              <h3 className="font-display text-xl font-extrabold text-[#60693E]">Coverage Radar</h3>
              <p className="text-xs text-[#8D9671] uppercase tracking-wider font-semibold">G-13 Islamabad Central Hub</p>
            </div>

            {/* Map Vector Graphic */}
            <div className="relative aspect-square w-full rounded-2xl border-2 border-[#262B17] bg-[#EFECE2] overflow-hidden flex items-center justify-center p-4">
              
              {/* Radar rings */}
              <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-dashed border-[#60693E]/20 animate-pulse" />
              <div className="absolute w-[60%] h-[60%] rounded-full border-2 border-[#60693E]/10" />
              <div className="absolute w-[40%] h-[40%] rounded-full border-2 border-[#60693E]/5" />
              
              {/* Sector markers */}
              <div className="absolute top-[20%] left-[25%] px-2.5 py-1 bg-white border border-[#262B17] rounded-lg shadow-sm text-[10px] font-bold text-[#8D9671]">F-11</div>
              <div className="absolute top-[45%] right-[15%] px-2.5 py-1 bg-white border border-[#262B17] rounded-lg shadow-sm text-[10px] font-bold text-[#8D9671]">H-13</div>
              <div className="absolute bottom-[20%] left-[20%] px-2.5 py-1 bg-white border border-[#262B17] rounded-lg shadow-sm text-[10px] font-bold text-[#8D9671]">G-14</div>

              {/* Central Hub SVG logo */}
              <div className="relative z-10 w-28 h-28 bg-[#FAF5ED] border-3 border-[#262B17] rounded-full flex flex-col items-center justify-center text-white shadow-lg animate-float p-1">
                <LogoSvg className="w-full h-full" color="#60693E" bg="#FAF5ED" />
              </div>

              {/* Pulsing delivery guy */}
              <div className="absolute bottom-[35%] right-[30%] bg-[#C8943D] border-2 border-[#262B17] p-1.5 rounded-full shadow-md text-xs animate-bounce">
                🛵
              </div>

            </div>

            <div className="text-center pt-2">
              <span className="text-xs text-[#8D9671] font-bold italic">
                *Freshness guaranteed within a 15-minute delivery radius!
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#262B17] text-[#FAF5ED] py-16 px-4 border-t-3 border-[#262B17]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <div className="flex items-center gap-2">
              <LogoSvg className="w-16 h-16" color="#FAF5ED" bg="#262B17" />
              <span className="font-display text-2xl font-black tracking-widest uppercase">
                PARCHED<span className="text-[#D56B4E]">.</span>
              </span>
            </div>
            <p className="text-sm text-[#8D9671] max-w-xs font-light">
              Affordable indulgence. 5-star taste at corner-shop prices. Hand-crafted comfort food based in G-13, Islamabad.
            </p>
          </div>

          {/* Core Menu Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-sm text-[#FAF5ED]/80 font-semibold uppercase tracking-wider">
            <a href="#menu" className="hover:text-[#D56B4E] transition-colors duration-200">The Cravings</a>
            <a href="#why-us" className="hover:text-[#D56B4E] transition-colors duration-200">Why Us</a>
            <a href="#delivery" className="hover:text-[#D56B4E] transition-colors duration-200">Delivery</a>
            <button 
              onClick={() => setIsOrderModalOpen(true)}
              className="text-[#D56B4E] font-bold hover:underline cursor-pointer"
            >
              Order Online
            </button>
          </div>

          {/* Socials & Copyright */}
          <div className="space-y-3 text-center md:text-right text-xs text-[#8D9671]">
            <p className="text-sm font-semibold text-white/90">
              Instagram: <a href="https://www.instagram.com/parched_islamabad/" target="_blank" rel="noreferrer" className="hover:underline text-[#D56B4E]">@parched_islamabad</a>
            </p>
            <p className="font-light">
              © {new Date().getFullYear()} Parched Islamabad. All rights reserved.
            </p>
            <p className="font-light">
              Made with 💚 for G-13 Cravings.
            </p>
          </div>

        </div>
      </footer>

      {/* ORDER MODAL */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <div 
            onClick={() => setIsOrderModalOpen(false)}
            className="absolute inset-0 bg-[#262B17]/60 backdrop-blur-sm cursor-pointer" 
          />

          {/* Modal Content Box */}
          <div className="relative bg-[#FAF5ED] rounded-3xl border-3 border-[#262B17] max-w-md w-full p-6 md:p-8 flex flex-col gap-6 shadow-[6px_6px_0px_0px_#262B17] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-[#262B17] flex items-center justify-center font-bold text-sm bg-white hover:bg-[#EFECE2] text-[#262B17] transition-all cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <span className="text-3xl select-none">🛵</span>
              <h3 className="font-display text-2xl font-black text-[#262B17]">ORDER FROM PARCHED</h3>
              <p className="text-xs text-[#8D9671] font-bold uppercase tracking-wider">
                Select your preferred way to order:
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              
              {/* Option 1: Foodpanda */}
              <a
                href="https://www.foodpanda.pk"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-[#60693E] hover:text-[#FAF5ED] border-2 border-[#262B17] rounded-2xl shadow-[4px_4px_0px_0px_#262B17] hover:shadow-[2px_2px_0px_0px_#262B17] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all group"
              >
                <div className="w-12 h-12 shrink-0 bg-[#60693E] group-hover:bg-white text-white group-hover:text-[#60693E] border border-[#262B17]/15 rounded-xl flex items-center justify-center text-xl font-bold shadow-inner">
                  🐼
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-base">Order on Foodpanda</h4>
                  <p className="text-xs text-[#8D9671] group-hover:text-white/80">Fastest delivery, live tracking in G-13</p>
                </div>
              </a>

              {/* Option 2: Instagram DM */}
              <a
                href="https://www.instagram.com/parched_islamabad/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-[#D56B4E] hover:text-white border-2 border-[#262B17] rounded-2xl shadow-[4px_4px_0px_0px_#262B17] hover:shadow-[2px_2px_0px_0px_#262B17] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all group"
              >
                <div className="w-12 h-12 shrink-0 bg-[#D56B4E] group-hover:bg-white text-white group-hover:text-[#D56B4E] border border-[#262B17]/15 rounded-xl flex items-center justify-center text-xl font-bold shadow-inner">
                  📲
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-base">Order via Instagram DM</h4>
                  <p className="text-xs text-[#8D9671] group-hover:text-white/80">Slide in with your custom craving orders</p>
                </div>
              </a>

              {/* Option 3: WhatsApp Chat */}
              <a
                href="https://wa.me/923001234567" // Placeholder number
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:bg-emerald-700 hover:text-white border-2 border-[#262B17] rounded-2xl shadow-[4px_4px_0px_0px_#262B17] hover:shadow-[2px_2px_0px_0px_#262B17] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all group"
              >
                <div className="w-12 h-12 shrink-0 bg-emerald-700 group-hover:bg-white text-white group-hover:text-emerald-700 border border-[#262B17]/15 rounded-xl flex items-center justify-center text-xl font-bold shadow-inner">
                  💬
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-base">WhatsApp Ordering</h4>
                  <p className="text-xs text-[#8D9671] group-hover:text-white/80">Direct chat with the Parched kitchen team</p>
                </div>
              </a>

            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="text-xs font-semibold text-[#8D9671] hover:underline cursor-pointer"
              >
                Nevermind, I'm just looking
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
