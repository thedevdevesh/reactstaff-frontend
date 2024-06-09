import React from "react";
import { Link } from "react-router-dom";

// EmployeeForm component to render the form for adding/editing an employee
const EmployeeForm = ({
  formData,
  handleChange,
  handleSubmit,
  formTitle,
  submitButtonTitle,
  errors,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto mt-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">{formTitle}</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.first_name &&
                        errors.first_name.map((error) => (
                          <span key={error} className="text-danger">
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.last_name &&
                        errors.last_name.map((error) => (
                          <span key={error} className="text-danger">
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.email &&
                        errors.email.map((error, index) => (
                          <span key={index} className="text-danger">
                            {index > 0 && ", "}{" "}
                            {/* Add a comma with space if it's not the first error */}
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="contact_number">Contact Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="contact_number"
                        name="contact_number"
                        value={formData.contact_number}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.contact_number &&
                        errors.contact_number.map((error, index) => (
                          <span key={index} className="text-danger">
                            {index > 0 && ", "}{" "}
                            {/* Add a comma with space if it's not the first error */}
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.address &&
                        errors.address.map((error) => (
                          <span key={error} className="text-danger">
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.pincode &&
                        errors.pincode.map((error) => (
                          <span key={error} className="text-danger">
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.city &&
                        errors.city.map((error) => (
                          <span key={error} className="text-danger">
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.state &&
                        errors.state.map((error) => (
                          <span key={error} className="text-danger">
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="date_of_birth">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date_of_birth"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.date_of_birth &&
                        errors.date_of_birth.map((error) => (
                          <span key={error} className="text-danger">
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="date_of_hiring">Date of Hiring</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date_of_hiring"
                        name="date_of_hiring"
                        value={formData.date_of_hiring}
                        onChange={handleChange}
                      />
                      {errors &&
                        errors.date_of_hiring &&
                        errors.date_of_hiring.map((error) => (
                          <span key={error} className="text-danger">
                            {error}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary mt-4">
                  {submitButtonTitle}
                </button>
                {/* Link to go back */}
                <Link to={`/`} className="btn btn-primary mt-4 ms-1">
                  Back
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeForm;
