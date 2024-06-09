import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EmployeeRow from "./EmployeeRow";
import Pagination from "../shared/Pagination";
import SearchBar from "./SearchBar";

function EmployeeList() {
  // State variables
  const [employees, setEmployees] = useState([]); // Holds the list of employees
  const [currentPage, setCurrentPage] = useState(0); // Keeps track of the current page
  const [searchTerm, setSearchTerm] = useState(""); // Holds the search term entered by the user
  const itemsPerPage = 10; // Number of items to display per page

  // Function to handle page changes
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Function to handle employee deletion
  const handleDelete = (deletedId) => {
    setEmployees(employees.filter((employee) => employee.id !== deletedId));
  };

  // Effect hook to fetch employees from the API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/employees"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []); // Empty dependency array ensures it runs only once on component mount

  // Function to handle search input change
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(0); // Reset current page when search term changes
  };

  // Filter function to match employee names based on search term
  const filterEmployees = (employee) => {
    return employee.full_name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  // Calculate start and end index for pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Filter and paginate the employees based on search term and current page
  const displayedEmployees = employees
    .filter(filterEmployees)
    .slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          {/* Link to create new employee */}
          <Link to={`/employee/new`} className="btn btn-primary my-3">
            Create New Employee
          </Link>

          {/* Search bar */}
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />

          {/* Title */}
          <h1 className="text-center">Employees List</h1>

          {/* Table to display employees */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th colSpan="3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over displayed employees to render rows */}
              {displayedEmployees.map((employee) => (
                <EmployeeRow
                  key={employee.id}
                  employee={employee}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>

          {/* Pagination component */}
          <Pagination
            pageCount={Math.ceil(employees.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
