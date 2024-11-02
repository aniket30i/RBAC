# RBAC Project

This project implements Role-Based Access Control (RBAC) using a frontend stack powered by Vite and React. The application includes charts, UI components, and more to provide a comprehensive user experience.

## Features

- **Role-Based Access Control**: Manage user permissions based on roles.
- **React Components**: Utilizes `react-bootstrap` and `react-chartjs-2` for user interface components and charts.
- **JSON Server**: Simple local REST API with `json-server` for data simulation.
- **Animations**: Powered by `framer-motion` for smooth transitions.
- **Notifications**: Includes `react-toastify` for alerts and messages.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/rbac.git
   cd rbac
2 **Install Dependencies**:
```bash
npm install

### To run the application and function properly follow the steps:
1.	Open console and run the json-server. The port is hard coded to 3080 therefore the command

```bash
npx json-server --watch src/data/employees.json –port 3080


2.	On another console run the development server : 

```bash
npm run dev


Check the package.json to ensure all dependencies being installed  


