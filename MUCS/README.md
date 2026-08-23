# MUCS — Madras University of Computer Science

React Router website for a Web Technology lab assignment.

## Run
```bash
npm install
npm run dev
```

## Files
- `src/main.jsx` — entry, wraps App in BrowserRouter
- `src/Layout.jsx` — Navbar (with reusable Dropdown component) + Footer
- `src/App.jsx` — all 16 page components + route definitions
- `src/index.css` — all styling (CSS variables for the palette)

## Concepts
- **Components**: Navbar, Dropdown, Footer, Home, About, etc.
- **Props**: `Dropdown` gets `title`/`items`; `Banner`/`CardGrid` get content via props
- **useState**: dropdown open state, mobile menu, contact form fields
- **Event handling**: `onClick` (dropdown/menu), `onChange`/`onSubmit` (contact form)
- **React Router**: `Routes`/`Route`/`Link`/`NavLink` in `App.jsx`
