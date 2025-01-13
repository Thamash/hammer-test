# 🎯 Project Management Dashboard

This project is a test exercise for Hammer Agency, implementing a project management dashboard based on a Figma design. The application features a clean, modern interface for managing and filtering project data.

## ✨ Features

- **Project Listing**: View all projects in a paginated table format
- **Search Functionality**:
  - Search by project name
  - Search by project ID
- **Status Filtering**: Filter projects by their current status using the status dropdown
- **Responsive Design**: Implemented according to Figma specifications

## 🛠️ Tech Stack

- **Framework**: Next.js with TypeScript
- **UI Components**: Material UI
- **State Management**: Zustand
- **Data Handling**:
  - TanStack Table for table management
  - TanStack Query for data caching
- **Mock Data**: Utilizes mock data and mock client for demonstration purposes

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.17.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
mocks/              # Mock data and client
src/
├── app/           # Next.js App Router directory
├── common/         # Common data and types
├── common/         # Common data and types
├── components/     # React components
├── hooks/          # Custom hooks
├── store/          # Zustand store configurations
├── lib/            # Mock API client and Utility functions
├── config/         # Config files
└── modules/        # Modules using in pages
```

## 📜 Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm start` - Starts the production server
- `npm run lint` - Runs the linter

## 🎨 Design

The implementation follows the provided Figma design specifications. The design system implements consistent spacing, typography, and color schemes throughout the application.

## 📝 Notes

- This is a demonstration project focusing on the All Projects subpage
- The application uses mock data as there is no backend implementation
- The search and filter functionalities are fully implemented using the mock data

## 👤 Author
Thamash

## ⚖️ License

This project is part of a technical assessment for Hammer Agency.