# Sahay - Pro Bono Legal Assistance Platform

Sahay (सहाय) is a platform connecting pro bono lawyers with clients in need of legal assistance across India. The platform facilitates case matching and management while providing a bilingual interface in Hindi and English.

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Component Documentation](#component-documentation)
6. [Theme System](#theme-system)
7. [Getting Started](#getting-started)

## Architecture Overview

The application follows a component-based architecture using React and Material-UI, with a focus on:
- Modular components
- Bilingual support
- Type safety with TypeScript
- Responsive design
- Accessibility

## Tech Stack

- React 18.3.1
- TypeScript
- Material-UI
- Tailwind CSS
- Lucide Icons
- Vite (Build tool)

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature-specific components
├── constants/         # Application constants
├── theme/            # Theme configuration
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Features

### 1. Case Management
- Case submission with bilingual form
- Case listing with urgency indicators
- Case type categorization
- Status tracking

### 2. Lawyer Profile
- Experience and specialty display
- Availability tracking
- Case acceptance functionality
- Bilingual interface

### 3. Localization
- Hindi-English bilingual interface
- Culturally appropriate design
- Region-specific case types

## Component Documentation

### Header (`Header.tsx`)
The main navigation component displaying the application title and language switcher.

**Props:** None

**Usage:**
```tsx
<Header />
```

### CaseList (`CaseList.tsx`)
Displays a list of available cases with filtering and sorting capabilities.

**Props:**
- `cases: Client[]` - Array of case objects
- `onSelect: (caseId: string) => void` - Case selection handler

**Usage:**
```tsx
<CaseList cases={cases} onSelect={handleCaseSelect} />
```

### LawyerProfile (`LawyerProfile.tsx`)
Displays lawyer information and case acceptance functionality.

**Props:**
- `lawyer: Lawyer` - Lawyer information object
- `onAcceptCase: () => void` - Case acceptance handler

**Usage:**
```tsx
<LawyerProfile lawyer={lawyerData} onAcceptCase={handleAcceptCase} />
```

### CaseSubmissionForm (`CaseSubmissionForm.tsx`)
Bilingual form for submitting new cases.

**Props:**
- `onSubmit: (caseData: Omit<Client, 'id' | 'status'>) => void` - Form submission handler

**Usage:**
```tsx
<CaseSubmissionForm onSubmit={handleCaseSubmit} />
```

## Theme System

### Colors
The theme uses colors inspired by Indian heritage:
- Primary: Terra cotta red (#D16F4D)
- Secondary: Deep forest green (#1B4D3E)
- Background: Soft cream (#FBF7F4)

### Typography
- Primary font: Poppins
- Fallback fonts: Roboto, Helvetica, Arial
- Enhanced heading weights for better readability

### Components
Custom styled Material-UI components with:
- Rounded corners
- Consistent spacing
- Hover effects
- Shadow elevations

## Getting Started

1. Installation:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Type Definitions

### Client Interface
```typescript
interface Client {
  id: string;
  caseType: string;
  description: string;
  location: string;
  urgency: 'low' | 'medium' | 'high';
  status: 'pending' | 'matched' | 'closed';
}
```

### Lawyer Interface
```typescript
interface Lawyer {
  id: string;
  name: string;
  email: string;
  specialties: string[];
  experience: number;
  location: string;
  availableHours: number;
  cases: number;
}
```