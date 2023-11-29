import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaPlusCircle, FaTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
function UserTable() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };
    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };
    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
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
                                    <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                                </td>
                                <td>
                                    <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                                </td>
                                <td>
                                    <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                                </td>
                                <td>
                                    <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                        <option value="FACULTY">Faculty</option>
                                        <option value="STUDENT">Student</option>
                                    </select>
                                </td>
                                <td>
                                    <FaPlusCircle onClick={createUser} className="me-2 fs-1 text-primary" />
                                    <FaCheckCircle onClick={updateUser}
                                        className="me-2 text-success fs-1 text" />
                                </td>


                            </tr>
                        </thead>
                        <tbody>
                            {/* {users.map((user) => (
                                <tr key={user._id}>
                                <td>{user.username}</td>
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
                                </tr>))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default UserTable;