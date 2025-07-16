import React from 'react';

const UserTable = ({ users, handleEdit, handleDelete }) => {
    return (
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length ? users.map(user => (
                    <tr key={user.id}>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                            {user.role}
                        </td>
                        <td>
                            <button onClick={() => handleEdit(user)}>Edit</button>
                            <button onClick={() => handleDelete(user.id)} style={{ marginLeft: "10px" }}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="4">No users found!</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserTable;