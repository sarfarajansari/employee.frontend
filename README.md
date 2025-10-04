# Verto — Employee Frontend

This is the frontend application for the Verto employee management demo. It's a small React + TypeScript single-page app built with Vite that communicates with a backend REST API to list, create, update and delete employees.

Backend repository: https://github.com/sarfarajansari/employee.backend

Key Frontend features

1. Display all employees
2. Provide a form to add a new employee.
3. Include buttons to "Edit" and "Delete" each employee in the list.  (delete button is present in the view emplyee section)
4. Editing can be done via a modal
5. Search bar to search for employees 
6. form validation
7. Axios for API calls, Ant Design (antd) for basic UI primitives and styled-components for component styling

Key backend features

1. CRUD APIs for employee
2. SQLite db to store data
3.  100% test coverage & data validation

## Quick start

Requirements: Node.js 18+ and npm (or yarn).

Clone, install and run the backend and frontend:

```bash
# clone repos
git clone https://github.com/sarfarajansari/employee.backend.git
git clone https://github.com/sarfarajansari/employee.frontend.git

# start the backend (terminal 1)
cd employee.backend
npm install
npm run dev

# start the frontend (terminal 2)
cd ../employee.frontend
npm install
npm run dev
```

Open http://localhost:5173 (or the port Vite prints) in your browser.


## Assumptions & design choices

Below are the main assumptions and design choices I made while building this

- State management
  - Choice: local React state with `useState` / `useMemo` in `employees.tsx`. Trade-off: simple and easy to reason about for this small app. Alternative: React Context, Redux, or React Query for caching and background refetching; these would be preferable if the app grows or needs advanced cache/invalidation.

- Data fetching
  - Choice: a thin `EmployeeService` wrapper around Axios. Trade-off: explicit API calls and full control over requests. Alternative: use React Query / SWR which provide caching, retries, and built-in loading/error handling.

- UI toolkit & styling
  - Choice: Ant Design components for inputs/buttons and `styled-components` for scoped styles. Trade-off: AntD speeds up building polished controls; `styled-components` offers component-scoped styles with dynamic props. Alternatives: Material UI, Tailwind, CSS Modules, or plain CSS/Sass. 

- Forms & validation
  - Choice: small, manual required-field validation inside the form component. Trade-off: minimal dependencies and simple UX.

- Modals & portals
  - Choice: forms and some views render into a portal (`ReactDOM.createPortal`) for predictable overlay behavior. Alternative: use AntD's Modal component or an in-tree modal; portals help avoid stacking/context issues but require a root element.


- Operational assumptions
  - No authentication is implemented in the client 


## Project structure (important files)

Top-level:
- `package.json` — scripts and dependencies
- `vite.config.ts` — Vite configuration
- `tsconfig*.json` — TypeScript configs

src/ (main application code):
- `main.tsx` — React entry point
- `App.tsx` — root component that composes the header and employee list
- `connector/apiClient.ts` — Axios instance configured with `VITE_API_URL`
- `models/employee.model.ts` — TypeScript `Employee` interface
- `services/employeeService.ts` — small service wrapping API calls (CRUD)
- `components/` — React components grouped by feature
  - `header/` — app header (logo)
  - `employeeList/` — main list view, search, and employee cards
  - `employeeForm/` — add/update employee forms and form styles
  - `employeeView/` — employee details and delete confirmation
  - `helper/` — shared UI helpers like modal, visibility wrapper, icons

Styling: a mixture of `styled-components` for component-scoped styles and Ant Design components for inputs, buttons and layout primitives.

## Architecture and data flow

- The app keeps state locally using React `useState` and `useMemo` in `employees.tsx` (no global state library).
- `EmployeeService` encapsulates HTTP calls to the backend. It returns typed results using the `Employee` interface.
- Forms (`employeeForm`) validate basic required fields on the client side, then call the service to persist data.
- Components communicate via props and callback handlers (e.g., `refreshList`, `setSelectedEmployee`).

## Key components and responsibilities

- `src/components/employeeList/employees.tsx`
  - Main page for viewing employees. Handles fetching the list, search filtering, loading states and opening modals for add/edit/view.
- `src/components/employeeList/employeeCard/employeeCard.tsx`
  - Renders a single employee, exposes edit/view actions.
- `src/components/employeeForm/formComponent/employeeForm.tsx`
  - Reusable form UI used for both add and update flows. Runs simple required-field validation and calls `handleSubmit`.
- `src/connector/apiClient.ts`
  - Configured Axios instance. Uses `VITE_API_URL` and sets `Content-Type: application/json`.
- `src/services/employeeService.ts`
  - Provides `createEmployee`, `updateEmployee`, `deleteEmployee`, `getEmployee`, `getAllEmployees`.



