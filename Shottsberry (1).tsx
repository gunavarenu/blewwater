"use client";
import React, { useEffect, useRef } from "react";
import { assetPath } from "@/lib/assetPath";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BerryProps {
  style: React.CSSProperties;
  emoji: string;
}

interface BenefitCardProps {
  icon: string;
  name: string;
  desc: string;
}

interface VitaminItemProps {
  icon: string;
  name: string;
  desc: string;
}

interface IngredientCardProps {
  icon: string;
  name: string;
  desc: string;
  right?: boolean;
}

interface FlavourCardProps {
  name: string;
  tagline: string;
  svgContent: React.ReactNode;
}

interface OrbitVitamin {
  letter: string;
  color: string;
  lightColor: string;
  width: number;
  height: number;
  cx: number;
  cy: number;
  r: number;
  rInner: number;
  delay: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const BERRY_CONFIGS: BerryProps[] = [
  { style: { top: "8%", left: "4%", fontSize: 44, animationDelay: "0s", opacity: 0.82 }, emoji: "🫐" },
  { style: { top: "18%", left: "14%", fontSize: 32, animationDelay: "-1.5s", opacity: 0.70 }, emoji: "🍓" },
  { style: { top: "32%", left: "3%", fontSize: 38, animationDelay: "-3s", opacity: 0.75 }, emoji: "🍇" },
  { style: { top: "50%", left: "8%", fontSize: 30, animationDelay: "-0.8s", opacity: 0.65 }, emoji: "🫐" },
  { style: { top: "68%", left: "2%", fontSize: 42, animationDelay: "-4s", opacity: 0.78 }, emoji: "🍓" },
  { style: { top: "80%", left: "13%", fontSize: 34, animationDelay: "-2s", opacity: 0.68 }, emoji: "🍇" },
  { style: { top: "10%", right: "5%", fontSize: 40, animationDelay: "-2.5s", opacity: 0.80 }, emoji: "🍓" },
  { style: { top: "25%", right: "10%", fontSize: 28, animationDelay: "-1s", opacity: 0.65 }, emoji: "🫐" },
  { style: { top: "42%", right: "4%", fontSize: 46, animationDelay: "-3.5s", opacity: 0.75 }, emoji: "🍇" },
  { style: { top: "60%", right: "7%", fontSize: 32, animationDelay: "-0.5s", opacity: 0.70 }, emoji: "🫐" },
  { style: { top: "75%", right: "3%", fontSize: 38, animationDelay: "-2.8s", opacity: 0.72 }, emoji: "🍓" },
  { style: { top: "88%", right: "12%", fontSize: 30, animationDelay: "-1.8s", opacity: 0.60 }, emoji: "🍇" },
  { style: { top: "5%", left: "38%", fontSize: 28, animationDelay: "-4.5s", opacity: 0.55 }, emoji: "🫐" },
  { style: { top: "15%", left: "55%", fontSize: 34, animationDelay: "-2.2s", opacity: 0.62 }, emoji: "🍓" },
  { style: { top: "70%", left: "30%", fontSize: 36, animationDelay: "-3.8s", opacity: 0.65 }, emoji: "🍇" },
  { style: { top: "85%", left: "48%", fontSize: 30, animationDelay: "-1.2s", opacity: 0.58 }, emoji: "🫐" },
  { style: { top: "55%", left: "22%", fontSize: 28, animationDelay: "-5s", opacity: 0.55 }, emoji: "🍓" },
  { style: { top: "40%", right: "22%", fontSize: 32, animationDelay: "-0.3s", opacity: 0.60 }, emoji: "🫐" },
  { style: { top: "22%", left: "28%", fontSize: 26, animationDelay: "-3.2s", opacity: 0.50 }, emoji: "🍇" },
  { style: { top: "78%", right: "28%", fontSize: 28, animationDelay: "-1.6s", opacity: 0.55 }, emoji: "🍓" },
];

const ORBIT_VITAMINS: OrbitVitamin[] = [
  { letter: "C",  color: "#ff9800", lightColor: "#ffb74d", width: 55, height: 62, cx: 27, cy: 31, r: 22, rInner: 16, delay: "0s",   label: "Vitamin C"  },
  { letter: "B1", color: "#4caf50", lightColor: "#81c784", width: 50, height: 50, cx: 25, cy: 25, r: 20, rInner: 14, delay: "-5s",  label: "Vitamin B1" },
  { letter: "B2", color: "#2196f3", lightColor: "#64b5f6", width: 50, height: 46, cx: 25, cy: 23, r: 19, rInner: 13, delay: "-10s", label: "Vitamin B2" },
  { letter: "B3", color: "#9c27b0", lightColor: "#ce93d8", width: 50, height: 50, cx: 25, cy: 25, r: 20, rInner: 14, delay: "-15s", label: "Vitamin B3" },
  { letter: "B5", color: "#f44336", lightColor: "#ef5350", width: 50, height: 50, cx: 25, cy: 25, r: 20, rInner: 14, delay: "-0s",  label: "Vitamin B5" },
];

// ─── Small reusable components ────────────────────────────────────────────────

const Berry: React.FC<BerryProps> = ({ style, emoji }) => (
  <span className="berry" style={style}>{emoji}</span>
);

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, name, desc }) => (
  <div className="benefit-card">
    <div className="benefit-icon">{icon}</div>
    <p className="benefit-name">{name}</p>
    <p className="benefit-desc">{desc}</p>
  </div>
);

const VitaminItem: React.FC<VitaminItemProps> = ({ icon, name, desc }) => (
  <div className="vitamin-item">
    <span className="vit-icon">{icon}</span>
    <p className="vit-name">{name}</p>
    <p className="vit-desc">{desc}</p>
  </div>
);

const IngredientCard: React.FC<IngredientCardProps> = ({ icon, name, desc, right = false }) => (
  <div className={`ingredient-card${right ? " right" : ""}`}>
    <span className="ingredient-icon">{icon}</span>
    <div className="ingredient-name">{name}</div>
    <div className="ingredient-desc">{desc}</div>
  </div>
);

const FlavourCard: React.FC<FlavourCardProps> = ({ name, tagline, svgContent }) => (
  <div className="flavour-card">
    {svgContent}
    <p>{name}</p>
    <p>{tagline}</p>
  </div>
);

// ─── Section components ───────────────────────────────────────────────────────

const Hero: React.FC = () => (
  <section className="hero">
    {/* Clouds */}
    <svg className="cloud" width="120" height="50" viewBox="0 0 120 50">
      <ellipse cx="60" cy="35" rx="50" ry="15" fill="#fff8e1" opacity="0.9"/>
      <ellipse cx="40" cy="25" rx="28" ry="18" fill="#fff8e1" opacity="0.9"/>
      <ellipse cx="80" cy="22" rx="25" ry="16" fill="#fff8e1" opacity="0.9"/>
    </svg>
    <svg className="cloud" width="100" height="42" viewBox="0 0 100 42">
      <ellipse cx="50" cy="30" rx="42" ry="12" fill="#ffecb3" opacity="0.8"/>
      <ellipse cx="34" cy="22" rx="22" ry="15" fill="#ffecb3" opacity="0.8"/>
      <ellipse cx="65" cy="20" rx="20" ry="14" fill="#ffecb3" opacity="0.8"/>
    </svg>
    <svg className="cloud" width="80" height="34" viewBox="0 0 80 34">
      <ellipse cx="40" cy="24" rx="32" ry="10" fill="#fff8e1" opacity="0.7"/>
      <ellipse cx="26" cy="16" rx="17" ry="11" fill="#fff8e1" opacity="0.7"/>
      <ellipse cx="52" cy="14" rx="16" ry="11" fill="#fff8e1" opacity="0.7"/>
    </svg>
    <svg className="cloud" width="60" height="26" viewBox="0 0 60 26">
      <ellipse cx="30" cy="18" rx="25" ry="8" fill="#ffecb3" opacity="0.6"/>
      <ellipse cx="21" cy="12" rx="13" ry="9" fill="#ffecb3" opacity="0.6"/>
      <ellipse cx="43" cy="10" rx="12" ry="8" fill="#ffecb3" opacity="0.6"/>
    </svg>
    <svg className="cloud" width="50" height="22" viewBox="0 0 50 22">
      <ellipse cx="25" cy="15" rx="20" ry="7" fill="#fff8e1" opacity="0.55"/>
      <ellipse cx="16" cy="10" rx="11" ry="8" fill="#fff8e1" opacity="0.55"/>
      <ellipse cx="34" cy="8" rx="10" ry="7" fill="#fff8e1" opacity="0.55"/>
    </svg>

    {/* Birds */}
    <svg className="birds" width="48" height="20" viewBox="0 0 48 20">
      <path d="M4 10 Q8 4 12 10" stroke="#8d6e63" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M18 7 Q22 1 26 7" stroke="#8d6e63" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M32 12 Q35 8 38 12" stroke="#8d6e63" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    </svg>
    <svg className="birds" width="40" height="18" viewBox="0 0 40 18">
      <path d="M4 9 Q8 3 12 9" stroke="#8d6e63" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M20 6 Q24 1 28 6" stroke="#8d6e63" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    </svg>
    <svg className="birds" width="30" height="14" viewBox="0 0 30 14">
      <path d="M2 7 Q6 2 10 7" stroke="#8d6e63" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M16 5 Q19 1 22 5" stroke="#8d6e63" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>

    {/* Floating berries */}
    {BERRY_CONFIGS.map((b, i) => (
      <Berry key={i} style={b.style} emoji={b.emoji} />
    ))}

    {/* Water splashes */}
    <svg className="water-splash" width="120" height="100" viewBox="0 0 120 100" style={{ opacity: 0.35 }}>
      <path d="M10 90 Q30 50 50 70 Q70 30 90 60 Q110 20 120 40" stroke="#4fc3f7" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
      <circle cx="25" cy="55" r="4" fill="#4fc3f7" opacity="0.5"/>
      <circle cx="45" cy="40" r="3" fill="#4fc3f7" opacity="0.5"/>
      <circle cx="70" cy="35" r="5" fill="#4fc3f7" opacity="0.5"/>
      <circle cx="95" cy="45" r="3" fill="#4fc3f7" opacity="0.5"/>
    </svg>
    <svg className="water-splash" width="100" height="80" viewBox="0 0 100 80" style={{ opacity: 0.35 }}>
      <path d="M5 70 Q25 40 40 55 Q60 25 80 50 Q95 30 100 45" stroke="#4fc3f7" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
      <circle cx="20" cy="45" r="3" fill="#4fc3f7" opacity="0.4"/>
      <circle cx="50" cy="30" r="4" fill="#4fc3f7" opacity="0.4"/>
      <circle cx="85" cy="40" r="3" fill="#4fc3f7" opacity="0.4"/>
    </svg>
    <svg className="water-splash" width="80" height="70" viewBox="0 0 80 70" style={{ opacity: 0.3 }}>
      <path d="M5 60 Q20 35 35 50 Q55 25 70 45 Q78 30 80 40" stroke="#4fc3f7" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      <circle cx="18" cy="40" r="2.5" fill="#4fc3f7" opacity="0.4"/>
      <circle cx="45" cy="30" r="3" fill="#4fc3f7" opacity="0.4"/>
    </svg>

    <p className="hero-tagline">Berry · Vitamin Water · Pure Goodness</p>
    <h1 className="hero-title">
      "Winter was not complete<br />without <em>fresh berries.</em>"
    </h1>

    <div className="hero-bottle">
      <img src={assetPath("/flavours/berry/berry.png")} alt="SHOTT'S Berry Functional Vitamin Water bottle" />
    </div>

    <p className="hero-sub">Vitamin C · B6 · Zero Sugar · 100% Natural</p>
    <p
      className="hero-scroll"
      onClick={() => document.querySelector(".product-info-section")?.scrollIntoView({ behavior: "smooth" })}
    >
      ↓ scroll to explore
    </p>
  </section>
);

const ProductInfoSection: React.FC = () => (
  <section className="product-info-section">
    <Berry style={{ top: "10%", right: "12%", fontSize: 52, opacity: 0.25, animationDelay: "-1s" }} emoji="🫐" />
    <Berry style={{ bottom: "15%", left: "8%", fontSize: 44, opacity: 0.25, animationDelay: "-3s" }} emoji="🍓" />
    <Berry style={{ top: "60%", right: "5%", fontSize: 38, opacity: 0.25, animationDelay: "-2s" }} emoji="🍇" />

    <div className="product-info-wrap">
      <div className="product-bottle-left">
        <img src={assetPath("/flavours/berry/berry-removebg-preview.png")} alt="SHOTT'S Berry Functional Vitamin Water bottle - Fresh Berries Flavour" />
      </div>
      <div className="product-info-text">
        <p className="section-label">Complete Your Daily Nutrition</p>
        <h2>Your Daily Vitamin Gap,<br /><em>Finally Filled.</em></h2>
        <div className="divider" />

        <p className="lead-text">
          Most of us Indians don't meet our daily vitamin requirements through food alone.{" "}
          <strong>SHOTT'S</strong> bridges that gap — one refreshing sip at a time.
        </p>

        <p className="info-paragraph">
          Packed with essential vitamins your body needs every day, this isn't just a drink —
          it's your daily nutrition companion. The <strong>fresh berries</strong> flavour
          brings back childhood winters while delivering real health benefits.
        </p>

        <p className="info-paragraph">
          Whether you are rushing to work, hitting the gym, or just need a midday pick-me-up,
          SHOTT'S ensures you don't miss out on the vitamins your diet leaves behind.{" "}
          <strong>Zero sugar. 100% natural. Pure goodness.</strong>
        </p>

        <div className="vitamin-highlights">
          <VitaminItem icon="🍊" name="Vitamin C" desc="Boosts immunity & fights daily fatigue" />
          <VitaminItem icon="⚡" name="Vitamin B6" desc="Supports energy & brain function" />
          <VitaminItem icon="🌿" name="Zero Sugar" desc="Natural sweetness, no guilt" />
        </div>
      </div>
    </div>
  </section>
);

const CharacterSection: React.FC = () => (
  <section className="character-section">
    <Berry style={{ top: "15%", right: "8%", fontSize: 44, opacity: 0.22, animationDelay: "-4s" }} emoji="🍓" />
    <Berry style={{ bottom: "20%", left: "5%", fontSize: 38, opacity: 0.22, animationDelay: "-1.5s" }} emoji="🫐" />

    <div className="character-wrap">
      <div className="character-img">
        <img src={assetPath("/flavours/berry/chinuwithberry.png")} alt="Indian school boy with water bottle - childhood Winter nostalgia" />
      </div>
      <div className="character-text">
        <p className="section-label">Meet the Memory</p>
        <h2>That boy who waited for the berries</h2>
        <div className="divider" />
        <p>
          Tiny fingers reaching into the berry basket.
          Purple-stained smiles. Mom saying, "Just one," and somehow three disappearing instead.
          <br /><br />
          The ride home feeling longer because the strawberries looked too good,
          the blueberries too tempting, the raspberries impossible to ignore.
          <br /><br />
          We made SHOTT'S for that boy. For the fruit-market afternoons. For the baskets carried home with love.
          For the little moments that felt ordinary then, but became memories later.
        </p>
      </div>
    </div>
  </section>
);

const StorySection: React.FC = () => (
  <section className="story-section">
    <div className="sunset-glow" />
    <div className="story-inner">
      <div className="story-photo">
        <img src={assetPath("/flavours/berry/chinuwithmomberryshopping.png")} alt="Your story photo" />
      </div>

      <p className="section-label" style={{ textAlign: "center" }}>Our Story</p>
      <h2>Remember those afternoons <br />when Mom would stop by the fruit market on the way home?</h2>
      <div className="divider" style={{ margin: "18px auto 24px" }} />
      <p>
        Rows of strawberries, blueberries, raspberries, and blackberries shining under the shop lights.
        Tiny hands reaching into the basket before she could say, "Wait till we get home."{" "}
        <strong>A burst of sweet, juicy berry goodness</strong> — fresh, colorful, impossible to resist —
        and suddenly the ride home felt too long.
        <br /><br />
        We built <strong>SHOTT'S</strong> to bring that back.
        Not nostalgia in a bottle, but the real thing — vibrant berry flavour, essential vitamins,
        minerals, and hydration — nothing you don't need, everything that made those simple moments unforgettable.
      </p>
    </div>
  </section>
);

const Benefits: React.FC = () => (
  <section className="benefits">
    <p className="section-label">Why SHOTT'S</p>
    <h2>Good for you. Really.</h2>
    <div className="divider" style={{ margin: "18px auto 0" }} />
    <div className="benefits-grid">
      <BenefitCard icon="☀️" name="Vitamin Boost"     desc="Vitamin C & B6 for daily immunity & energy" />
      <BenefitCard icon="💧" name="Deep Hydration"    desc="Keeps you refreshed through the hottest afternoons" />
      <BenefitCard icon="🌿" name="Zero Added Sugar"  desc="Natural sweetness only, no guilt attached" />
    </div>
  </section>
);

const Ingredients: React.FC = () => (
  <section className="ingredients">
    <Berry style={{ top: "6%", left: "6%", fontSize: 60, opacity: 0.18, animationDelay: "-0.5s" }} emoji="🍇" />
    <Berry style={{ bottom: "10%", right: "6%", fontSize: 56, opacity: 0.18, animationDelay: "-2.5s" }} emoji="🫐" />
    <Berry style={{ top: "45%", left: "2%", fontSize: 50, opacity: 0.18, animationDelay: "-3.5s" }} emoji="🍓" />

    <p className="section-label">What is Inside</p>
    <h2>Your daily vitamin essentials.</h2>
    <div className="divider" style={{ margin: "18px auto 0" }} />

    <div className="ingredients-layout">
      {/* Left column */}
      <div className="ingredient-side">
        <IngredientCard icon="🍋" name="Citric Acid"       desc="Natural preservative that gives that sharp, tangy kick" />
        <IngredientCard icon="🍏" name="Malic Acid"        desc="Found in berries — adds that authentic sour depth" />
        <IngredientCard icon="🌿" name="Sweetener"         desc="Clean, zero-calorie sweetness — no sugar, no compromise" />
        <IngredientCard icon="🌱" name="Acesulfame Potassium" desc="A stable, high-intensity sweetener used to enhance sweetness without added sugar" />
      </div>

      {/* Center orbit animation */}
      <div className="orbit-container">
        <div className="orbit-ring" />

        {ORBIT_VITAMINS.map((v) => (
          <div
            key={v.letter}
            className="orbit-item"
            style={{ animationDelay: v.delay }}
          >
            <div
              className="orbit-inner"
              style={{ animationDelay: v.delay }}
            >
              <svg width={v.width} height={v.height} viewBox={`0 0 ${v.width} ${v.height}`}>
                <circle cx={v.cx} cy={v.cy} r={v.r}      fill={v.color}      opacity="0.95" />
                <circle cx={v.cx} cy={v.cy} r={v.rInner} fill={v.lightColor} opacity="0.7" />
                <text
                  x={v.cx} y={v.cy + 5}
                  textAnchor="middle"
                  fontFamily="Quicksand"
                  fontSize={v.letter.length === 1 ? 14 : 12}
                  fontWeight="700"
                  fill="white"
                >
                  {v.letter}
                </text>
              </svg>
              <span className="orbit-label">{v.label}</span>
            </div>
          </div>
        ))}

        <div className="center-bottle">
              <img
        src="/flavours/berry/berry-removebg-preview.png"
        alt="SHOTT'S Berry Flavoured Vitamin Water"
      />
        </div>
      </div>

      {/* Right column */}
      <div className="ingredient-side">
        <IngredientCard icon="⚡" name="Vitamin B3" desc="Boosts energy metabolism and supports healthy skin"            right />
        <IngredientCard icon="🧠" name="Vitamin B6" desc="Essential for brain function and immune system support"        right />
        <IngredientCard icon="🛡️" name="Zinc"        desc="Strengthens immunity and supports cell repair & growth"      right />
        <IngredientCard icon="💪" name="Iron"        desc="Carries oxygen through the blood, fights fatigue naturally"  right />
      </div>
    </div>
  </section>
);

const QuoteBand: React.FC = () => (
  <div className="quote-band">
    <p>
      "A basket full of berries, a pocket full of sunshine, and an afternoon worth remembering.
      <br />Some memories taste sweeter than others."
    </p>
    <span>— The SHOTT'S Story</span>
  </div>
);

const Flavours: React.FC = () => {
  const flavours: FlavourCardProps[] = [
    {
      name: "Berries",
      tagline: "Sweet · Juicy · Fresh",
      svgContent: (
        <svg width="52" height="60" viewBox="0 0 52 60" style={{ margin: "0 auto 14px", display: "block" }}>
          <circle cx="26" cy="34" r="16" fill="#3949ab" />
          <circle cx="21" cy="29" r="5" fill="#7986cb" opacity="0.5" />
          <path
            d="M26 16 L29 22 L36 22 L31 26 L33 33 L26 28 L19 33 L21 26 L16 22 L23 22 Z"
            fill="#2e7d32"
          />
        </svg>
      ),
    },
    {
      name: "Lemon",
      tagline: "Zesty · Minty · Refreshing",
      svgContent: (
        <svg width="52" height="60" viewBox="0 0 52 60" style={{ margin: "0 auto 14px", display: "block" }}>
          <ellipse cx="26" cy="32" rx="15" ry="20" fill="#FFD54F" />
          <ellipse cx="22" cy="27" rx="5" ry="8" fill="#FFF59D" opacity="0.6" />
          <ellipse cx="34" cy="15" rx="5" ry="3" fill="#4CAF50" transform="rotate(-25 34 15)" />
          <path d="M26 16 Q28 12 26 8" stroke="#795548" strokeWidth="2" fill="none" />
          <path d="M26 12 L24 15 L28 15 Z" fill="#FBC02D" />
          <path d="M26 52 L24 49 L28 49 Z" fill="#FBC02D" />
        </svg>
      ),
    },
    {
      name: "Orange",
      tagline: "Citrusy · Juicy · Classic",
      svgContent: (
        <svg width="52" height="60" viewBox="0 0 52 60" style={{ margin: "0 auto 14px", display: "block" }}>
          <circle cx="26" cy="32" r="16" fill="#ff9800" />
          <circle cx="22" cy="28" r="5" fill="#ffb74d" opacity="0.6" />
          <ellipse cx="31" cy="14" rx="5" ry="3" fill="#4caf50" transform="rotate(-25 31 14)" />
          <path d="M26 18 Q27 13 26 10" stroke="#795548" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      name: "Raw Mango",
      tagline: "Tangy · Nostalgic · Refreshing",
      svgContent: (
        <svg width="52" height="60" viewBox="0 0 52 60" style={{ margin: "0 auto 14px", display: "block" }}>
          <ellipse cx="26" cy="36" rx="17" ry="21" fill="#7cb342" opacity="0.95" transform="rotate(-12 26 36)" />
          <ellipse cx="26" cy="32" rx="13" ry="17" fill="#aed581" opacity="0.7"  transform="rotate(-12 26 32)" />
          <path d="M26 15 Q29 8 26 4 Q23 8 26 15" fill="#33691e" />
        </svg>
      ),
    },
    {
  name: "Guava",
  tagline: "Tropical · Tangy · Juicy",
  svgContent: (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      style={{ margin: "0 auto 14px", display: "block" }}
    >
      {/* Guava fruit */}
      <ellipse
        cx="26"
        cy="34"
        rx="17"
        ry="19"
        fill="#8BC34A"
        transform="rotate(-8 26 34)"
      />

      {/* Pink inner flesh */}
      <ellipse
        cx="26"
        cy="35"
        rx="11"
        ry="13"
        fill="#F48FB1"
        opacity="0.9"
        transform="rotate(-8 26 35)"
      />

      {/* Seeds */}
      <circle cx="23" cy="32" r="1.5" fill="#FFF3E0" />
      <circle cx="28" cy="34" r="1.5" fill="#FFF3E0" />
      <circle cx="24" cy="38" r="1.5" fill="#FFF3E0" />
      <circle cx="30" cy="39" r="1.5" fill="#FFF3E0" />

      {/* Leaf */}
      <ellipse
        cx="32"
        cy="13"
        rx="7"
        ry="3"
        fill="#388E3C"
        transform="rotate(-30 32 13)"
      />

      {/* Stem */}
      <path
        d="M26 18 Q28 12 30 10"
        stroke="#795548"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  ),
},
  ];

  return (
    <div className="flavours">
      <p className="section-label">Made with love</p>
      <h2>Five flavours. One feeling.</h2>
      <div className="flavours-grid">
        {flavours.map((f) => (
          <FlavourCard key={f.name} {...f} />
        ))}
      </div>
    </div>
  );
};

const CTA: React.FC = () => (
  <section className="cta">
    <div className="cta-sun" />
    <Berry style={{ top: "15%", left: "8%", fontSize: 38, opacity: 0.45, animationDelay: "-1s" }} emoji="🫐" />
    <Berry style={{ bottom: "20%", right: "10%", fontSize: 34, opacity: 0.45, animationDelay: "-3s" }} emoji="🍓" />
    <Berry style={{ top: "30%", right: "6%", fontSize: 30, opacity: 0.40, animationDelay: "-2s" }} emoji="🍇" />

    <p className="section-label">One Last Sip</p>
    <h2>"Some winters stay forever."</h2>
    <p className="cta-sub">Carry yours in every bottle of SHOTT'S.</p>
      <div className="cta-buttons">
      <a href="/products" className="cta-btn-primary">
        Explore All Flavours →
      </a>
</div>
    <p className="cta-note">Available in Berries · Lemon · Orange · Raw Mango  ·  Guava</p>
  </section>
);



// ─── Styles (injected at runtime) ─────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');

:root {
  --sage: #C4687A; --sage-dark: #7A1530; --sage-light: #E8A0B0;
  --cream: #FFFAF8; --warm-beige: #FDF0F0; --sand: #F0D8D8;
  --mango-green: #B5294E; --mango-light: #E8A0B0; --mango-bright: #FDF0F0;
  --sunset-orange: #B5294E; --sunset-peach: #8B1538; --sunset-gold: #F0C8D0;
  --sunset-pink: #9B2040;
  --text-dark: #2d1f16; --text-soft: #5d4e3e; --text-muted: #8d7e6e;
  --water-blue: #8B0000; --water-light: #C0392B;
  --bg-orange: #FFFAF8; --bg-yellow: #FFFAF8; --bg-warm: #FDF0F0;
}

.berry-page {
  font-family: 'Quicksand', sans-serif;
  background: linear-gradient(
    135deg,
    #FFFAF8 0%,
    #FDF3F0 30%,
    #FFF8F5 60%,
    #FDF5F0 100%
  );
  overflow-x: hidden;
  line-height: 1.6;
}

/* HERO */
.hero {
  position:relative; min-height:100vh; display:flex; flex-direction:column;
  align-items:center; justify-content:center; padding:120px 24px 80px; overflow:hidden;
  background:linear-gradient(180deg,#8B1538 0%,#B5294E 20%,#C4687A 45%,#DFA0A8 70%,#FDF5F2 100%);
}
.cloud {
  position:absolute; opacity:0.7;
  animation:driftCloud 20s ease-in-out infinite alternate;
  filter:drop-shadow(0 4px 8px rgba(181,41,78,0.12));
}
.cloud:nth-child(1){top:8%;left:5%;animation-duration:25s;}
.cloud:nth-child(2){top:15%;right:8%;animation-duration:30s;animation-direction:reverse;}
.cloud:nth-child(3){top:5%;left:40%;animation-duration:22s;animation-delay:-5s;}
.cloud:nth-child(4){top:25%;left:15%;animation-duration:28s;animation-delay:-10s;opacity:0.5;}
.cloud:nth-child(5){top:10%;right:25%;animation-duration:24s;animation-delay:-8s;opacity:0.45;}
@keyframes driftCloud {
  0%{transform:translateX(-30px) translateY(0);}
  50%{transform:translateX(20px) translateY(-10px);}
  100%{transform:translateX(40px) translateY(5px);}
}
.birds {
  position:absolute; opacity:0.5; animation:birdFly 15s linear infinite;
  filter:drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
.birds:nth-of-type(6){top:12%;left:20%;animation-duration:18s;}
.birds:nth-of-type(7){top:8%;right:30%;animation-duration:22s;animation-delay:-5s;}
.birds:nth-of-type(8){top:20%;left:60%;animation-duration:20s;animation-delay:-10s;opacity:0.4;}
@keyframes birdFly {
  0%{transform:translateX(0) translateY(0);}25%{transform:translateX(30px) translateY(-5px);}
  50%{transform:translateX(60px) translateY(0);}75%{transform:translateX(90px) translateY(5px);}
  100%{transform:translateX(120px) translateY(0);}
}
.berry {
  position:absolute; animation:floatBerries 6s ease-in-out infinite;
  pointer-events:none; user-select:none; line-height:1; display:block;
}
@keyframes floatBerries {
  0%,100%{transform:translateY(0) rotate(-5deg);}
  50%{transform:translateY(-15px) rotate(5deg);}
}
.water-splash {
  position:absolute; opacity:0.35; animation:splashWave 8s ease-in-out infinite;
  filter:drop-shadow(0 4px 8px rgba(79,195,247,0.3));
}
.water-splash:nth-of-type(17){bottom:15%;left:5%;width:120px;animation-delay:0s;}
.water-splash:nth-of-type(18){bottom:20%;right:8%;width:100px;animation-delay:-3s;}
.water-splash:nth-of-type(19){bottom:10%;left:30%;width:80px;animation-delay:-5s;opacity:0.3;}
@keyframes splashWave {
  0%,100%{transform:translateY(0) scale(1);opacity:0.35;}
  50%{transform:translateY(-10px) scale(1.05);opacity:0.5;}
}
.hero-tagline {
  font-size:13px; font-weight:700; color:#FFD6E0; letter-spacing:3px;
  text-transform:uppercase; margin-bottom:20px; text-align:center;
  position:relative; z-index:10; opacity:0.95;
}
.hero-title {
  font-family:'Playfair Display',serif; font-size:52px; font-weight:400; font-style:italic;
  color:#2d1020; text-align:center; line-height:1.2; max-width:650px; margin-bottom:30px;
  position:relative; z-index:10; text-shadow:0 2px 20px rgba(0,0,0,0.4);
}
.hero-title em { color:#FFD6E0; font-weight:600; }
.hero-bottle {
  position:relative; z-index:15; width:280px; margin:0 auto;
  animation:floatBottle 5s ease-in-out infinite;
  filter:drop-shadow(0 25px 50px rgba(139,21,56,0.12));
}
.hero-bottle img { width:100%; height:auto; display:block; border-radius:20px; }
@keyframes floatBottle { 0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);} }
.hero-sub {
  font-size:15px; color:#5d2030; text-align:center; margin-top:40px; font-weight:600;
  position:relative; z-index:10; letter-spacing:1.5px;
  background:rgba(255,255,255,0.55); padding:10px 24px; border-radius:30px; backdrop-filter:blur(8px);
}
.hero-scroll {
  text-align:center; margin-top:30px; font-size:12px; color:#FFF0F2; letter-spacing:2px;
  text-transform:uppercase; animation:bounce 2.5s ease-in-out infinite; position:relative; z-index:10;
  cursor:pointer; font-weight:700;
}
@keyframes bounce { 0%,100%{transform:translateY(0);}50%{transform:translateY(8px);} }

/* PRODUCT INFO */
.product-info-section {
  background:linear-gradient(135deg,#FFFAF8 0%,#FDF3F0 50%,#FFFAF8 100%);
  padding:100px 40px; position:relative; overflow:hidden;
  min-height:100vh; display:flex; align-items:center; justify-content:center;
}
.product-info-section::before {
  content:''; position:absolute; top:0; left:0; right:0; height:4px;
  background:linear-gradient(90deg,transparent,#B5294E,#E8A0B0,#8B1538,transparent); opacity:0.8;
}
.product-info-wrap {
  max-width:1200px; margin:0 auto; display:flex; align-items:center;
  gap:80px; position:relative; z-index:5; width:100%;
}
.product-bottle-left { flex:0 0 45%; position:relative; display:flex; justify-content:center; align-items:center; }
.product-bottle-left img {
  width:100%; max-width:420px; height:auto;
  filter:drop-shadow(0 30px 60px rgba(139,21,56,0.15));
  animation:gentleFloatLarge 6s ease-in-out infinite;
  border-radius:24px; transition:transform 0.4s ease;
}
.product-bottle-left img:hover { transform:scale(1.05); }
@keyframes gentleFloatLarge {
  0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-12px) rotate(2deg);}
}
.product-info-text { flex:1; padding:20px 0; }
.product-info-text .section-label { font-size:12px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#B5294E; margin-bottom:16px; }
.product-info-text h2 { font-family:'Playfair Display',serif; font-size:42px; font-weight:400; font-style:italic; color:var(--text-dark); line-height:1.3; margin-bottom:24px; }
.product-info-text .lead-text { font-size:20px; color:#4a2030; line-height:1.8; font-weight:600; margin-bottom:28px; background:rgba(139,26,26,0.3); padding:20px 28px; border-radius:20px; border-left:4px solid var(--sunset-orange); }
.product-info-text .info-paragraph { font-size:17px; color:#5d3040; line-height:1.9; font-weight:500; margin-bottom:20px; }
.product-info-text .info-paragraph strong { color:#B5294E; font-weight:700; }
.vitamin-highlights { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:30px; }
.vitamin-item { background:rgba(255,255,255,0.8); padding:18px 22px; border-radius:16px; border:2px solid rgba(181,41,78,0.2); transition:all 0.3s ease; }
.vitamin-item:hover { transform:translateY(-4px); border-color:#B5294E; box-shadow:0 8px 24px rgba(181,41,78,0.12); }
.vitamin-item .vit-icon { font-size:28px; margin-bottom:8px; display:block; }
.vitamin-item .vit-name { font-size:15px; font-weight:700; color:var(--text-dark); margin-bottom:4px; }
.vitamin-item .vit-desc { font-size:13px; color:var(--text-muted); font-weight:500; line-height:1.5; }

/* CHARACTER */
.character-section {
  background:linear-gradient(180deg,#FFFAF8 0%,#FDF0EE 50%,#FFFAF8 100%);
  padding:100px 24px; position:relative; overflow:hidden;
}
.character-section::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,transparent,#B5294E,#E8A0B0,#8B1538,transparent); opacity:0.8; }
.character-wrap { max-width:1100px; margin:0 auto; display:flex; align-items:center; gap:80px; position:relative; z-index:5; }
.character-img { flex:0 0 45%; position:relative; }
.character-img img { width:100%; max-width:500px; height:auto; filter:drop-shadow(0 20px 40px rgba(45,31,22,0.2)); animation:gentleFloat 6s ease-in-out infinite; border-radius:20px; }
@keyframes gentleFloat { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }
.character-text { flex:1; }
.character-text h2 { font-family:'Playfair Display',serif; font-size:38px; font-weight:400; font-style:italic; color:var(--text-dark); line-height:1.3; margin-bottom:24px; }
.character-text p { font-size:17px; color:#5d3040; line-height:1.9; font-weight:500; }
.character-text p strong { color:#B5294E; font-weight:700; }

/* STORY */
.story-section {
  background:linear-gradient(180deg,#FDF5F2 0%,#F5DDE0 25%,#E8B0B8 50%,#C4687A 75%,#B5294E 100%);
  padding:120px 24px; position:relative; overflow:hidden;
}
.story-inner { max-width:900px; margin:0 auto; text-align:center; position:relative; z-index:5; }
.story-photo { margin-bottom:50px; position:relative; display:inline-block; max-width:500px; width:90%; }
.story-photo img { width:100%; height:auto; border-radius:24px; filter:drop-shadow(0 20px 40px rgba(181,41,78,0.15)); object-fit:cover; }
.story-section h2 { font-family:'Playfair Display',serif; font-size:42px; font-weight:400; font-style:italic; color:#2d1020; line-height:1.3; margin-bottom:20px; text-shadow:0 2px 10px rgba(255,255,255,0.5); }
.story-section p { font-size:18px; color:#4a1028; line-height:2; max-width:650px; margin:0 auto; font-weight:500; }
.story-section p strong { color:#B5294E; font-weight:700; }
.sunset-glow { position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:1000px; height:500px; background:radial-gradient(ellipse at center,rgba(181,41,78,0.3) 0%,transparent 70%); pointer-events:none; }

/* BENEFITS */
.benefits { background:#FFFAF8; padding:100px 24px; text-align:center; position:relative; }
.benefits h2 { font-family:'Playfair Display',serif; font-size:36px; font-weight:400; font-style:italic; color:var(--text-dark); margin-bottom:10px; }
.benefits-grid { display:flex; justify-content:center; gap:40px; margin-top:60px; flex-wrap:wrap; }
.benefit-card { width:200px; text-align:center; padding:35px 25px; background:white; border-radius:28px; border:2px solid rgba(181,41,78,0.2); transition:all 0.4s; position:relative; overflow:hidden; box-shadow:0 8px 24px rgba(45,31,22,0.06); }
.benefit-card::before { content:''; position:absolute; top:0; left:0; right:0; height:5px; background:linear-gradient(90deg,#8B1538,#E8A0B0,#B5294E); opacity:0; transition:opacity 0.4s; }
.benefit-card:hover { transform:translateY(-10px); box-shadow:0 25px 50px rgba(45,31,22,0.12); border-color:rgba(181,41,78,0.4); }
.benefit-card:hover::before { opacity:1; }
.benefit-icon { width:80px; height:80px; margin:0 auto 20px; background:linear-gradient(135deg,#E8A0B0,#B5294E); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:32px; box-shadow:0 8px 20px rgba(181,41,78,0.12); }
.benefit-name { font-size:16px; font-weight:700; color:var(--text-dark); margin-bottom:10px; }
.benefit-desc { font-size:13px; color:var(--text-muted); line-height:1.6; font-weight:500; }

/* INGREDIENTS */
.ingredients {
  background:linear-gradient(180deg,#FFFAF8 0%,#FDF0EE 50%,#FFFAF8 100%);
  padding:100px 24px; text-align:center; position:relative; overflow:hidden;
}
.ingredients h2 { font-family:'Playfair Display',serif; font-size:36px; font-weight:400; font-style:italic; color:var(--text-dark); margin-bottom:10px; position:relative; z-index:10; text-shadow:0 2px 10px rgba(255,255,255,0.5); }
.ingredients-layout { display:flex; align-items:center; justify-content:center; gap:40px; margin-top:60px; position:relative; z-index:10; }
.ingredient-side { flex:0 0 220px; display:flex; flex-direction:column; gap:18px; }
.ingredient-card { background:rgba(255,255,255,0.92); border-radius:20px; padding:18px 20px; border:2px solid rgba(181,41,78,0.18); box-shadow:0 6px 20px rgba(45,31,22,0.07); text-align:left; transition:all 0.35s ease; position:relative; overflow:hidden; backdrop-filter:blur(8px); }
.ingredient-card::before { content:''; position:absolute; top:0; left:0; width:4px; height:100%; background:linear-gradient(180deg,#B5294E,#8B1538); border-radius:4px 0 0 4px; }
.ingredient-card.right::before { left:auto; right:0; border-radius:0 4px 4px 0; background:linear-gradient(180deg,#8B1538,#B5294E); }
.ingredient-card:hover { transform:translateY(-4px); border-color:rgba(181,41,78,0.4); box-shadow:0 12px 30px rgba(45,31,22,0.12); }
.ingredient-icon { font-size:22px; margin-bottom:6px; display:block; }
.ingredient-name { font-size:14px; font-weight:700; color:var(--text-dark); margin-bottom:4px; line-height:1.3; }
.ingredient-desc { font-size:11.5px; color:var(--text-muted); font-weight:500; line-height:1.5; }
.orbit-container { position:relative; width:450px; height:450px; flex-shrink:0; z-index:10; }
.orbit-ring { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:360px; height:360px; border:3px dashed rgba(181,41,78,0.35); border-radius:50%; animation:ringPulse 4s ease-in-out infinite; }
@keyframes ringPulse { 0%,100%{opacity:0.5;transform:translate(-50%,-50%) scale(1);}50%{opacity:0.8;transform:translate(-50%,-50%) scale(1.03);} }
.orbit-item { position:absolute; top:50%; left:50%; width:90px; height:90px; margin-left:-45px; margin-top:-45px; animation:orbitSpin 20s linear infinite; transform-origin:45px 45px; }
@keyframes orbitSpin { from{transform:rotate(0deg) translateX(180px) rotate(0deg);}to{transform:rotate(360deg) translateX(180px) rotate(-360deg);} }
.orbit-inner { width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; animation:counterSpin 20s linear infinite; }
@keyframes counterSpin { from{transform:rotate(0deg);}to{transform:rotate(-360deg);} }
.orbit-inner svg { filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1)); }
.orbit-label { display:block; font-size:12px; font-weight:700; color:#B5294E; margin-top:10px; letter-spacing:0.5px; white-space:nowrap; background:rgba(255,255,255,0.97); padding:4px 14px; border-radius:16px; box-shadow:0 2px 8px rgba(0,0,0,0.08); }
.center-bottle { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); z-index:20; width:140px; animation:gentlePulse 3s ease-in-out infinite; }
.center-bottle img { width:100%; height:auto; border-radius:16px; filter:drop-shadow(0 15px 30px rgba(139,21,56,0.12)); }
@keyframes gentlePulse { 0%,100%{transform:translate(-50%,-50%) scale(1);}50%{transform:translate(-50%,-50%) scale(1.05);} }

/* QUOTE BAND */
.quote-band { background:linear-gradient(135deg,#7A1530,#B5294E,#8B1538); padding:70px 24px; text-align:center; position:relative; overflow:hidden; }
.quote-band::before { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); opacity:0.6; }
.quote-band p { font-family:'Playfair Display',serif; font-size:28px; font-style:italic; color:#2d1f16; line-height:1.6; max-width:650px; margin:0 auto; position:relative; z-index:5; text-shadow:0 2px 10px rgba(0,0,0,0.1); }
.quote-band span { display:block; font-size:14px; font-weight:700; color:#F48FB1; margin-top:20px; letter-spacing:2px; text-transform:uppercase; font-family:'Quicksand',sans-serif; font-style:normal; position:relative; z-index:5; }

/* FLAVOURS */
.flavours { background:linear-gradient(180deg,#FDF0EE 0%,#FFFAF8 100%); padding:90px 24px; text-align:center; }
.flavours h2 { font-family:'Playfair Display',serif; font-size:32px; font-weight:400; color:var(--text-dark); font-style:italic; margin-bottom:10px; }
.flavours-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; max-width:1000px; margin:0 auto; }
@media(max-width:768px){.flavours-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:480px){.flavours-grid{grid-template-columns:1fr;}}
.flavour-card { background:#FFFAF8; border-radius:24px; padding:35px 28px; width:100%; text-align:center; border:2px solid rgba(181,41,78,0.2); transition:all 0.4s; position:relative; overflow:hidden; box-shadow:0 8px 24px rgba(45,31,22,0.06); }
.flavour-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:5px; background:linear-gradient(90deg,#8B1538,#E8A0B0,#B5294E); opacity:0; transition:opacity 0.4s; }
.flavour-card:hover { transform:translateY(-8px); box-shadow:0 20px 40px rgba(45,31,22,0.1); border-color:rgba(181,41,78,0.4); }
.flavour-card:hover::after { opacity:1; }
.flavour-card svg { margin:0 auto 14px; display:block; filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1)); }
.flavour-card p:first-of-type { font-weight:700; font-size:15px; color:var(--text-dark); margin-bottom:8px; }
.flavour-card p:last-of-type { font-size:12px; color:var(--text-muted); font-weight:500; }

/* CTA */
.cta { background:linear-gradient(180deg,#FDF5F2 0%,#F5DDE0 25%,#E8B0B8 50%,#C4687A 75%,#B5294E 100%); padding:130px 24px; text-align:center; position:relative; overflow:hidden; }
.cta-sun { position:absolute; bottom:15%; left:50%; transform:translateX(-50%); width:400px; height:400px; background:radial-gradient(circle,rgba(181,41,78,0.3) 0%,rgba(139,21,56,0.15) 40%,transparent 70%); border-radius:50%; pointer-events:none; animation:sunGlow 6s ease-in-out infinite; }
@keyframes sunGlow { 0%,100%{opacity:0.7;transform:translateX(-50%) scale(1);}50%{opacity:1;transform:translateX(-50%) scale(1.15);} }
.cta h2 { font-family:'Playfair Display',serif; font-size:48px; font-weight:400; font-style:italic; color:var(--text-dark); margin-bottom:18px; position:relative; z-index:10; text-shadow:0 2px 20px rgba(0,0,0,0.4); }
.cta-sub { font-size:18px; color:#5d3040; margin-bottom:50px; font-weight:600; position:relative; z-index:10; }
.cta-buttons { display:flex; justify-content:center; gap:20px; flex-wrap:wrap; position:relative; z-index:10; }
.cta-btn-primary { display:inline-block; background:linear-gradient(135deg,#7A1530,#B5294E); color:white; padding:18px 52px; border-radius:40px; font-size:16px; font-weight:700; letter-spacing:1px; text-transform:uppercase; border:none; cursor:pointer; font-family:'Quicksand',sans-serif; transition:all 0.3s; box-shadow:0 10px 30px rgba(139,21,56,0.15); }
.cta-btn-primary:hover { transform:scale(1.05) translateY(-3px); box-shadow:0 15px 40px rgba(139,21,56,0.25); }
.cta-btn-secondary { background:transparent; border:2.5px solid #B5294E; color:#B5294E; padding:16px 44px; border-radius:40px; font-size:15px; font-weight:700; font-family:'Quicksand',sans-serif; cursor:pointer; transition:all 0.3s; }
.cta-btn-secondary:hover { background:#8B1538; color:white; transform:translateY(-3px); }
.cta-note { font-size:14px; color:var(--text-muted); margin-top:35px; font-weight:600; position:relative; z-index:10; background:rgba(255,255,255,0.55); padding:8px 20px; border-radius:20px; display:inline-block; }



/* MISC */
.section-label { font-size:12px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#B5294E; margin-bottom:16px; }
.divider { width:60px; height:3px; background:linear-gradient(90deg,#B5294E,#8B1538); border-radius:3px; margin:20px 0; }
.fade-in { opacity:0; transform:translateY(30px); transition:all 0.8s ease-out; }
.fade-in.visible { opacity:1; transform:translateY(0); }

/* RESPONSIVE */
@media(max-width:768px) {
  .hero-title{font-size:36px;}
  .hero-bottle{width:220px;}
  .product-info-wrap{flex-direction:column;gap:40px;}
  .product-bottle-left{flex:0 0 auto;}
  .product-bottle-left img{max-width:300px;}
  .product-info-text h2{font-size:30px;}
  .vitamin-highlights{grid-template-columns:1fr;}
  .character-wrap{flex-direction:column;gap:40px;}
  .character-img{flex:0 0 auto;}
  .story-section h2{font-size:30px;}
  .orbit-container{width:320px;height:320px;}
  .orbit-ring{width:260px;height:260px;}
  .center-bottle{width:110px;}
  .cta h2{font-size:34px;}
}
`;

// ─── Root component ────────────────────────────────────────────────────────────

const Shottsberry: React.FC = () => {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (!styleRef.current) {
      const style = document.createElement("style");
      style.textContent = CSS;
      document.head.appendChild(style);
      styleRef.current = style;
    }

    // Intersection Observer for fade-in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      styleRef.current?.remove();
      styleRef.current = null;
    };
  }, []);

return (
  <div className="berry-page">
    <Hero />
    <ProductInfoSection />
    <CharacterSection />
    <StorySection />
    <Benefits />
    <Ingredients />
    <QuoteBand />
    <Flavours />
    <CTA />
  </div>
);
};

export default Shottsberry;
