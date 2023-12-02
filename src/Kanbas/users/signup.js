import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: ""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/account/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="row">
      <div className="col-1" style={{ width: 85 }}></div>
      <div className="col-1 mx-4 mt-3" >
                <div className="list-group">
                    <Link to="/Kanbas/account/signin" className="links"><div className="list-group-item">Sign In</div></Link>
                    <Link to="/Kanbas/account/signup" className="links"><div className="list-group-item">Sign Up</div></Link>
                    <Link to="/Kanbas/account" className="links"><div className="list-group-item">Account</div></Link>
                </div>
            </div>
      <div className="col mx-3 mt-3">
        <h1>Signup</h1>
        {error && <div className="card px-2 py-2 bg-danger my-2" style={{color:"white"}}>{error}</div>}
          <input
            className="form-control me-2 my-2"
            value={credentials.username}
            placeholder="Username"
            onChange={(e) => setCredentials({
              ...credentials,
              username: e.target.value
            })} />
            <input
            className="form-control" 
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({
              ...credentials,
              password: e.target.value
            })} />
        <button className="btn btn-primary my-3" onClick={signup}>
          Signup
        </button>
      </div>

    </div>
  );
}
export default Signup;