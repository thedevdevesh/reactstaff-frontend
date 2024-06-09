import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/employees/EmployeeList";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import EmployeeNewForm from "./components/employees/EmployeeNewForm";
import EmployeeEditForm from "./components/employees/EmployeeEditForm";

function App() {
  return (
    <Router>
      {/* The Routes component defines the routes for the application */}
      <Routes>
        {/* Route for the homepage, rendering the EmployeeList component */}
        <Route path="/" element={<EmployeeList />} />
        {/* Route for viewing employee details, rendering the EmployeeDetails component */}
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        {/* Route for creating a new employee, rendering the EmployeeNewForm component */}
        <Route path="/employee/new" element={<EmployeeNewForm />} />
        {/* Route for editing an existing employee, rendering the EmployeeEditForm component */}
        <Route path="/employee/:id/edit" element={<EmployeeEditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
