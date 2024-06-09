import React, { useEffect } from "react";

const FlashMessage = ({ message, type }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Hide or remove the flash message here
      const flashMessageElement = document.querySelector(".alert-dismissible");
      if (flashMessageElement) {
        flashMessageElement.classList.remove("show");
      }
    }, 3000); // Adjust the timeout duration as needed (e.g., 3000 milliseconds for 3 seconds)

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default FlashMessage;
