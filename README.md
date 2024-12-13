# README: Project Structure and Guidelines

This document outlines the directory structure of the project and provides guidance on maintaining consistency in the Feature-Sliced Design (FSD) architecture. The goal is to ensure a scalable, maintainable, and easy-to-understand codebase, enabling all contributors, including interns, to work efficiently.

## Project Structure

```
src/
├── app/                                  # Application's root directory
│   ├── layout.tsx                        # Root layout for the app
│   ├── globals.css                       # Global styles
│   ├── dashboard/                        # Feature-specific route
│   │   ├── layout.tsx                    # Nested layout for Dashboard
│   │   ├── page.tsx                      # Dashboard's main page
│   │   ├── user/                         # Nested routes and entities
│   │   │   ├── [userId]/                 # Dynamic route for users
│   │   │   │   ├── page.tsx              # User details page
│   │   │   │   ├── loading.tsx           # Loading state for user page
│   │   │   │   └── error.tsx             # Error state for user page
│   │   ├── components/                   # Feature-specific components
│   │   │   ├── UserCard.tsx
│   │   │   └── UserList.tsx
│   │   └── model/                        # Feature-specific logic
│   │       ├── dashboard.api.ts         # API calls for dashboard
│   │       ├── dashboard.slice.ts       # State management (e.g., Zustand or Redux)
│   │       └── dashboard.hooks.ts       # Custom hooks
│   ├── auth/                             # Auth-related routes and features
│   │   ├── layout.tsx
│   │   ├── page.tsx                      # Login/Register page
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   └── model/
│   │       ├── auth.api.ts
│   │       ├── auth.slice.ts
│   │       └── auth.hooks.ts
│   └── profile/
│       ├── layout.tsx
│       ├── page.tsx                      # Profile page
│       └── components/
│           └── ProfileDetails.tsx
│
├── entities/                             # Reusable business/domain entities
│   ├── user/
│   │   ├── components/
│   │   │   ├── UserAvatar.tsx
│   │   │   ├── UserDropdown.tsx
│   │   ├── model/
│   │   │   ├── user.types.ts
│   │   │   ├── user.api.ts
│   │   └── index.ts
│   └── subscription/
│       ├── components/
│       │   ├── SubscriptionBadge.tsx
│       │   └── SubscriptionCard.tsx
│       ├── model/
│       │   ├── subscription.types.ts
│       │   ├── subscription.api.ts
│       └── index.ts
│
├── features/                             # Complex features combining entities
│   ├── subscription-management/
│   │   ├── components/
│   │   │   ├── SubscriptionTable.tsx
│   │   ├── model/
│   │   │   ├── subscription-management.slice.ts
│   │   │   ├── subscription-management.hooks.ts
│   │   └── index.ts
│   └── notifications/
│       ├── components/
│       │   ├── NotificationBell.tsx
│       │   ├── NotificationList.tsx
│       ├── model/
│       │   ├── notifications.slice.ts
│       │   ├── notifications.hooks.ts
│       └── index.ts
│
├── shared/                               # Shared, reusable utilities and components
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   ├── lib/
│   │   ├── axios.ts                      # Axios instance
│   │   ├── form-validators.ts            # Reusable validation logic
│   ├── styles/
│   │   ├── global.css
│   │   └── theme.css
│   └── index.ts
└── widgets/                              # UI components combining multiple features
    ├── Header.tsx
    ├── Sidebar.tsx
    └── Footer.tsx
```

## Understanding the Feature-Sliced Design (FSD) Approach

### Key Principles
1. **Separation by Responsibility:** Each folder represents a specific responsibility or feature of the application.
2. **Reusability:** Common components, logic, or utilities are placed in `shared/` or `entities/` to avoid duplication.
3. **Scalability:** New features or components should be added to their respective folders while maintaining clear boundaries.

### Directory Breakdown
- **app/**: Contains high-level application routes and layouts. Each route or feature is isolated into its directory.
- **entities/**: Stores domain/business entities such as `user` and `subscription` which are reusable across features.
- **features/**: Combines multiple entities and adds complex logic. These are larger building blocks of the application.
- **shared/**: Houses utilities, global styles, reusable components, and shared logic.
- **widgets/**: UI components combining multiple features to build the overall interface, such as `Header`, `Sidebar`, and `Footer`.

## Adding New Features or Components

1. **Determine the Scope:**
   - If it’s a standalone feature (e.g., notifications), create a new folder in `features/`.
   - If it’s a reusable domain entity (e.g., user profile), add it under `entities/`.
   - For global use components (e.g., buttons), add them to `shared/components/`.

2. **Follow the Naming Conventions:**
   - Use `kebab-case` for folders and `PascalCase` for components.
   - Keep filenames descriptive (e.g., `UserAvatar.tsx`, `notifications.slice.ts`).

3. **Write Modular Code:**
   - Place API calls in `model/*.api.ts`.
   - Handle state management in `model/*.slice.ts`.
   - Use custom hooks in `model/*.hooks.ts`.

4. **Update Documentation:**
   - If new folders or features are added, update this README.

## Notes

- This structure is **only an example** and should be adapted based on project requirements.
- Ensure all code is documented and follows established coding standards.
- Use version control effectively to track changes and maintain code quality.

