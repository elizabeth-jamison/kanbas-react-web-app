import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div className="row no-gutters">
      <div className="col-1" style={{width:85}}></div>
      <div className="col px-5">
        <h1 className="mt-4">Sign In</h1>
        <input className="form-control my-2" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
        <input className="form-control my-2" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        <button className="btn btn-primary" onClick={signin}> Signin </button>
      </div>
    </div>
  );
}
export default Signin;