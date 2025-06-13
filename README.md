# Campus Club Finder

A modern web application for discovering and joining campus clubs. Built with React, React Router, and Tailwind CSS.

## Features

- Browse through a curated list of campus clubs
- View detailed information about each club
- See upcoming events and activities
- Join clubs with a single click
- Sort clubs alphabetically
- Toggle between grid and list views
- Responsive design for all devices
- Local storage for club memberships

## Tech Stack

- React
- React Router v7
- Tailwind CSS
- Vite
- Heroicons
- ESLint

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/campus-club-finder.git
   cd campus-club-finder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
campus-club-finder/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── data/          # Static data
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Features in Detail

### Home Page
- Welcome message and brief description
- Eye-catching hero section
- Call-to-action button to explore clubs

### Club List Page
- Grid and list view options
- Alphabetical sorting (A-Z, Z-A)
- Club cards with images and descriptions
- Responsive layout

### Club Detail Page
- Detailed club information
- Upcoming events list
- Join/Leave club functionality
- Persistent membership status

### About Page
- Project information
- Tech stack details
- Feature list

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
