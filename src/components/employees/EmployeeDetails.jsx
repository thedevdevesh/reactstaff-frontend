import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom"; // Importing useParams hook to access URL parameters
import axios from "axios";
import FlashMessage from "./FlashMessage";

function EmployeeDetails() {
  const { id } = useParams(); // Accessing the id parameter from the URL using useParams hook
  const [employee, setEmployee] = useState(null); // State variable to hold employee details
  const [loading, setLoading] = useState(true); // State variable to track loading state
  const location = useLocation();
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        // Fetch employee details from the API using the id parameter
        const response = await axios.get(
          `http://localhost:3000/api/v1/employees/${id}`
        );
        setEmployee(response.data); // Set the fetched employee data
        setLoading(false); // Set loading state to false once data is fetched
      } catch (error) {
        console.error("Error fetching employee details:", error);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchEmployee(); // Call fetchEmployee function when component mounts or id parameter changes
  }, [id]); // Dependency array ensures the effect runs when id changes

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("flashMessage");
    const type = searchParams.get("flashType");
    if (message && type) {
      setFlashMessage(message);
      setFlashType(type);
    }
  }, [location.search]);

  // If loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If employee is null (not found), display a message
  if (!employee) {
    return <div>Employee not found</div>;
  }

  // Render employee details if employee is found
  return (
    <div className="container">
      {flashMessage && <FlashMessage message={flashMessage} type={flashType} />}
      <div className="row">
        <div className="col-lg-8 mx-auto mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Employee Details</h5>
              <div className="card-text">
                {/* Display employee details */}
                <p>
                  <strong>Name:</strong> {employee.full_name}
                </p>
                <p>
                  <strong>Email:</strong> {employee.email}
                </p>
                <p>
                  <strong>Contact Number:</strong> {employee.contact_number}
                </p>
                <p>
                  <strong>Address:</strong> {employee.address}
                </p>
                <p>
                  <strong>Pincode:</strong> {employee.pincode}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {employee.date_of_birth}
                </p>
                <p>
                  <strong>Date of Hiring:</strong> {employee.date_of_hiring}
                </p>
              </div>
              {/* Link to navigate back to the employees list */}
              <Link to={`/`} className="btn btn-primary">
                Employees List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
