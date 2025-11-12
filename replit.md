# Uttarakhand Disaster Early Warning System

## Overview

A full-stack disaster monitoring and early warning application designed specifically for Uttarakhand, India. The system provides real-time tracking of flood and landslide risks, monitors pilgrimage routes (including Char Dham), and enables community-based hazard reporting. Built with React, Express.js, and a focus on mobile-first accessibility for field workers and rural communities operating in challenging outdoor conditions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React with Vite for fast development and optimized builds
- TypeScript/JavaScript hybrid approach (`.tsx` components, `.js` utilities)
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod resolvers for form validation

**UI Framework:**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with Material Design 3 adaptations
- Custom design system optimized for emergency services (high contrast, mobile-first)
- Inter font for Latin text, Noto Sans Devanagari for Hindi/regional languages

**Design Decisions:**
- **Mobile-first critical**: Optimized for 360px-414px viewports where field access occurs
- **High contrast ratios**: Ensures visibility in outdoor/bright conditions common in mountainous regions
- **Information density over aesthetics**: Clear data hierarchy for quick comprehension during emergencies
- **Universal iconography**: Color-coded risk levels (low/medium/high/critical) with consistent visual feedback

**State Management:**
- React Query handles all API interactions with built-in caching and background refetching
- Custom hooks for reusable logic (toast notifications, mobile detection)
- Global query client configuration with standardized error handling

**Routing & Pages:**
- Component-based page structure in `client/src/pages/`
- Client-side routing (implementation details not visible in current files)

### Backend Architecture

**Technology Stack:**
- Express.js server with TypeScript
- ESM module system throughout the codebase
- Vite middleware integration for development hot-module replacement

**Server Structure:**
- `server/index.ts`: Main entry point with middleware configuration and request logging
- `server/routes.ts`: API route registration (currently minimal, ready for expansion)
- `server/storage.ts`: Data access layer with in-memory storage implementation
- `server/vite.ts`: Development server setup with Vite middleware integration

**Data Layer Design:**
- Abstract storage interface (`MemStorage` class) for CRUD operations
- Current implementation uses in-memory Map-based storage for users
- **Architectural Decision**: Storage interface is designed to be database-agnostic, allowing easy migration from in-memory to persistent storage (PostgreSQL/other) without changing API contracts
- **Rationale**: Enables rapid prototyping while maintaining clean separation between business logic and data persistence

**API Design:**
- RESTful API with `/api` prefix for all endpoints
- JSON request/response format
- Request body parsing with raw body preservation for webhooks/signatures
- Comprehensive request logging (method, path, status, duration, response preview)

**Development Workflow:**
- Vite HMR for instant frontend updates
- TypeScript compilation with `tsx` runtime
- Separate build process: Vite for client, esbuild for server
- Production deployment serves pre-built static assets

### External Dependencies

**Database:**
- **Planned**: Drizzle ORM configured with support for Neon Postgres serverless
- **Current State**: In-memory storage (Map-based) for development
- **Migration Path**: Drizzle schema definitions will enable seamless transition to PostgreSQL when needed
- `connect-pg-simple` for PostgreSQL session storage (prepared but not active)

**UI Component Libraries:**
- Radix UI primitives (18+ component packages) for accessible, unstyled base components
- Lucide React for iconography
- Embla Carousel for image/content carousels
- CMDK for command palette functionality
- Vaul for drawer components
- React Day Picker with date-fns for date selection

**Validation & Forms:**
- Zod for runtime type validation and schema definition
- React Hook Form for performant form state management
- `@hookform/resolvers` for Zod integration

**Utilities:**
- `class-variance-authority` for component variant styling
- `clsx` and `tailwind-merge` for conditional CSS class composition
- `nanoid` for unique ID generation

**Build Tools:**
- Vite for frontend bundling and development
- esbuild for backend compilation
- PostCSS with Tailwind CSS and Autoprefixer
- TypeScript for type checking (without emitting, using `tsx` runtime)

**Development Environment:**
- Node.js 20.x+ required
- ESM module system exclusively (no CommonJS)
- Replit deployment environment with workflow migration notes

**Monitoring & API Integration:**
- Infrastructure prepared for disaster data APIs (weather, seismic, river monitoring)
- Community reporting endpoints planned
- Real-time alert distribution system architecture ready for implementation