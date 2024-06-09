import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import FlashMessage from "./FlashMessage";

const EmployeeEditForm = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("");

  // Extracting the id parameter from the URL
  const { id } = useParams();

  // State to hold form errors and form data
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    date_of_birth: "",
    date_of_hiring: "",
  });

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Effect to fetch employee data when the component mounts
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/employees/${id}`
        );
        // Set form data with the fetched employee data
        setFormData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEmployeeData();
  }, [id]); // Dependency array ensures this effect runs when id changes

  // Handler for form input changes
  const handleChange = (e) => {
    // Update form data with the new value
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigateWithFlashMessage = (path, message, type) => {
    const flashMessage = encodeURIComponent(message);
    const flashType = encodeURIComponent(type);
    const url = `${path}?flashMessage=${flashMessage}&flashType=${flashType}`;
    navigate(url);
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send PUT request to update employee data
      const response = await axios.put(
        `http://localhost:3000/api/v1/employees/${id}`,
        formData
      );
      console.log(response.data);

      setShowFlash(true);
      setFlashMessage("Employee updated successfully!");
      setFlashType("success");

      // Redirect to the details page of the edited employee
      // For updating an existing employee
      navigateWithFlashMessage(
        `/employee/${id}`,
        "Employee updated successfully!",
        "success"
      );
    } catch (error) {
      if (error.response && error.response.data) {
        // Set errors if there are validation errors from the server
        setErrors(error.response.data);

        setShowFlash(true);
        setFlashMessage("Error updating employee. Please check the form.");
        setFlashType("danger");
        console.log(errors);
      } else {
        console.error("Error:", error);
      }
    }
  };

  // Render the EmployeeForm component with relevant props
  return (
    <>
      {showFlash && <FlashMessage message={flashMessage} type={flashType} />}
      <EmployeeForm
        formData={formData}
        formTitle={"Edit Employee"}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        submitButtonTitle={"Update Employee"}
        errors={errors}
      />
    </>
  );
};

export default EmployeeEditForm;
