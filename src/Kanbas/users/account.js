import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import './index.css';
function Account() {
    const { username } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const findUserByUsername = async (username) => {
        const user = await client.findUserByUsername(username);
        setAccount(user);
    };

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const save = async () => {
        await client.updateUser(account);
    }

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/account/signin");
    };

    useEffect(() => {
        console.log("username: " + username);
        if (username) {
            findUserByUsername(username);
        } else {
            fetchAccount();
        }
    }, []);

    return (
        <div className="row no-gutters">
            <div className="col-1" style={{ width: 85 }}></div>
            <div className="col-1 mx-4 mt-3" >
                <div className="list-group">
                    <Link to="/Kanbas/account/signin" className="links"><div className="list-group-item">Sign In</div></Link>
                    <Link to="/Kanbas/account/signup" className="links"><div className="list-group-item">Sign Up</div></Link>
                    <Link to="/Kanbas/account" className="links"><div className="list-group-item">Account</div></Link>
                </div>
            </div>
            <div className="col">
                <div className="mt-4 mx-3">
                    <h1>Account</h1>
                    {account && (
                        <div>
                            <lable className="my-2"> Password:
                                <input
                                    className="form-control"
                                    value={account.password}
                                    onChange={(e) => setAccount({
                                        ...account,
                                        password: e.target.value
                                    })} />
                            </lable>
                            <div className="my-2"></div>
                            <lable className="my-2"> First Name:
                                <input
                                    className="form-control"
                                    value={account.firstName}
                                    onChange={(e) => setAccount({
                                        ...account,
                                        firstName: e.target.value
                                    })} />
                            </lable>
                            <div className="my-2"></div>
                            <lable className="my-2"> Last Name:
                                <input
                                    className="form-control"
                                    value={account.lastName}
                                    onChange={(e) => setAccount({
                                        ...account,
                                        lastName: e.target.value
                                    })} />
                            </lable>
                            <div className="my-2"></div>
                            <lable className="my-2"> Birthday:
                                <input value={account.dob}
                                    className="form-control"
                                    // type="date"
                                    onChange={(e) => setAccount({
                                        ...account,
                                        dob: e.target.value
                                    })} />
                            </lable>
                            <div className="my-2"></div>
                            <lable className="my-2"> Email:
                                <input value={account.email}
                                    className="form-control"
                                    onChange={(e) => setAccount({
                                        ...account,
                                        email: e.target.value
                                    })} />
                            </lable>
                            <div className="my-2"></div>
                            <lable className="my-2"> Role:
                                <select className="form-control my-2"
                                    onChange={(e) => setAccount({
                                        ...account,
                                        role: e.target.value
                                    })}>

                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="FACULTY">Faculty</option>
                                    <option value="STUDENT">Student</option>
                                </select>
                            </lable>
                        </div>
                    )}
                    <button className="btn btn-primary w-100 my-2" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger w-100 my-2" onClick={signout}>
                        Signout
                    </button>

                    <Link to="/Kanbas/account/admin/users" className="btn btn-warning w-100 my-2">
                        Users
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Account;