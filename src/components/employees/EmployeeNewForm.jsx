import React, { useState } from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import { useNavigate } from "react-router-dom";
import FlashMessage from "./FlashMessage";

const EmployeeNewForm = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("");

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
      // Send POST request to create a new employee
      const response = await axios.post(
        "http://localhost:3000/api/v1/employees",
        formData
      );
      console.log(response.data);
      const newEmployeeId = response.data.id;
      // Redirect to the details page of the newly created employee
      // For creating a new employee
      navigateWithFlashMessage(
        `/employee/${newEmployeeId}`,
        "Employee created successfully!",
        "success"
      );
      // Optionally, you can reset the form after successful submission
      // setFormData({
      //   first_name: "",
      //   last_name: "",
      //   email: "",
      //   contact_number: "",
      //   address: "",
      //   pincode: "",
      //   city: "",
      //   state: "",
      //   date_of_birth: "",
      //   date_of_hiring: "",
      // });
    } catch (error) {
      if (error.response && error.response.data) {
        // Set errors if there are validation errors from the server
        setErrors(error.response.data);
        setShowFlash(true);
        setFlashMessage("Error creating employee. Please check the form.");
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
        formTitle={"Create New Employee"}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        submitButtonTitle={"Create Employee"}
        errors={errors}
      />
    </>
  );
};

export default EmployeeNewForm;
