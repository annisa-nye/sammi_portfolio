# Sammi Carr Portfolio – Horizontally-Scrolling Art Gallery Website

This project is a bold, playful, and immersive portfolio for **Sammi Carr**, a multidisciplinary visual artist based on Dharawal land (NSW). The website mimics the experience of walking through a physical art gallery — using horizontal transitions and thoughtful layout spacing to showcase Sammi’s work with elegance and impact.

It is designed for professional submissions (grants/residencies) while offering a rich, curated alternative to Instagram.

---

## 🎯 Goals

- Showcase Sammi’s artwork and animations in a highly visual, immersive layout
- Mimic the experience of a real-life art gallery through horizontal movement and visual pacing
- Replace Instagram as the primary point of reference for Sammi’s practice
- Make the site mobile-responsive, intuitive, and memorable
- Prepare the site for future features like an online shop, blog, and exhibition archive

---

## 🎨 Design Philosophy

Inspired by [fbi.radio](https://fbi.radio), the website focuses on:

- A **white background** and clean typography
- **Center-aligned, floating top menu** that shows the current section
- **Horizontal scroll transitions** between each full-screen section (simulated using Framer Motion)
- Individual artworks displayed with generous spacing, like walking through a gallery
- Title cards, subtle animations, and gallery labels under artworks

---

## 🧭 Navigation Behavior

- Navigation bar sits centered at the top
- Displays: Home, About, CV, Gallery, Residencies, Contact
- When the user is on the **Gallery** page, a **secondary sub-menu** appears:
  - Paintings, Illustrations, Collages, Digital, Animations

---

## 🖼 Gallery Behavior

- Sections scroll **left to right**
- Each artwork is framed, centered, and spaced apart like a museum wall
- **Animations** are vertical and may be embedded as GIFs or videos
- Thunderfox video is embedded within the Animations section

---

## 📋 Implementation Plan

### ✅ Phase 1 – Base Layout & Navigation
- [ ] Create full-screen routes for each section
- [ ] Implement horizontal transitions using **Framer Motion**
- [ ] Add top-centered nav bar with active section highlight

### ✅ Phase 2 – Section Styling
- [ ] Home: Logo, caption, optional GIF
- [ ] About: Italic bio, centered text, 4x4 headshot
- [ ] CV: Remove heading and bullet points, center-align
- [ ] Gallery: Horizontal scroll galleries for Paintings, Illustration, Collage, Digital
- [ ] Animations: Vertical display with looping GIFs and YouTube embed
- [ ] Residencies: Scrollable section with residency images

### ✅ Phase 3 – Gallery Aesthetic
- [ ] Add spacing between artworks like gallery walls
- [ ] Add title cards under artworks
- [ ] Optional: modal view for enlarged artworks

---

## 🧪 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: Vercel
- **Image Storage**: AWS S3
- **Forms**: Netlify Forms or Formspree

---

## 🔮 Future Enhancements

- Online shop with external checkout or Shopify
- Blog and exhibition archive
- Dark mode toggle

---

Created with love for Sammi Carr’s art practice.