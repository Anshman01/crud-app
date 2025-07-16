import React from 'react';
import RoleDD from './RoleDD'

const UserForm = ({ form, setForm, handleSubmit, editID }) => {
    const handleChange = (e) => { 
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        });
    };

    if (!form) return null;

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={form.name}
              onChange={handleChange}
            />

            <input 
              type='text'
              name='email'
              placeholder='Email'
              value={form.email}
              onChange={handleChange}
            />

            <RoleDD value={form.role} onChange={handleChange} />


            <button type="submit">{editID ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default UserForm;