# Project Assets

This directory contains image and video assets organized by project.

## Folder Structure

### B2B Product Projects
- `purchase-order-group/` - Purchase Order Group vendor workflow system
- `fulfillment-operation-tooling/` - Warehouse management platform
- `security-tooling/` - Enterprise security dashboard

### Visual + Brand Design Projects
- `paypal/` - PayPal.com complete brand redesign
- `audi/` - Audi.com iOS app and website redesign
- `airbnb-connect/` - Airbnb Connect host management tools
- `rewording-poster-design/` - REWORLDING: A Visual Identity for Global Futures Design

## Adding Assets

When adding images or videos to a project folder:

1. **Cover Image**: Add a `cover.jpg` or `cover.png` file as the main project image
2. **Additional Images**: Number them sequentially (e.g., `image-1.jpg`, `image-2.jpg`)
3. **Videos**: Use descriptive names (e.g., `demo.mp4`, `walkthrough.mp4`)

## Image Recommendations

- **Cover Images**: 1200x800px or larger, optimized for web
- **Project Images**: 1920x1080px or larger for detail views
- **Format**: Use WebP or JPG for photos, PNG for graphics with transparency
- **File Size**: Keep images under 500KB when possible for optimal performance

## Usage in Code

Project images are referenced in `src/data/projects.ts`. Update the media array for each project to point to the actual image paths once assets are added.
