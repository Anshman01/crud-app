import React from 'react';

const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "UI/UX Designer",
    "QA Engineer",
    "Mobile App Developer",
    "System Administrator",
    "Technical Project Manager",
    "Product Manager",
    "Security Analyst",
    "Cloud Architect",
    "Database Administrator",
]

const RoleDD = ({ value, onChange}) => {
    return (
        <select name="role" value={value} onChange={onChange}>
            <option value="">Select Role</option>
            {roles.map((role, idx) => (
                <option key={idx} value={role}>
                    {role}
                </option>
            ))}
        </select>
    );
};

export default RoleDD
