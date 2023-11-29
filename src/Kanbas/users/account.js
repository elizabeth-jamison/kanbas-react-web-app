import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {

    }
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    useEffect(() => {
        fetchAccount();
    }, []);
    return (
        <div className="row no-gutters">
            <div className="col-1" style={{ width: 85 }}></div>
            <div className="col">
                <div className="w-50 mt-2 mx-3">
                    <h1>Account</h1>
                    {account && (
                        <div>
                            <input value={account.password}
                                onChange={(e) => setAccount({
                                    ...account,
                                    password: e.target.value
                                })} />
                            <input value={account.firstName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    firstName: e.target.value
                                })} />
                            <input value={account.lastName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    lastName: e.target.value
                                })} />
                            <input value={account.dob}
                                onChange={(e) => setAccount({
                                    ...account,
                                    dob: e.target.value
                                })} />
                            <input value={account.email}
                                onChange={(e) => setAccount({
                                    ...account,
                                    email: e.target.value
                                })} />
                            <select onChange={(e) => setAccount({
                                ...account,
                                role: e.target.value
                            })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </div>
                    )}
                    <button className="btn btn-primary w-100 my-2" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger w-100 my-2" onClick={signout}>
                        Signout
                    </button>
                    <Link to="/Kanbas/admin/users" className="btn btn-warning w-100 my-2">
                        Users
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Account;