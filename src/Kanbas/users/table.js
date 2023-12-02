import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as client from "./client";
import { FaPlusCircle, FaTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
function UserTable() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
            setUser({ username: "", password: "", firstName: "", lastName: "", role: "USER" });
        } catch (err) {
            setError(err);
        }
    };
    const selectUser = async (user) => {
        try {
            console.log("user: " + JSON.stringify(user));
            const u = await client.findUserByUsername(user.username);
            setUser(u);
        } catch (err) {
            setError(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
            setUser({ username: "", password: "", firstName: "", lastName: "", role: "USER" });
        } catch (err) {
            setError(err);
        }
    };
    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            setError(err);
        }
    };


    useEffect(() => { fetchUsers(); }, []);
    return (
        <div className="row no-gutters">
            <div className="col-1" style={{ width: 85 }}></div>
            <div className="col mx-3 mt-2">
                <div>
                    <h1>User List</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex">
                                        <input className="form-control me-2" placeholder="Username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                                        <input className="form-control " placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    </div>
                                </td>
                                <td>
                                    <input className="form-control " placeholder="First Name" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                                </td>
                                <td>
                                    <input className="form-control " placeholder="Last Name" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                                </td>
                                <td>
                                    <select value={user.role} 
                                        className="form-control mt-0"
                                        onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                        <option value="FACULTY">Faculty</option>
                                        <option value="STUDENT">Student</option>
                                    </select>
                                </td>
                                <td>
                                    <FaPlusCircle onClick={createUser} className="me-2 fs-1  mt-0 text-primary" />
                                    <FaCheckCircle onClick={updateUser}
                                        className="me-2 text-success fs-1 text" />
                                </td>


                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                <td>        
                                    <Link style={{textDecoration:"none"}} to={`/Kanbas/account/${user.username}`}>
                                    {user.username}
                                    </Link>
                                    </td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td className="text-nowrap">
                                    <button className="btn btn-danger me-2">
                                        <FaTrashAlt onClick={() => deleteUser(user)} />
                                    </button>
                                    <button className="btn btn-warning me-2">
                                        <FaPencilAlt onClick={() => selectUser(user)} />
                                    </button>
                                </td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default UserTable;