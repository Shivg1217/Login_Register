import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Register.css";

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function Register() {
    const [enteredValue, setEnteredValue] = useState({
        enteredName: "",
        enteredEmail: "",
        entereContact: "",
        enteredPassword: ""
    })
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        console.log(enteredValue);
        e.target.reset();
    }
    const OnInputChangeHandler = (e) => {
        setEnteredValue({...enteredValue,[e.target.name]: e.target.value});
    }
  return (
    <div className="loginContainer">
      <form className="form needs-validation" onSubmit={OnSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="validationCustom01" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control inputFiled"
            id="validationCustom01"
            name="enteredName"
            onChange={OnInputChangeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control inputFiled"
            id="exampleInputEmail1"
            name="enteredEmail"
            onChange={OnInputChangeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputContact" className="form-label">
            Contact
          </label>
          <input
            type="contact"
            className="form-control inputFiled"
            id="exampleInputContact"
            aria-describedby="contactHelp"
            name="entereContact"
            onChange={OnInputChangeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control inputFiled"
            id="exampleInputPassword1"
            name="enteredPassword"
            onChange={OnInputChangeHandler}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            require
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me
          </label>
        </div>
        <div className="button">
          <button type="submit" className="btn btn-primary m-2">
            Register
          </button>
          <Link type="submit" className="btn btn-danger m-2" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
