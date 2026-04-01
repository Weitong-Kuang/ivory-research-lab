# Ivory Lab AI Development Rules

This document defines strict rules for AI-assisted development in this project.

The goal is to keep the codebase:
- minimal
- production-ready
- dependency-light
- easy to deploy

---

## 1. Core Principles

- Prefer simplicity over flexibility
- Prefer deletion over addition
- Prefer native framework features over external libraries
- Avoid unnecessary abstraction
- Every new file must have a clear reason to exist

---

## 2. Framework Priority

Always prioritize:

1. Next.js built-in features
2. React built-in features
3. Browser-native APIs

Only introduce external libraries when absolutely necessary.

---

## 3. Architecture Rules

- Do not create service layers unless strictly required
- Do not introduce repository patterns
- Do not create global state management unless unavoidable
- Avoid unnecessary folders and deep nesting
- Keep components colocated with usage

---

## 4. React Component Rules

- Server Components are default
- Use Client Components only when required for interactivity
- Avoid "use client" unless necessary
- Do not split components prematurely

---

## 5. Styling Rules

- Use Tailwind CSS only
- Do not use CSS-in-JS
- Do not create separate CSS files unless absolutely required

---

## 6. Data Flow Rules

- Prefer Server Actions
- Avoid unnecessary API layers
- Keep data flow direct and traceable

---

## 7. Dependency Rules

Before adding any dependency:

- Explain why it is needed
- Confirm native solution is insufficient
- If not critical, do not add it

---

## 8. Stability Rules (SSR Safety)

Avoid:

- Date.now in render
- Math.random in render
- client/server inconsistent output
- dynamic values during SSR rendering

Ensure hydration stability.

---

## 9. Routing Rules

- Use Next.js App Router only
- Do not build custom routing logic
- Keep route structure flat and clear

---

## 10. SEO & Production Rules

- Use semantic HTML
- Use Next.js metadata API
- Ensure pages work without JavaScript
- App must be deployable on Vercel at any time

---

## 11. Refactoring Rules

When changing code:

- Prefer simplifying existing code
- Remove unnecessary abstractions
- Avoid introducing new patterns unless required

---

## 12. Anti-Overengineering Rule

Do NOT introduce:

- unnecessary hooks
- abstraction layers
- enterprise patterns
- global stores
- complex folder structures

If no duplication exists, do not abstract.

---

## 13. Output Rules for AI

- Provide the simplest working solution
- Do not give multiple alternatives unless asked
- Do not over-explain
- Avoid introducing new libraries without justification

---

## 14. Failure Prevention Rule

If a solution increases complexity:

STOP and propose a simpler alternative.

---

## Goal

Build a clean, minimal, production-ready system that can evolve without becoming complex or fragile.