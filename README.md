# 💐 A Little Gift for You

> A small digital gift made with flowers, memories, music, and a little bit of love. 🤍🩷

## ✨ About

**A Little Gift for You** is a beautiful interactive digital gift website created for someone special.

The website focuses on a soft and elegant visual experience using:

* 🤍 White & Soft Pink aesthetic
* 💐 Multi-flower bouquet
* 🦋 Floating butterflies
* 🌸 Floating petals and flowers
* 📸 Personal photo gallery
* 🎵 Background music
* ✨ Smooth animations
* 💌 Hidden messages
* 🎁 Interactive final surprise

The goal is not to create a normal website, but a small **digital experience** that feels personal and memorable.

---

## 🌷 Features

### 🏠 Beautiful Opening

The first screen presents a soft pink and white room scene with an elegant entrance animation.

### 📸 Photo Gallery

A collection of **13 personal photos** displayed in an artistic gallery with:

* Smooth reveal animations
* Image preview
* Next / Previous navigation
* Mobile swipe support
* Responsive layout

### 🎵 Music

A minimal music player allows the visitor to play the selected song while exploring the website.

### 🦋 Floating Effects

The website includes:

* Butterflies
* Flower petals
* Small flowers
* Leaves
* Sparkles

These elements move slowly around the page to create a dreamy atmosphere.

### 💐 Final Bouquet

The final section contains a large multi-flower bouquet made from:

* 🌹 Rose
* 🌷 Tulip
* 🌸 Peony
* 🌼 Daisy
* 💠 Hydrangea
* 🤍 Baby's Breath
* 🌿 Greenery

Clicking the bouquet triggers a special bloom animation with petals, glow, sparkles, and other effects.

---

## 🛠️ Built With

| Technology           | Purpose                  |
| -------------------- | ------------------------ |
| ⚛️ React             | User interface           |
| ⚡ Vite               | Development & build tool |
| 🎨 Tailwind CSS      | Styling                  |
| ✨ CSS Animations     | Visual effects           |
| 🎵 HTML5 Audio       | Music                    |
| 📱 Responsive Design | Mobile & Desktop         |

---

## 📁 Project Structure

```text
gift-for-you/
│
├── public/
│   ├── images/
│   │   ├── photos/
│   │   └── bouquet/
│   │
│   └── music/
│
├── src/
│   ├── components/
│   │   ├── Bouquet.jsx
│   │   ├── BouquetFlower.jsx
│   │   ├── Flower.jsx
│   │   ├── FloatingFlowers.jsx
│   │   ├── GiftButton.jsx
│   │   ├── MusicPlayer.jsx
│   │   ├── PetalTrail.jsx
│   │   ├── PhotoGallery.jsx
│   │   └── ...
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Gallery.jsx
│   │   ├── Message.jsx
│   │   └── FinalSurprise.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/gift-for-you.git
```

### 2. Open the project

```bash
cd gift-for-you
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

---

## 📦 Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages

Install `gh-pages`:

```bash
npm install --save-dev gh-pages
```

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Then deploy:

```bash
npm run deploy
```

Make sure `vite.config.js` contains the correct repository base:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/gift-for-you/',
})
```

Your website will be available at:

```text
https://YOUR_USERNAME.github.io/gift-for-you/
```

---

## 🎨 Design

### Color Palette

```text
White       #FFFFFF
Soft Pink   #F8C8DC
Rose Pink   #F4A6C1
Light Pink  #FCE7F0
Text        #4A4145
```

The design uses a minimal white background with soft pink accents to create a clean, elegant, and dreamy atmosphere.

---

## 📱 Responsive

The website is designed for:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

The experience is optimized especially for mobile devices.

---

## 💌 Personal Note

This project was created as a small gift.

Sometimes, a few minutes with someone can make an ordinary day feel a little brighter.

> **Thank you for those 10 minutes. 🤍**

---

## 📄 License

This project is a personal gift website.

The photos, music, and personal content are not intended for redistribution.

---

### Made with 🤍 + 🩷 + 💐

**A Little Gift for You**
