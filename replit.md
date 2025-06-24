# Political Orientation Quiz - Replit Configuration

## Overview

This is a full-stack political orientation quiz application built with React frontend and Express backend. The application presents users with 15 randomly selected political questions and provides personalized results based on their responses. It supports multiple languages (Korean, English, Japanese) and features a modern, responsive design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **State Management**: Custom React hooks for quiz state and language preferences
- **Animations**: Framer Motion for smooth transitions
- **Internationalization**: Built-in multi-language support (Korean, English, Japanese)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Storage**: In-memory storage with interface for future database integration
- **Session Management**: Express sessions with PostgreSQL session store ready
- **Development**: Hot reload with Vite integration in development mode

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User management schema defined in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Current State**: Memory-based storage with database-ready architecture

## Key Components

### Quiz System
- **Question Pool**: Large collection of political orientation questions in multiple languages
- **Random Selection**: 20 questions randomly selected from the pool each session
- **Scoring System**: Numerical scoring with political orientation calculation
- **Results Engine**: Categorizes users into political orientation types with detailed descriptions

### User Interface
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Dark Mode**: Full dark mode support with system preference detection
- **Language Switching**: Seamless language switching without page reload
- **Progressive Enhancement**: Works without JavaScript for basic functionality

### State Management
- **Quiz State**: Manages current question, answers, and progress
- **Language Preferences**: Persistent language selection in localStorage
- **Theme Management**: Dark/light mode with system preference integration

## Data Flow

1. **Quiz Initialization**: User starts quiz → Random questions selected → Quiz state initialized
2. **Question Flow**: User answers question → Score recorded → Next question loaded or results calculated
3. **Results Generation**: All answers processed → Political orientation calculated → Results displayed
4. **Sharing**: Results can be shared via social media or direct links

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Build Tools**: Vite, TypeScript, PostCSS
- **Styling**: Tailwind CSS, Radix UI components
- **Utilities**: clsx, class-variance-authority for styling
- **State**: TanStack Query for server state (prepared for future API calls)
- **Forms**: React Hook Form with Zod validation (prepared for user features)
- **Animations**: Framer Motion for smooth UI transitions

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Session Management**: connect-pg-simple for PostgreSQL session storage

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 and PostgreSQL 16 modules
- **Hot Reload**: Vite development server with Express integration
- **Port Configuration**: Development server on port 5000, external port 80
- **File Watching**: Automatic restart on file changes

### Production Build
- **Frontend Build**: Vite builds optimized static assets to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets in production
- **Deployment Target**: Replit autoscale deployment

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Session Storage**: PostgreSQL-backed sessions for scalability
- **Asset Serving**: Static file serving with proper caching headers

## Changelog

Changelog:
- June 24, 2025. Initial setup
- June 24, 2025. Fixed Cloudflare Pages deployment issues: resolved terser error, created proper static build configuration, improved mobile text wrapping
- June 24, 2025. Updated quiz from 15 to 20 questions for more comprehensive political orientation assessment

## User Preferences

Preferred communication style: Simple, everyday language.