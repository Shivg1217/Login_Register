import React, {useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

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

function Login() {
    const [enteredValue, setEnteredValue] = useState({
        enteredEmail: "",
        enteredPassword: ""
    })
    const OnChangeHandler = (e) => {
       setEnteredValue({...enteredValue,[e.target.name]: e.target.value})
    }
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        console.log(enteredValue);
        e.target.reset()
    }
    const [showPassword, setShowPassword] = useState(false);
    const PasswordClickHandler = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }
  return (
    <div className="loginContainer">
      <form className="form needs-validation" onSubmit={OnSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="enteredEmail"
            type="email"
            className="form-control inputFiled"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={OnChangeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="enteredPassword"
            type={showPassword ? "text" : "password"}
            className="form-control inputFiled"
            id="exampleInputPassword1"
            minLength="4" 
            maxLength="8"
            onChange={OnChangeHandler}
            required
          />
          <div className="icons"
          onClick={PasswordClickHandler}
          >
           {!showPassword && <div className="iconHide">
              <AiFillEyeInvisible />
            </div>}
            {showPassword && <div className="iconShow">
              <AiFillEye />
            </div>}
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me
          </label>
        </div>
        <div className="button">
          <button type="submit" className="btn btn-primary m-2">
            Login
          </button>
          <Link type="submit" className="btn btn-primary m-2" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
