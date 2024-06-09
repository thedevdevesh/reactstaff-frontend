import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// EmployeeRow component to render a single row in the employees list table
function EmployeeRow({ employee, onDelete }) {
  // Function to handle employee deletion
  const handleDelete = async () => {
    // Prompt user to confirm deletion
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    // If user confirms deletion
    if (confirmDelete) {
      try {
        // Send DELETE request to delete the employee
        await axios.delete(
          `http://localhost:3000/api/v1/employees/${employee.id}`
        );
        // Call the onDelete function passed as props to update the employee list
        onDelete(employee.id);
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    } else {
      // If user cancels deletion, do nothing
      return;
    }
  };

  return (
    <tr key={employee.id}>
      {/* Display employee name */}
      <td>{employee.full_name}</td>
      {/* Display employee email */}
      <td>{employee.email}</td>
      {/* Actions column */}
      <td>
        {/* Link to view employee details */}
        <Link to={`/employee/${employee.id}`} className="btn btn-primary">
          View
        </Link>
        {/* Link to edit employee details */}
        <Link
          to={`/employee/${employee.id}/edit`}
          className="btn btn-warning ms-1"
        >
          Edit
        </Link>
        {/* Button to delete employee */}
        <button onClick={handleDelete} className="btn btn-danger ms-1">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default EmployeeRow;
