# REWORLDING Project Assets

## Folder Structure

Place your images in this folder with the following naming convention:

### Required Images

1. **Primary Poster** (Main Hero Image)
   - File: `primary-poster.png` or `primary-poster.jpg`
   - Recommended size: 1200x1600px or larger (vertical poster)
   - Aspect ratio: 3:4 (vertical)
   - This will be used as the full-width primary poster display

2. **Poster Variations** (6 images)
   - Files: `poster-1.jpg`, `poster-2.jpg`, `poster-3.jpg`, `poster-4.jpg`, `poster-5.jpg`, `poster-6.jpg`
   - Recommended size: 1200x900px or larger
   - Aspect ratio: 4:3
   - These will be displayed in a 3-column grid

3. **Detail Shots** (4 images)
   - Files: `detail-1.jpg`, `detail-2.jpg`, `detail-3.jpg`, `detail-4.jpg`
   - Recommended size: 1400x1050px or larger
   - Aspect ratio: 4:3
   - These will be displayed in a 2-column grid

4. **Applications** (6 mockup images)
   - Files: `application-1.jpg`, `application-2.jpg`, `application-3.jpg`, `application-4.jpg`, `application-5.jpg`, `application-6.jpg`
   - Recommended size: 1200x900px or larger
   - Aspect ratio: 4:3
   - These will be displayed in a 3-column grid

## Image Optimization

- Format: Use JPG for photos, PNG for graphics with transparency
- File size: Keep images under 500KB when possible
- Quality: Optimize for web while maintaining visual quality

## Updating the Page

After adding images, update `src/pages/RewordingProject.tsx` to reference your actual image paths:

```typescript
import heroImage from "@/assets/projects/rewording-poster-design/hero.jpg";
import poster1 from "@/assets/projects/rewording-poster-design/poster-1.jpg";
// ... etc
```

Then update the arrays:
- `mainPoster` → your hero image
- `posterVariations` → array of 6 poster images
- `detailShots` → array of 4 detail images
- `applications` → array of 6 application images
