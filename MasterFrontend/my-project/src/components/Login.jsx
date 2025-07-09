import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/api/login", { username, password });
      const { data, token } = res.data;
     console.log(res.data)
     console.log(data)
      localStorage.setItem("token", token);
      dispatch(addUser(data));
      navigate("/");
      console.log("helo")
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/api/signup", { username, password });
      const user = res.data.data || res.data.user || res.data;
      const token = res.data.token;

      if (token) {
        localStorage.setItem("token", token);
      }
      dispatch(addUser(user));
      navigate("/");
    } catch (err) {
      const message = err?.response?.data?.message || err?.response?.data || "Something went wrong";
      setError(message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body space-y-4"> {/* Use space-y-4 for clean vertical spacing */}
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

        
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              type="text"
              value={username}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              type="password"
              value={password}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

         
          {error && <p className="text-red-500 text-sm">{error}</p>}

          
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary w-35"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>

         
          <p
            className="text-center text-sm text-blue-500 hover:underline cursor-pointer"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
