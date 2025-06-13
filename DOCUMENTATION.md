# Campus Club Finder Documentation

## Application Overview

Campus Club Finder is a single-page application (SPA) that helps students discover and join campus clubs. The application is built using React and follows a component-based architecture. All data is stored locally in the browser using localStorage.

## Initial State

When the application first loads:

1. The home page is displayed with a welcome message and call-to-action
2. No clubs are joined by default
3. The club list page shows all clubs in a grid view, sorted alphabetically A-Z

## Data Management

### Club Data
- Stored in `src/data/clubs.js`
- Contains 5 default clubs with their details
- Each club has:
  - Unique ID
  - Name
  - Image
  - Short description
  - Full description
  - List of upcoming events

### Membership Data
- Stored in localStorage under the key 'campus_club_memberships'
- Array of club IDs that the user has joined
- Persists across browser sessions
- Managed through utility functions in `src/utils/storage.js`

## Routing

The application uses React Router v7 with the following routes:

- `/` - Home page
- `/clubs` - Club list page
- `/clubs/:clubId` - Club detail page
- `/about` - About page
- `*` - 404 Not Found page

## Components

### Navbar
- Present on all pages
- Shows current page with active state
- Responsive design with mobile menu

### Home Page
- Hero section with welcome message
- Features section with icons
- Call-to-action button to explore clubs

### Club List Page
- Sorting options (A-Z, Z-A)
- View toggle (Grid/List)
- Responsive card layout
- Each card shows:
  - Club image
  - Name
  - Short description
  - View Details button

### Club Detail Page
- Large club image
- Club name and description
- Join/Leave button
- Upcoming events list
- Responsive layout

### About Page
- Project information
- Features list
- Tech stack details

### 404 Page
- Friendly error message
- Return Home button

## Features in Detail

### Club Sorting
- Implemented using the `sort` method on the clubs array
- Sort order stored in component state
- Updates immediately when sort option changes

### View Toggle
- Grid view: 3 columns on desktop, 2 on tablet, 1 on mobile
- List view: Single column with horizontal layout
- View preference stored in component state

### Club Membership
- Join/Leave functionality using localStorage
- Membership status persists across page refreshes
- Visual feedback on button state

## Styling

- Tailwind CSS for all styling
- Custom utility classes for common components
- Responsive design using Tailwind breakpoints
- Consistent color scheme using primary/secondary colors

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- No IE11 support required
- Responsive design for all screen sizes

## Performance Considerations

- Lazy loading of images
- Minimal state management
- Efficient routing
- No unnecessary re-renders

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Responsive text sizes

## Future Improvements

1. Add search functionality
2. Implement club categories
3. Add user authentication
4. Create an admin panel
5. Add club creation/editing
6. Implement event calendar view
7. Add social sharing features
8. Implement notifications system 