# Industrial SPA React Application

A modern, responsive Single Page Application (SPA) built with React and Next.js for industrial businesses. Features content management through JSON files and internationalization support for English and Turkish.

## Features

- 🏭 **Industrial Design**: Professional design tailored for manufacturing and engineering companies
- 🌐 **Internationalization**: Full i18n support for English and Turkish languages
- 📝 **JSON Content Management**: Easy content updates through JSON files - no developer needed
- 📱 **Responsive Design**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Built with Next.js for optimal performance
- 🎨 **Modern UI**: Uses Tailwind CSS and shadcn/ui components
- 📧 **Contact Forms**: Integrated contact forms with validation
- 🔄 **Smooth Navigation**: Smooth scrolling between sections

## Content Management

### How to Update Content

All website content is managed through JSON files located in the `public/content/` directory:

- `en.json` - English content
- `tr.json` - Turkish content

### Content Structure

The JSON files contain the following sections:

1. **Navigation** - Menu items
2. **Hero Section** - Main banner content
3. **About Section** - Company information and statistics
4. **Services Section** - Service offerings
5. **Products Section** - Product categories and items
6. **Why Choose Us** - Competitive advantages
7. **Contact Section** - Contact information and form labels
8. **Footer** - Footer content and links

### Example Content Update

To change the hero section title, edit the JSON file:

\`\`\`json
{
  "hero": {
    "title": "Your New Title Here",
    "subtitle": "Your New Subtitle",
    "description": "Your new description..."
  }
}
\`\`\`

## Language Support

The application supports:
- **English (EN)** - Default language
- **Turkish (TR)** - Secondary language

Users can switch languages using the language switcher in the navigation bar.

## Sections

1. **Hero Section** - Eye-catching banner with call-to-action buttons
2. **About Section** - Company overview with statistics and features
3. **Services Section** - Detailed service offerings with icons
4. **Products Section** - Tabbed product categories
5. **Why Choose Us** - Key differentiators and advantages
6. **Contact Section** - Contact information and inquiry form
7. **Footer** - Company info, quick links, and social media

## Customization

### Adding New Services

Edit the `services.items` array in your JSON files:

\`\`\`json
{
  "services": {
    "items": [
      {
        "title": "New Service",
        "description": "Service description",
        "icon": "factory"
      }
    ]
  }
}
\`\`\`

Available icons: `factory`, `engineering`, `quality`, `maintenance`, `support`, `training`

### Adding New Products

Edit the `products.categories` array:

\`\`\`json
{
  "products": {
    "categories": [
      {
        "name": "Category Name",
        "items": [
          {
            "name": "Product Name",
            "description": "Product description"
          }
        ]
      }
    ]
  }
}
\`\`\`

### Updating Contact Information

Edit the `contact.info` section:

\`\`\`json
{
  "contact": {
    "info": {
      "address": "Your Address",
      "phone": "Your Phone",
      "email": "Your Email",
      "hours": "Your Business Hours"
    }
  }
}
\`\`\`

## Technical Details

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Language**: TypeScript
- **Icons**: Lucide React
- **Responsive**: Mobile-first design approach

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

The application can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS
- Digital Ocean

## Support

For technical support or customization requests, please contact your development team.
