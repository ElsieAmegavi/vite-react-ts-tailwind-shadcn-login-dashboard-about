# React + TypeScript + Vite + shadcn/ui

This project is built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui, providing a modern and maintainable foundation for web applications.

## Tech Stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind
- [React Router](https://reactrouter.com/) - Declarative routing for React

## Project Structure

```
src/
├── components/
│   ├── ui/            # shadcn components
│   └── layout/        # layout components
│       ├── Header.tsx
│       └── Footer.tsx
├── pages/             # page components
│   ├── Home.tsx
│   └── About.tsx
├── lib/              # utility functions
│   └── utils.ts
├── routes/           # routing configuration
│   └── index.tsx
├── styles/           # global styles
│   └── globals.css
│   └── index.css
└── App.tsx
```

## Development Guide

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

### Adding shadcn/ui Components

To add a new shadcn/ui component, use the following command:

```bash
npx shadcn add [component-name]
```

Example:
```bash
npx shadcn add button
npx shadcn add card
npx shadcn add dialog
```

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Update `src/routes/index.tsx`:

```typescript
import { NewPage } from "@/pages/NewPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // ... existing routes
      {
        path: "new-page",
        element: <NewPage />,
      },
    ],
  },
])
```

3. Add the route to the navigation in `src/components/layout/Header.tsx`

### Updating Layout Components

#### Header Navigation

To add new navigation items, edit `src/components/layout/Header.tsx`:

```typescript
<Button
  variant={location.pathname === "/new-path" ? "secondary" : "ghost"}
  asChild
>
  <Link to="/new-path">New Page</Link>
</Button>
```

#### Footer Content

To update footer content, edit `src/components/layout/Footer.tsx`:

```typescript
export function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-800/50">
      <div className="container mx-auto px-4 py-6">
        {/* Add your footer content here */}
      </div>
    </footer>
  )
}
```

### Styling

- Global styles are in `src/styles/globals.css`
- Use Tailwind CSS utilities for component styling
- Custom animations and styles can be added to `globals.css`

### Type Safety

- Ensure all components and props are properly typed
- Use TypeScript's strict mode for better type safety
- Import types from shadcn/ui components when needed

### Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use layout components for shared structure
   - Place page-specific components in the pages directory

2. **Routing**
   - Keep route definitions centralized in `routes/index.tsx`
   - Use dynamic routes for parametrized URLs
   - Implement lazy loading for larger pages

3. **Styling**
   - Use Tailwind's utility classes
   - Create reusable component styles
   - Follow shadcn/ui's theming system

4. **State Management**
   - Use React hooks for local state
   - Consider React Context for shared state
   - Add state management libraries only when needed

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request
4. Follow the project's code style and conventions

## License

[Your License Here]
