import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import UserForm from "./Components/UserForm";
import UserTable from "./Components/UserTable";
import SearchBar from "./Components/Search";
import "react-toastify/dist/ReactToastify.css";

const API_url = "/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [editID, setEditID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (query) => {
  setSearch(query);

  const filtered = users.filter((user) =>
    `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    toast.info("No records found!");
  }

  setFilteredUsers(filtered);
  };

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const res = await axios.get(API_url);
      console.log("Fetched users: ", res.data);
      setUsers(res.data);
      setFilteredUsers(res.data);
    } catch (err) {
      toast.error("Failed to fetch users");
    } finally {
    setLoading(false);
    }
  };

  const validateForm = () => {
    const { name, email, role } = form;
    if (!name || !email || !role) {
      toast.error("All fields are required");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (editID) {
        await axios.put(`${API_url}/${editID}`, form);
        toast.success("User updated");
      } else {
        await axios.post(API_url, form);
        toast.success("User created");
      }
      fetchUsers();
      setForm({ name: "", email: "", role: "" });
      setEditID(null);
    } catch (error) {
      console.error("Save error:", error.response?.data || error.message);
      toast.error("Error saving user");
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, role: user.role });
    setEditID(user.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      await axios.delete(`${API_url}/${id}`);
      toast.success("User deleted");
      fetchUsers();
    } catch {
      toast.error("Error deleting user");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User Management</h2>

      <SearchBar 
        value={search}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />

      <UserForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        editID={editID}
      />

      {loading ? (
        <ClipLoader />
      ) : (
        <UserTable
          users={filteredUsers}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
