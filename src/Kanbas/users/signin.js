import * as client from "./client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate(`/Kanbas/account`);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="row no-gutters">
      <div className="col-1" style={{width:85}}></div>
      <div className="col-1 mx-4 mt-3" >
                <div className="list-group">
                    <Link to="/Kanbas/account/signin" className="links"><div className="list-group-item">Sign In</div></Link>
                    <Link to="/Kanbas/account/signup" className="links"><div className="list-group-item">Sign Up</div></Link>
                    <Link to="/Kanbas/account" className="links"><div className="list-group-item">Account</div></Link>
                </div>
            </div>
      <div className="col">
        <h1 className="mt-4">Sign In</h1>
        {error && <div className="card px-2 py-2 bg-danger" style={{color:"white"}}>{error}</div>}
        <input className="form-control my-2" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
        <input className="form-control my-2" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        <button className="btn btn-primary" onClick={signin}> Signin </button>
      </div>
    </div>
  );
}
export default Signin;