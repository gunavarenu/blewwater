"use client";

import React, { useRef } from 'react';
import { assetPath } from "@/lib/assetPath";

/**
 * SHOTT'S — Orange Flavoured Vitamin Water
 * Converted from static HTML/CSS to a TypeScript React (TSX) component.
 *
 * Notes on the conversion:
 * - `class` -> `className`, `onclick` -> `onClick`, inline `style="..."` strings -> `style={{...}}` objects.
 * - The `document.querySelector(...).scrollIntoView()` calls were replaced with typed React refs
 *   and a `scrollToSection` helper.
 * - SVG presentation attributes were converted to their camelCase JSX equivalents
 *   (e.g. `stroke-width` -> `strokeWidth`, `text-anchor` -> `textAnchor`).
 * - An orphaned stray `</svg>` closing tag (with no matching opening tag) present in the
 *   original markup, right after the hero "orange" emoji spans, was removed since JSX requires
 *   balanced tags.
 * - The `<title>` / Google Fonts `<link>` that lived in the original `<head>` are not part of
 *   this component; add the Quicksand / Playfair Display font link (or use next/font) and the
 *   page `<title>` in your document shell instead.
 */

const ShottsOrange: React.FC = () => {
  const productInfoRef = useRef<HTMLElement | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);
  const ingredientsRef = useRef<HTMLElement | null>(null);
  const benefitsRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>): void => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
  :root {
    --sage: #F08030;
    --sage-dark: #C14800;
    --sage-light: #FFB87A;
    --cream: #FFFAF3;
    --warm-beige: #FFF0E0;
    --sand: #FFE0C0;
    --mango-green: #E8650A;
    --mango-light: #FFB87A;
    --mango-bright: #FFF0E0;
    --sunset-orange: #E8650A;
    --sunset-peach: #A83800;
    --sunset-gold: #FFD4A0;
    --sunset-pink: #D05800;
    --text-dark: #2d1f16;
    --text-soft: #5d4e3e;
    --text-muted: #8d7e6e;
    --water-blue: #C14800;
    --water-light: #E8650A;
    --bg-orange: #FFFAF3;
    --bg-yellow: #FFFAF3;
    --bg-warm: #FFF0E0;
  }


  /* ===== HERO SECTION ===== */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 24px 80px;
    overflow: hidden;
    background: linear-gradient(180deg, #A83800 0%, #E8650A 20%, #F08030 45%, #FFD4A0 70%, #FFF5E8 100%);
  }

  .cloud {
    position: absolute;
    opacity: 0.7;
    animation: driftCloud 20s ease-in-out infinite alternate;
    filter: drop-shadow(0 4px 8px rgba(232,101,10,0.12));
  }
  .cloud:nth-child(1) { top: 8%; left: 5%; animation-duration: 25s; }
  .cloud:nth-child(2) { top: 15%; right: 8%; animation-duration: 30s; animation-direction: reverse; }
  .cloud:nth-child(3) { top: 5%; left: 40%; animation-duration: 22s; animation-delay: -5s; }
  .cloud:nth-child(4) { top: 25%; left: 15%; animation-duration: 28s; animation-delay: -10s; opacity: 0.5; }
  .cloud:nth-child(5) { top: 10%; right: 25%; animation-duration: 24s; animation-delay: -8s; opacity: 0.45; }

  @keyframes driftCloud {
    0% { transform: translateX(-30px) translateY(0); }
    50% { transform: translateX(20px) translateY(-10px); }
    100% { transform: translateX(40px) translateY(5px); }
  }

  .birds {
    position: absolute;
    opacity: 0.5;
    animation: birdFly 15s linear infinite;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }
  .birds:nth-of-type(6) { top: 12%; left: 20%; animation-duration: 18s; }
  .birds:nth-of-type(7) { top: 8%; right: 30%; animation-duration: 22s; animation-delay: -5s; }
  .birds:nth-of-type(8) { top: 20%; left: 60%; animation-duration: 20s; animation-delay: -10s; opacity: 0.4; }

  @keyframes birdFly {
    0% { transform: translateX(0) translateY(0); }
    25% { transform: translateX(30px) translateY(-5px); }
    50% { transform: translateX(60px) translateY(0); }
    75% { transform: translateX(90px) translateY(5px); }
    100% { transform: translateX(120px) translateY(0); }
  }

  .orange {
    position: absolute;
    animation: floatBerries 6s ease-in-out infinite;
    pointer-events: none;
    user-select: none;
    line-height: 1;
    display: block;
  }

  @keyframes floatBerries {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }

  .water-splash {
    position: absolute;
    opacity: 0.35;
    animation: splashWave 8s ease-in-out infinite;
    filter: drop-shadow(0 4px 8px rgba(79,195,247,0.3));
  }
  .water-splash:nth-of-type(17) { bottom: 15%; left: 5%; width: 120px; animation-delay: 0s; }
  .water-splash:nth-of-type(18) { bottom: 20%; right: 8%; width: 100px; animation-delay: -3s; }
  .water-splash:nth-of-type(19) { bottom: 10%; left: 30%; width: 80px; animation-delay: -5s; opacity: 0.3; }

  @keyframes splashWave {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.35; }
    50% { transform: translateY(-10px) scale(1.05); opacity: 0.5; }
  }

  .hero-tagline {
    font-size: 13px;
    font-weight: 700;
    color: #FFE8C8;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    z-index: 10;
    opacity: 0.95;
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 52px;
    font-weight: 400;
    font-style: italic;
    color: #5A2800;
    text-align: center;
    line-height: 1.2;
    max-width: 650px;
    margin-bottom: 30px;
    position: relative;
    z-index: 10;
    text-shadow: 0 2px 20px rgba(0,0,0,0.4);
  }
  .hero-title em { color: #FFE8C8; font-weight: 600; }

  .hero-bottle {
    position: relative;
    z-index: 15;
    width: 280px;
    margin: 0 auto;
    animation: floatBottle 5s ease-in-out infinite;
    filter: drop-shadow(0 25px 50px rgba(168,56,0,0.12));
  }
  .hero-bottle img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 20px;
  }

  @keyframes floatBottle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  .hero-sub {
    font-size: 15px;
    color: #7A3800;
    text-align: center;
    margin-top: 40px;
    font-weight: 600;
    position: relative;
    z-index: 10;
    letter-spacing: 1.5px;
    background: rgba(255,255,255,0.55);
    padding: 10px 24px;
    border-radius: 30px;
    backdrop-filter: blur(8px);
  }

  .hero-scroll {
    text-align: center;
    margin-top: 30px;
    font-size: 12px;
    color: #FFF5EA;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: bounce 2.5s ease-in-out infinite;
    position: relative;
    z-index: 10;
    cursor: pointer;
    font-weight: 700;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }

  /* ===== PRODUCT INFO SECTION - NEW ===== */
  .product-info-section {
    background: linear-gradient(135deg, #FFFAF3 0%, #FFF5E8 50%, #FFFAF3 100%);
    padding: 100px 40px;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-info-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, #E8650A, #FFB87A, #A83800, transparent);
    opacity: 0.8;
  }

  .product-info-wrap {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 80px;
    position: relative;
    z-index: 5;
    width: 100%;
  }

  .product-bottle-left {
    flex: 0 0 45%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-bottle-left img {
    width: 100%;
    max-width: 420px;
    height: auto;
    filter: drop-shadow(0 30px 60px rgba(168,56,0,0.15));
    animation: gentleFloatLarge 6s ease-in-out infinite;
    border-radius: 24px;
    transition: transform 0.4s ease;
  }

  .product-bottle-left img:hover {
    transform: scale(1.05);
  }

  @keyframes gentleFloatLarge {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-12px) rotate(2deg); }
  }

  .product-info-text {
    flex: 1;
    padding: 20px 0;
  }

  .product-info-text .section-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #E8650A;
    margin-bottom: 16px;
  }

  .product-info-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: 400;
    font-style: italic;
    color: var(--text-dark);
    line-height: 1.3;
    margin-bottom: 24px;
  }

  .product-info-text .lead-text {
    font-size: 20px;
    color: #7A4820;
    line-height: 1.8;
    font-weight: 600;
    margin-bottom: 28px;
    background: rgba(200,80,10,0.3);
    padding: 20px 28px;
    border-radius: 20px;
    border-left: 4px solid var(--sunset-orange);
  }

  .product-info-text .info-paragraph {
    font-size: 17px;
    color: #7A4820;
    line-height: 1.9;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .product-info-text .info-paragraph strong {
    color: #E8650A;
    font-weight: 700;
  }

  .vitamin-highlights {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 30px;
  }

  .vitamin-item {
    background: rgba(255,255,255,0.8);
    padding: 18px 22px;
    border-radius: 16px;
    border: 2px solid rgba(232,101,10,0.2);
    transition: all 0.3s ease;
  }

  .vitamin-item:hover {
    transform: translateY(-4px);
    border-color: #E8650A;
    box-shadow: 0 8px 24px rgba(232,101,10,0.12);
  }

  .vitamin-item .vit-icon {
    font-size: 28px;
    margin-bottom: 8px;
    display: block;
  }

  .vitamin-item .vit-name {
    font-size: 15px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 4px;
  }

  .vitamin-item .vit-desc {
    font-size: 13px;
    color: var(--text-muted);
    font-weight: 500;
    line-height: 1.5;
  }

  .product-deco {
    position: absolute;
    opacity: 0.15;
    animation: spinSlow 25s linear infinite;
    filter: drop-shadow(0 4px 8px rgba(232,101,10,0.15));
  }

  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #E8650A, #A83800);
    border-radius: 3px;
    margin: 20px 0;
  }

  /* ===== CHARACTER SECTION ===== */
  .character-section {
    background: linear-gradient(180deg, #FFFAF3 0%, #FFF0E5 50%, #FFFAF3 100%);
    padding: 100px 24px;
    position: relative;
    overflow: hidden;
  }

  .character-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, #E8650A, #FFB87A, #A83800, transparent);
    opacity: 0.8;
  }

  .character-wrap {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 80px;
    position: relative;
    z-index: 5;
  }

  .character-img {
    flex: 0 0 45%;
    position: relative;
  }
  .character-img img {
    width: 100%;
    max-width: 500px;
    height: auto;
    filter: drop-shadow(0 20px 40px rgba(90,40,0,0.2));
    animation: gentleFloat 6s ease-in-out infinite;
    border-radius: 20px;
  }

  @keyframes gentleFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .character-text { flex: 1; }

  .section-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #E8650A;
    margin-bottom: 16px;
  }

  .character-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 38px;
    font-weight: 400;
    font-style: italic;
    color: var(--text-dark);
    line-height: 1.3;
    margin-bottom: 24px;
  }

  .character-text p {
    font-size: 17px;
    color: #7A4820;
    line-height: 1.9;
    font-weight: 500;
  }
  .character-text p strong {
    color: #E8650A;
    font-weight: 700;
  }

  .char-deco {
    position: absolute;
    opacity: 0.2;
    animation: spinSlow 20s linear infinite;
    filter: drop-shadow(0 4px 8px rgba(232,101,10,0.15));
  }

  /* ===== STORY SECTION ===== */
  .story-section {
    background: linear-gradient(180deg, #FFF5E8 0%, #FFE0C0 25%, #FFD0A0 50%, #F08030 75%, #E8650A 100%);
    padding: 120px 24px;
    position: relative;
    overflow: hidden;
  }

  .story-inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 5;
  }

  .story-photo {
    margin-bottom: 50px;
    position: relative;
    display: inline-block;
    max-width: 500px;
    width: 90%;
  }

  .story-photo img {
    width: 100%;
    height: auto;
    border-radius: 24px;
    filter: drop-shadow(0 20px 40px rgba(232,101,10,0.15));
    object-fit: cover;
  }

  .story-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: 400;
    font-style: italic;
    color: #5A2800;
    line-height: 1.3;
    margin-bottom: 20px;
    text-shadow: 0 2px 10px rgba(255,255,255,0.5);
  }

  .story-section p {
    font-size: 18px;
    color: #7A3010;
    line-height: 2;
    max-width: 650px;
    margin: 0 auto;
    font-weight: 500;
  }
  .story-section p strong {
    color: #ffffff;
    font-weight: 700;
  }

  .sunset-glow {
    position: absolute;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    height: 500px;
    background: radial-gradient(ellipse at center, rgba(232,101,10,0.3) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ===== BENEFITS ===== */
  .benefits {
    background: #FFFAF3;
    padding: 100px 24px;
    text-align: center;
    position: relative;
  }

  .benefits h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 400;
    font-style: italic;
    color: var(--text-dark);
    margin-bottom: 10px;
  }

  .benefits-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 60px;
    flex-wrap: wrap;
  }

  .benefit-card {
    width: 200px;
    text-align: center;
    padding: 35px 25px;
    background: white;
    border-radius: 28px;
    border: 2px solid rgba(232,101,10,0.2);
    transition: all 0.4s;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(90,40,0,0.06);
  }
  .benefit-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 5px;
    background: linear-gradient(90deg, #A83800, #FFB87A, #E8650A);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .benefit-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(90,40,0,0.12);
    border-color: rgba(232,101,10,0.4);
  }
  .benefit-card:hover::before { opacity: 1; }

  .benefit-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, #FFB87A, #E8650A);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    box-shadow: 0 8px 20px rgba(232,101,10,0.12);
  }

  .benefit-name {
    font-size: 16px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 10px;
  }
  .benefit-desc {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.6;
    font-weight: 500;
  }

  /* ===== INGREDIENTS ===== */
  .ingredients {
    background: linear-gradient(180deg, #FFFAF3 0%, #FFF0E5 50%, #FFFAF3 100%);
    padding: 100px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .ingredients h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 400;
    font-style: italic;
    color: var(--text-dark);
    margin-bottom: 10px;
    position: relative;
    z-index: 10;
    text-shadow: 0 2px 10px rgba(255,255,255,0.5);
  }

  /* Three-column layout for ingredients section */
  .ingredients-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 60px;
    position: relative;
    z-index: 10;
  }

  .ingredient-side {
    flex: 0 0 220px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .ingredient-card {
    background: rgba(255,255,255,0.92);
    border-radius: 20px;
    padding: 18px 20px;
    border: 2px solid rgba(232,101,10,0.18);
    box-shadow: 0 6px 20px rgba(90,40,0,0.07);
    text-align: left;
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(8px);
  }

  .ingredient-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #E8650A, #A83800);
    border-radius: 4px 0 0 4px;
  }

  .ingredient-card.right::before {
    left: auto;
    right: 0;
    border-radius: 0 4px 4px 0;
    background: linear-gradient(180deg, #A83800, #E8650A);
  }

  .ingredient-card:hover {
    transform: translateY(-4px);
    border-color: rgba(232,101,10,0.4);
    box-shadow: 0 12px 30px rgba(90,40,0,0.12);
  }

  .ingredient-card.right:hover {
    border-color: rgba(232,101,10,0.4);
  }

  .ingredient-icon {
    font-size: 22px;
    margin-bottom: 6px;
    display: block;
  }

  .ingredient-name {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .ingredient-desc {
    font-size: 11.5px;
    color: var(--text-muted);
    font-weight: 500;
    line-height: 1.5;
  }

  .orbit-container {
    position: relative;
    width: 450px;
    height: 450px;
    flex-shrink: 0;
    z-index: 10;
  }

  .orbit-ring {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    height: 360px;
    border: 3px dashed rgba(232,101,10,0.35);
    border-radius: 50%;
    animation: ringPulse 4s ease-in-out infinite;
  }

  @keyframes ringPulse {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.03); }
  }

  .orbit-item {
    position: absolute;
    top: 50%; left: 50%;
    width: 90px;
    height: 90px;
    margin-left: -45px;
    margin-top: -45px;
    animation: orbitSpin 20s linear infinite;
    transform-origin: 45px 45px;
  }

  .orbit-item:nth-child(1) { animation-duration: 20s; }
  .orbit-item:nth-child(2) { animation-duration: 20s; animation-delay: -5s; }
  .orbit-item:nth-child(3) { animation-duration: 20s; animation-delay: -10s; }
  .orbit-item:nth-child(4) { animation-duration: 20s; animation-delay: -15s; }

  @keyframes orbitSpin {
    from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
  }

  .orbit-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: counterSpin 20s linear infinite;
  }

  @keyframes counterSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  .orbit-inner svg {
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }

  .orbit-label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: #E8650A;
    margin-top: 10px;
    letter-spacing: 0.5px;
    white-space: nowrap;
    background: rgba(255,255,255,0.97);
    padding: 4px 14px;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  .center-bottle {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 140px;
    animation: gentlePulse 3s ease-in-out infinite;
  }
  .center-bottle img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    filter: drop-shadow(0 15px 30px rgba(168,56,0,0.12));
  }

  @keyframes gentlePulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.05); }
  }



  /* ===== QUOTE BAND ===== */
  .quote-band {
    background: linear-gradient(135deg, #C14800, #E8650A, #A83800);
    padding: 70px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .quote-band::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.6;
  }

  .quote-band p {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-style: italic;
    color: #2d1f16;
    line-height: 1.6;
    max-width: 650px;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  .quote-band span {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #FFAA60;
    margin-top: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    position: relative;
    z-index: 5;
  }

  /* ===== FLAVOURS ===== */
  .flavours {
    background: linear-gradient(180deg, #FFF0E5 0%, #FFFAF3 100%);
    padding: 90px 24px;
    text-align: center;
  }

  .flavours h2 {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 400;
    color: var(--text-dark);
    font-style: italic;
    margin-bottom: 10px;
  }

  .flavours-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.flavour-card {
  text-align: center;
}

/* Tablet */
@media (max-width: 768px) {
  .flavours-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 480px) {
  .flavours-grid {
    grid-template-columns: 1fr;
  }
}

  .flavour-card {
    background: #FFFAF3;
    border-radius: 24px;
    padding: 35px 28px;
    width: 100%;
    text-align: center;
    border: 2px solid rgba(232,101,10,0.2);
    transition: all 0.4s;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(90,40,0,0.06);
  }
  .flavour-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 5px;
    background: linear-gradient(90deg, #A83800, #FFB87A, #E8650A);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .flavour-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(90,40,0,0.1);
    border-color: rgba(232,101,10,0.4);
  }
  .flavour-card:hover::after { opacity: 1; }

  .flavour-card svg {
    margin: 0 auto 14px;
    display: block;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }
  .flavour-card p:first-of-type {
    font-weight: 700;
    font-size: 15px;
    color: var(--text-dark);
    margin-bottom: 8px;
  }
  .flavour-card p:last-of-type {
    font-size: 12px;
    color: var(--text-muted);
    font-weight: 500;
  }

  /* ===== CTA ===== */
  .cta {
    background: linear-gradient(180deg, #FFF5E8 0%, #FFE0C0 25%, #FFD0A0 50%, #F08030 75%, #E8650A 100%);
    padding: 130px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .cta-sun {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(232,101,10,0.3) 0%, rgba(168,56,0,0.15) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: sunGlow 6s ease-in-out infinite;
  }

  @keyframes sunGlow {
    0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
    50% { opacity: 1; transform: translateX(-50%) scale(1.15); }
  }

  .cta h2 {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 400;
    font-style: italic;
    color: var(--text-dark);
    margin-bottom: 18px;
    position: relative;
    z-index: 10;
    text-shadow: 0 2px 20px rgba(0,0,0,0.4);
  }

  .cta-sub {
    font-size: 18px;
    color: #7A4820;
    margin-bottom: 50px;
    font-weight: 600;
    position: relative;
    z-index: 10;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    position: relative;
    z-index: 10;
  }

  .cta-btn-primary {
    display: inline-block;
    background: linear-gradient(135deg, #C14800, #E8650A);
    color: white;
    padding: 18px 52px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    transition: all 0.3s;
    box-shadow: 0 10px 30px rgba(168,56,0,0.15);
  }
  .cta-btn-primary:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 0 15px 40px rgba(168,56,0,0.25);
  }

  .cta-btn-secondary {
    background: transparent;
    border: 2.5px solid #E8650A;
    color: #E8650A;
    padding: 16px 44px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    cursor: pointer;
    transition: all 0.3s;
  }
  .cta-btn-secondary:hover {
    background: #A83800;
    color: white;
    transform: translateY(-3px);
  }

  .cta-note {
    font-size: 14px;
    color: var(--text-muted);
    margin-top: 35px;
    font-weight: 600;
    position: relative;
    z-index: 10;
    background: rgba(255,255,255,0.55);
    padding: 8px 20px;
    border-radius: 20px;
    display: inline-block;
  }

  .cta .float-berries {
    position: absolute;
    opacity: 0.25;
    animation: floatBerries 8s ease-in-out infinite;
    filter: drop-shadow(0 4px 8px rgba(232,101,10,0.15));
  }


  /* ===== RESPONSIVE ===== */
  @media (max-width: 768px) {
    .hero-title { font-size: 36px; }
    .hero-bottle { width: 220px; }
    .product-info-wrap { flex-direction: column; gap: 40px; }
    .product-bottle-left { flex: 0 0 auto; }
    .product-bottle-left img { max-width: 300px; }
    .product-info-text h2 { font-size: 30px; }
    .vitamin-highlights { grid-template-columns: 1fr; }
    .character-wrap { flex-direction: column; gap: 40px; }
    .character-img { flex: 0 0 auto; }
    .story-section h2 { font-size: 30px; }
    .orbit-container { width: 320px; height: 320px; }
    .orbit-item { animation: orbitSpin 20s linear infinite; }
    @keyframes orbitSpin {
      from { transform: rotate(0deg) translateX(130px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
    }
    .orbit-ring { width: 260px; height: 260px; }
    .center-bottle { width: 110px; }
    .cta h2 { font-size: 34px; }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
      `}</style>
      {/* ===== HERO ===== */}
      <section className="hero">
        <svg className="cloud" width="120" height="50" viewBox="0 0 120 50">
          <ellipse cx="60" cy="35" rx="50" ry="15" fill="#fff8e1" opacity="0.9" />
          <ellipse cx="40" cy="25" rx="28" ry="18" fill="#fff8e1" opacity="0.9" />
          <ellipse cx="80" cy="22" rx="25" ry="16" fill="#fff8e1" opacity="0.9" />
        </svg>
        <svg className="cloud" width="100" height="42" viewBox="0 0 100 42">
          <ellipse cx="50" cy="30" rx="42" ry="12" fill="#ffecb3" opacity="0.8" />
          <ellipse cx="34" cy="22" rx="22" ry="15" fill="#ffecb3" opacity="0.8" />
          <ellipse cx="65" cy="20" rx="20" ry="14" fill="#ffecb3" opacity="0.8" />
        </svg>
        <svg className="cloud" width="80" height="34" viewBox="0 0 80 34">
          <ellipse cx="40" cy="24" rx="32" ry="10" fill="#fff8e1" opacity="0.7" />
          <ellipse cx="26" cy="16" rx="17" ry="11" fill="#fff8e1" opacity="0.7" />
          <ellipse cx="52" cy="14" rx="16" ry="11" fill="#fff8e1" opacity="0.7" />
        </svg>
        <svg className="cloud" width="60" height="26" viewBox="0 0 60 26">
          <ellipse cx="30" cy="18" rx="25" ry="8" fill="#ffecb3" opacity="0.6" />
          <ellipse cx="21" cy="12" rx="13" ry="9" fill="#ffecb3" opacity="0.6" />
          <ellipse cx="43" cy="10" rx="12" ry="8" fill="#ffecb3" opacity="0.6" />
        </svg>
        <svg className="cloud" width="50" height="22" viewBox="0 0 50 22">
          <ellipse cx="25" cy="15" rx="20" ry="7" fill="#fff8e1" opacity="0.55" />
          <ellipse cx="16" cy="10" rx="11" ry="8" fill="#fff8e1" opacity="0.55" />
          <ellipse cx="34" cy="8" rx="10" ry="7" fill="#fff8e1" opacity="0.55" />
        </svg>

        <svg className="birds" width="48" height="20" viewBox="0 0 48 20">
          <path d="M4 10 Q8 4 12 10" stroke="#8d6e63" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M18 7 Q22 1 26 7" stroke="#8d6e63" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M32 12 Q35 8 38 12" stroke="#8d6e63" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
        <svg className="birds" width="40" height="18" viewBox="0 0 40 18">
          <path d="M4 9 Q8 3 12 9" stroke="#8d6e63" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M20 6 Q24 1 28 6" stroke="#8d6e63" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
        <svg className="birds" width="30" height="14" viewBox="0 0 30 14">
          <path d="M2 7 Q6 2 10 7" stroke="#8d6e63" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M16 5 Q19 1 22 5" stroke="#8d6e63" strokeWidth="1" fill="none" strokeLinecap="round" />
        </svg>

        <span className="orange" style={{ top: '10%', left: '4%', fontSize: '36px', animationDelay: '0s', opacity: 0.35 }}>🍊</span>
        <span className="orange" style={{ top: '65%', left: '3%', fontSize: '30px', animationDelay: '-3s', opacity: 0.3 }}>🍊</span>
        <span className="orange" style={{ top: '12%', right: '5%', fontSize: '32px', animationDelay: '-2.5s', opacity: 0.35 }}>🍊</span>
        <span className="orange" style={{ top: '70%', right: '4%', fontSize: '28px', animationDelay: '-1.5s', opacity: 0.28 }}>🍊</span>
        <span className="orange" style={{ top: '85%', left: '48%', fontSize: '26px', animationDelay: '-4s', opacity: 0.25 }}>🍊</span>

        <svg className="water-splash" width="120" height="100" viewBox="0 0 120 100" style={{ opacity: 0.35 }}>
          <path d="M10 90 Q30 50 50 70 Q70 30 90 60 Q110 20 120 40" stroke="#4fc3f7" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
          <circle cx="25" cy="55" r="4" fill="#4fc3f7" opacity="0.5" />
          <circle cx="45" cy="40" r="3" fill="#4fc3f7" opacity="0.5" />
          <circle cx="70" cy="35" r="5" fill="#4fc3f7" opacity="0.5" />
          <circle cx="95" cy="45" r="3" fill="#4fc3f7" opacity="0.5" />
        </svg>
        <svg className="water-splash" width="100" height="80" viewBox="0 0 100 80" style={{ opacity: 0.35 }}>
          <path d="M5 70 Q25 40 40 55 Q60 25 80 50 Q95 30 100 45" stroke="#4fc3f7" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
          <circle cx="20" cy="45" r="3" fill="#4fc3f7" opacity="0.4" />
          <circle cx="50" cy="30" r="4" fill="#4fc3f7" opacity="0.4" />
          <circle cx="85" cy="40" r="3" fill="#4fc3f7" opacity="0.4" />
        </svg>
        <svg className="water-splash" width="80" height="70" viewBox="0 0 80 70" style={{ opacity: 0.3 }}>
          <path d="M5 60 Q20 35 35 50 Q55 25 70 45 Q78 30 80 40" stroke="#4fc3f7" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
          <circle cx="18" cy="40" r="2.5" fill="#4fc3f7" opacity="0.4" />
          <circle cx="45" cy="30" r="3" fill="#4fc3f7" opacity="0.4" />
        </svg>

        <p className="hero-tagline">Orange · Vitamin Water · Pure Goodness</p>
        <h1 className="hero-title">&quot;Winter was not complete<br />without <em>fresh oranges.</em>&quot;</h1>

        <div className="hero-bottle">
          <img src={assetPath("/flavours/orange/orange.png")} alt="SHOTT'S Orange Functional Vitamin Water bottle" />
        </div>

        <p className="hero-sub">Vitamin C · B6 · Zero Sugar · 100% Natural</p>
        <p className="hero-scroll" onClick={() => scrollToSection(productInfoRef)}> scroll to explore</p>
      </section>

      {/* ===== PRODUCT INFO SECTION - BOTTLE LEFT + INFO RIGHT ===== */}
      <section className="product-info-section" ref={productInfoRef}>
        <span className="orange" style={{ top: '10%', right: '12%', fontSize: '52px', opacity: 0.25, animationDelay: '-1s' }}>🍊</span>
        <span className="orange" style={{ bottom: '15%', left: '8%', fontSize: '44px', opacity: 0.25, animationDelay: '-3s' }}>🍊</span>
        <span className="orange" style={{ top: '60%', right: '5%', fontSize: '38px', opacity: 0.25, animationDelay: '-2s' }}>🍊</span>

        <div className="product-info-wrap">
          <div className="product-bottle-left">
            <img src={assetPath("/flavours/orange/orange-removebg-preview.png")} alt="SHOTT'S Orange Functional Vitamin Water bottle - Fresh Orange Flavour" />
          </div>
          <div className="product-info-text">
            <p className="section-label">Complete Your Daily Nutrition</p>
            <h2>Your Daily Vitamin Gap,<br /><em>Finally Filled.</em></h2>
            <div className="divider"></div>

            <p className="lead-text">
              Most of us Indians don&apos;t meet our daily vitamin requirements through food alone.
              <strong> SHOTT&apos;S</strong> bridges that gap — one refreshing sip at a time.
            </p>

            <p className="info-paragraph">
              Packed with essential vitamins your body needs every day, this isn&apos;t just a drink —
              it&apos;s your daily nutrition companion. The <strong>fresh oranges</strong> flavour
              brings back childhood Winter while delivering real health benefits.
            </p>

            <p className="info-paragraph">
              Whether you are rushing to work, hitting the gym, or just need a midday pick-me-up,
              SHOTT&apos;S ensures you don&apos;t miss out on the vitamins your diet leaves behind.
              <strong> Zero sugar. 100% natural. Pure goodness.</strong>
            </p>

            <div className="vitamin-highlights">
              <div className="vitamin-item">
                <span className="vit-icon">🍊</span>
                <p className="vit-name">Vitamin C</p>
                <p className="vit-desc">Boosts immunity &amp; fights daily fatigue</p>
              </div>
              <div className="vitamin-item">
                <span className="vit-icon">⚡</span>
                <p className="vit-name">Vitamin B6</p>
                <p className="vit-desc">Supports energy &amp; brain function</p>
              </div>
              
              <div className="vitamin-item">
                <span className="vit-icon">🌿</span>
                <p className="vit-name">Zero Sugar</p>
                <p className="vit-desc">Natural sweetness, no guilt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHARACTER SECTION - CLEAN KID IMAGE ===== */}
      <section className="character-section">
        <span className="orange" style={{ top: '15%', right: '8%', fontSize: '44px', opacity: 0.22, animationDelay: '-4s' }}>🍊</span>
        <span className="orange" style={{ bottom: '20%', left: '5%', fontSize: '38px', opacity: 0.22, animationDelay: '-1.5s' }}>🍊</span>

        <div className="character-wrap">
          <div className="character-img">
            {/* CLEAN KID IMAGE WITHOUT BACKGROUND */}
            <img src={assetPath("/flavours/orange/chinuorange.png")} alt="Indian school boy with water bottle - childhood winter nostalgia" />
          </div>
          <div className="character-text">
            <p className="section-label">Meet the Memory</p>
            <h2>That boy who waited for his sibling so that they could have a orange peel fight</h2>
            <div className="divider"></div>
            <p>
              Tiny hands reaching into the bag before it even touched the kitchen counter.
              Fresh peels scattered across the table. The bright citrus scent filling the house.
              Siblings squeezing orange peels at each other, laughing one minute and arguing the next..<br /><br />
              We made SHOTT&apos;S for that boy. For the fruit-market afternoons. For the after-school afternoons.
              For the oranges Mom brought home and the memories made around the kitchen table.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="story-section" ref={storyRef}>
        <div className="sunset-glow"></div>
        <div className="story-inner">
          <div className="story-photo">
            <img src={assetPath("/flavours/orange/chinuwithsister.png")} alt="Your story photo - replace this with your image" />
          </div>

          <p className="section-label" style={{ textAlign: 'center' }}>Our Story</p>
          <h2>Remember when<br /> peeling a fresh orange wasn&apos;t enough—you had to squeeze the peel at your sibling and start a full-blown citrus war?</h2>
          <div className="divider" style={{ margin: '18px auto 24px' }}></div>
          <p>
            Peels piling up on the table, laughter replacing complaints, and juicy orange segments disappearing faster than anyone could keep count.<strong style={{ color: '#FFE0B2', fontWeight: 800, textShadow: '0 1px 6px rgba(0,0,0,0.15)' }}>A burst of sweet, refreshing citrus</strong> — simple, vibrant, and shared with the people who made those moments special.
            <br /><br />
            We built <strong style={{ color: '#FFE0B2', fontWeight: 800, textShadow: '0 1px 6px rgba(0,0,0,0.15)' }}>SHOTT&apos;S</strong> to bring that back.
            Not nostalgia in a bottle, but the real thing — vibrant orange flavour, essential vitamins, minerals, and hydration — nothing you don&apos;t need, everything that made those simple moments unforgettable.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits" ref={benefitsRef}>
        <p className="section-label">Why SHOTT&apos;S</p>
        <h2>Good for you. Really.</h2>
        <div className="divider" style={{ margin: '18px auto 0' }}></div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">☀️</div>
            <p className="benefit-name">Vitamin Boost</p>
            <p className="benefit-desc">Vitamin C &amp; B6 for daily immunity &amp; energy</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💧</div>
            <p className="benefit-name">Deep Hydration</p>
            <p className="benefit-desc">Keeps you refreshed through the hottest afternoons</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌿</div>
            <p className="benefit-name">Zero Added Sugar</p>
            <p className="benefit-desc">Natural sweetness only, no guilt attached</p>
          </div>
        </div>
      </section>

      {/* ===== INGREDIENTS - WITH REAL BOTTLE IN CENTER ===== */}
      <section className="ingredients" ref={ingredientsRef}>
        <span className="orange" style={{ top: '6%', left: '6%', fontSize: '60px', opacity: 0.18, animationDelay: '-0.5s' }}>🍊</span>
        <span className="orange" style={{ bottom: '10%', right: '6%', fontSize: '56px', opacity: 0.18, animationDelay: '-2.5s' }}>🍊</span>
        <span className="orange" style={{ top: '45%', left: '2%', fontSize: '50px', opacity: 0.18, animationDelay: '-3.5s' }}>🍊</span>

        <p className="section-label">What is Inside</p>
        <h2>Your daily vitamin essentials.</h2>
        <div className="divider" style={{ margin: '18px auto 0' }}></div>

        <div className="ingredients-layout">

          {/* LEFT SIDE: Acids & Sweeteners */}
          <div className="ingredient-side">
            <div className="ingredient-card">
              <span className="ingredient-icon">🍋</span>
              <div className="ingredient-name">Citric Acid</div>
              <div className="ingredient-desc">Natural preservative that gives that sharp, tangy kick</div>
            </div>
            <div className="ingredient-card">
              <span className="ingredient-icon">🍏</span>
              <div className="ingredient-name">Malic Acid</div>
              <div className="ingredient-desc">Found in berries — adds that authentic sour depth</div>
            </div>
            <div className="ingredient-card">
              <span className="ingredient-icon">🌿</span>
              <div className="ingredient-name">Sweetener</div>
              <div className="ingredient-desc">Clean, zero-calorie sweetness — no sugar, no compromise</div>
            </div>
            <div className="ingredient-card">
              <span className="ingredient-icon">🌱</span>
              <div className="ingredient-name"> Acesulfame Potassium</div>
              <div className="ingredient-desc">A stable, high-intensity sweetener used to enhance sweetness without added sugar.</div>
            </div>
          </div>

          {/* CENTER: Orbit animation */}
          <div className="orbit-container">
            <div className="orbit-ring"></div>

            {/* Vitamin C */}
            <div className="orbit-item">
              <div className="orbit-inner">
                <svg width="55" height="62" viewBox="0 0 55 62">
                  <circle cx="27" cy="31" r="22" fill="#ff9800" opacity="0.95" />
                  <circle cx="27" cy="31" r="16" fill="#ffb74d" opacity="0.7" />
                  <text x="27" y="36" textAnchor="middle" fontFamily="Quicksand" fontSize="14" fontWeight="700" fill="white">C</text>
                </svg>
                <span className="orbit-label">Vitamin C</span>
              </div>
            </div>

            {/* Vitamin B1 */}
            <div className="orbit-item">
              <div className="orbit-inner">
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill="#4caf50" opacity="0.9" />
                  <circle cx="25" cy="25" r="14" fill="#81c784" opacity="0.7" />
                  <text x="25" y="30" textAnchor="middle" fontFamily="Quicksand" fontSize="12" fontWeight="700" fill="white">B1</text>
                </svg>
                <span className="orbit-label">Vitamin B1</span>
              </div>
            </div>

            {/* Vitamin B2 */}
            <div className="orbit-item">
              <div className="orbit-inner">
                <svg width="50" height="46" viewBox="0 0 50 46">
                  <circle cx="25" cy="23" r="19" fill="#2196f3" opacity="0.9" />
                  <circle cx="25" cy="23" r="13" fill="#64b5f6" opacity="0.7" />
                  <text x="25" y="28" textAnchor="middle" fontFamily="Quicksand" fontSize="12" fontWeight="700" fill="white">B2</text>
                </svg>
                <span className="orbit-label">Vitamin B2</span>
              </div>
            </div>

            {/* Vitamin B3 */}
            <div className="orbit-item">
              <div className="orbit-inner">
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill="#9c27b0" opacity="0.9" />
                  <circle cx="25" cy="25" r="14" fill="#ce93d8" opacity="0.7" />
                  <text x="25" y="30" textAnchor="middle" fontFamily="Quicksand" fontSize="12" fontWeight="700" fill="white">B3</text>
                </svg>
                <span className="orbit-label">Vitamin B3</span>
              </div>
            </div>

            {/* Vitamin B5 */}
            <div className="orbit-item">
              <div className="orbit-inner">
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill="#f44336" opacity="0.9" />
                  <circle cx="25" cy="25" r="14" fill="#ef5350" opacity="0.7" />
                  <text x="25" y="30" textAnchor="middle" fontFamily="Quicksand" fontSize="12" fontWeight="700" fill="white">B5</text>
                </svg>
                <span className="orbit-label">Vitamin B5</span>
              </div>
            </div>

            <div className="center-bottle">
              <img src="/flavours/orange/orange-removebg-preview.png" alt="SHOTT'S Orange Flavoured Vitamin Water" />
            </div>
          </div>

          {/* RIGHT SIDE: B Vitamins + Minerals */}
          <div className="ingredient-side">
            <div className="ingredient-card right">
              <span className="ingredient-icon">⚡</span>
              <div className="ingredient-name">Vitamin B3</div>
              <div className="ingredient-desc">Boosts energy metabolism and supports healthy skin</div>
            </div>
            <div className="ingredient-card right">
              <span className="ingredient-icon">🧠</span>
              <div className="ingredient-name">Vitamin B6</div>
              <div className="ingredient-desc">Essential for brain function and immune system support</div>
            </div>
            <div className="ingredient-card right">
              <span className="ingredient-icon">🛡️</span>
              <div className="ingredient-name">Zinc</div>
              <div className="ingredient-desc">Strengthens immunity and supports cell repair &amp; growth</div>
            </div>
            <div className="ingredient-card right">
              <span className="ingredient-icon">💪</span>
              <div className="ingredient-name">Iron</div>
              <div className="ingredient-desc">Carries oxygen through the blood, fights fatigue naturally</div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== QUOTE BAND ===== */}
      <div className="quote-band">
<p>
  &quot;Winter afternoons, juicy oranges, and little fights with siblings.<br />
  Somehow, the sweetest memories were always the ones we fought over.&quot;
</p>
        <span>— The SHOTT&apos;S Story</span>
      </div>

      {/* ===== FLAVOURS ===== */}
      <div className="flavours">
        <p className="section-label">Made with love</p>
        <h2>Four flavours. One feeling.</h2>
        <div className="flavours-grid">
          <div className="flavour-card">
            <svg width="52" height="60" viewBox="0 0 52 60" style={{ margin: '0 auto 14px', display: 'block' }}>
              <circle cx="26" cy="34" r="16" fill="#3949ab" />
              <circle cx="21" cy="29" r="5" fill="#7986cb" opacity="0.5" />
              <path d="M26 16
                       L29 22
                       L36 22
                       L31 26
                       L33 33
                       L26 28
                       L19 33
                       L21 26
                       L16 22
                       L23 22 Z"
                    fill="#2e7d32" />
            </svg>
            <p>Berries</p>
            <p>Sweet · Juicy · Fresh</p>
          </div>
          <div className="flavour-card">
            <svg width="52" height="60" viewBox="0 0 52 60" style={{ margin: '0 auto 14px', display: 'block' }}>
              <ellipse cx="26" cy="32" rx="15" ry="20" fill="#FFD54F" />
              <ellipse cx="22" cy="27" rx="5" ry="8" fill="#FFF59D" opacity="0.6" />
              <ellipse cx="34" cy="15" rx="5" ry="3" fill="#4CAF50" transform="rotate(-25 34 15)" />
              <path d="M26 16 Q28 12 26 8" stroke="#795548" strokeWidth="2" fill="none" />
              <path d="M26 12 L24 15 L28 15 Z" fill="#FBC02D" />
              <path d="M26 52 L24 49 L28 49 Z" fill="#FBC02D" />
            </svg>
            <p>Lemon</p>
            <p>Zesty · Minty · Refreshing</p>
          </div>
          <div className="flavour-card">
            <svg width="52" height="60" viewBox="0 0 52 60" style={{ margin: '0 auto 14px', display: 'block' }}>
              <circle cx="26" cy="32" r="16" fill="#ff9800" />
              <circle cx="22" cy="28" r="5" fill="#ffb74d" opacity="0.6" />
              <ellipse cx="31" cy="14" rx="5" ry="3" fill="#4caf50" transform="rotate(-25 31 14)" />
              <path d="M26 18 Q27 13 26 10" stroke="#795548" strokeWidth="2" fill="none" />
            </svg>
            <p>Orange</p>
            <p>Citrusy · Juicy · Classic</p>
          </div>
          <div className="flavour-card">
            <svg width="52" height="60" viewBox="0 0 52 60" style={{ margin: '0 auto 14px', display: 'block' }}>
              <ellipse cx="26" cy="36" rx="17" ry="21" fill="#7cb342" opacity="0.95" transform="rotate(-12 26 36)" />
              <ellipse cx="26" cy="32" rx="13" ry="17" fill="#aed581" opacity="0.7" transform="rotate(-12 26 32)" />
              <path d="M26 15 Q29 8 26 4 Q23 8 26 15" fill="#33691e" />
            </svg>
            <p> Mango</p>
            <p>Sweet · Nostalgic · Refreshing</p>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <section className="cta" ref={ctaRef}>
        <div className="cta-sun"></div>
        <span className="orange" style={{ top: '15%', left: '8%', fontSize: '38px', opacity: 0.45, animationDelay: '-1s' }}>🍊</span>
        <span className="orange" style={{ bottom: '20%', right: '10%', fontSize: '34px', opacity: 0.45, animationDelay: '-3s' }}>🍊</span>
        <span className="orange" style={{ top: '30%', right: '6%', fontSize: '30px', opacity: 0.4, animationDelay: '-2s' }}>🍊</span>
        <p className="section-label">One Last Sip</p>
        <h2>&quot;Some winters stay forever.&quot;</h2>
        <p className="cta-sub">Carry yours in every bottle of SHOTT&apos;S.</p>
        <div className="cta-buttons">
          <a className="cta-btn-secondary" href="/products">Explore All Flavours</a>
        </div>
        <p className="cta-note">Available in Berries · Lemon · Orange · Mango · Guava  </p>
      </section>
    </>
  );
};

export default ShottsOrange;
