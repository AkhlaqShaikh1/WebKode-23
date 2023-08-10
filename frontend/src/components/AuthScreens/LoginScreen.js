import { useState } from "react";
import axios from "axios";
import "../../Css/Login.css"
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {toast} from 'react-toastify'
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()


  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4500/api/user/login",
        { email, password }
      );
      console.log(data)
      // console.log(data)
      localStorage.setItem("authToken", data.token);
        toast.success("Logged in Success")
      setTimeout(() => {

        navigate("/blog")

      }, 1800)

    } catch (error) {
      setError(error.response.data.error);
      toast.error("Check Credentials")
      setTimeout(() => {
        setError("");
      }, 4500);

    }
  };

  return (

    <div className="Inclusive-login-page">

      <div className="login-big-wrapper">

        <div className="section-wrapper">
        <Link to={'/blog'}>
                <FiArrowLeft />
            </Link>
          <div className="top-login-explain">
            <h2>Login to Your Account </h2>

            <p>
              Please Login Your Account, Thank You!
            </p>


          </div>


          <form onSubmit={loginHandler} >
            {error && <div className="error_message">{error}</div>}
            <div className="input-wrapper">
              <input
                type="email"
                required
                id="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                tabIndex={1}
              />
              <label htmlFor="email">E-mail</label>

            </div>
            <div className="input-wrapper">

              <input
                type="password"
                required
                id="password"
                autoComplete="true"
                placeholder="6+ strong character"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}
              />
              <label htmlFor="password">
                Password

              </label>
            </div>
            
            <button type="submit" >
              Login
            </button>

          </form>
        </div>

      </div>


    </div>


  );
};

export default LoginScreen;