# 💌 Romantic Wedding Letter App

A beautiful, elegant single-page React web app designed to deliver a heartfelt wedding letter with stunning animations and romantic aesthetics.

## ✨ Features

- **Landing Screen**: Elegant hero section with invitation to open the letter
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Typewriter Effect**: Letter text appears with a romantic typing animation
- **Floating Hearts**: Subtle animated hearts in the background
- **Sparkle Effects**: Magical sparkles appear at the ending
- **Music Toggle**: Optional background music control
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **Elegant Typography**: Playfair Display, Cormorant, and Dancing Script fonts

## 🎨 Design

- **Colors**: Off-white/cream background with rose gold accents
- **Style**: Soft shadows, minimal luxury, wedding-inspired
- **Fonts**: 
  - Playfair Display (headings)
  - Cormorant (body text)
  - Dancing Script (signature)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Envelope.tsx          # Landing screen
│   ├── Letter.tsx            # Main letter display
│   ├── TypewriterText.tsx    # Typing animation
│   ├── HeartsBackground.tsx  # Floating hearts
│   ├── MusicPlayer.tsx       # Music toggle
│   └── Ending.tsx            # Final countdown screen
├── App.tsx                   # Main app component
└── index.css                 # Global styles
```

## 💝 Customization

### Letter Text
To customize the letter text, edit the `letterText` constant in `src/components/Letter.tsx`.

### Background Music
To add your own romantic background music:
1. Get a romantic song in MP3 format
2. Rename it to `music.mp3`
3. Place it in the `public/` folder
4. The app will automatically play it!

If no local music file is found, the app will attempt to use an online fallback source.

**Recommended sources for royalty-free music:**
- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)
- YouTube Audio Library

## 🛠️ Technologies

- React 19
- TypeScript
- Vite
- Framer Motion
- CSS3

---

Made with ❤️ for a special someone
