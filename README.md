# KGST Next.js Calendar Page

This is a Next.js conversion of the Keshav Gore Smarak Trust calendar page, originally built with Node.js and EJS.

## Features

- ✅ Complete calendar view with month navigation
- ✅ Event filtering by category and location
- ✅ Interactive event modal with details
- ✅ Featured events section
- ✅ Regular programs section
- ✅ Subscription popup (appears after 1 minute)
- ✅ Subscribe to calendar email form
- ✅ Tailwind CSS with custom theme colors
- ✅ Fully responsive design
- ✅ Font Awesome icons
- ✅ Poppins font family

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000/calendar](http://localhost:3000/calendar) in your browser

## Project Structure

```
├── app/
│   ├── calendar/
│   │   └── page.tsx          # Main calendar page
│   ├── globals.css           # Global styles and Tailwind imports
│   └── layout.tsx            # Root layout
├── components/
│   ├── EventModal.tsx        # Event details modal component
│   └── SubscriptionPopup.tsx # Subscription popup component
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## Future Enhancement

The code structure is prepared for English/Marathi translation functionality. You can add a language toggle button and implement translation using React Context or a translation library like `next-i18next`.

## Customization

- Colors can be customized in `tailwind.config.js`
- Events data is currently hardcoded in `app/calendar/page.tsx` - you can connect this to a backend API
- Images should be placed in the `public/images/` directory

