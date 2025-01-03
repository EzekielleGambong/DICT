import React, { useEffect, useState } from "react";
import { fetchAdminData } from "../services/api";
import axios from "axios";

function AdminDashboard() {
  const [adminData, setAdminData] = useState(null);
  const [formData, setFormData] = useState({
    lgu: "",
    nameOfAttractions: "",
    openingHours: "",
    closingHours: "",
    typeOfAttractions: "",
    category: "",
    address: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
    description: "",
    locationCoordinates: "",
    entranceFee: "",
    additionalFee: "",
    province: "",
    link: "",
  });

  useEffect(() => {
    const loadAdminData = async () => {
      try {
        const { data } = await fetchAdminData();
        setAdminData(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadAdminData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/touristspots/add", formData);
      alert("Attraction added successfully!");
      setFormData({
        lgu: "",
        nameOfAttractions: "",
        openingHours: "",
        closingHours: "",
        typeOfAttractions: "",
        category: "",
        address: "",
        contactPerson: "",
        contactNumber: "",
        email: "",
        description: "",
        locationCoordinates: "",
        entranceFee: "",
        additionalFee: "",
        link: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add attraction.");
    }
  };

  if (!adminData) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 mb-6">{adminData.message}</p>
        <button 
          onClick={handleLogout} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Add New Attraction</h2>
        <form 
          onSubmit={handleSubmit} 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="lgu"
            placeholder="LGU"
            value={formData.lgu}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="nameOfAttractions"
            placeholder="Name of Attraction"
            value={formData.nameOfAttractions}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="openingHours"
            placeholder="Opening Hours"
            value={formData.openingHours}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="closingHours"
            placeholder="Closing Hours"
            value={formData.closingHours}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="typeOfAttractions"
            placeholder="Type of Attraction"
            value={formData.typeOfAttractions}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="province"
            placeholder="Province"
            value={formData.province}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            value={formData.contactPerson}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-1 md:col-span-2"
            required
          />
          <input
            type="text"
            name="locationCoordinates"
            placeholder="Location Coordinates"
            value={formData.locationCoordinates}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            name="entranceFee"
            placeholder="Entrance Fee"
            value={formData.entranceFee}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="additionalFee"
            placeholder="Additional Fee"
            value={formData.additionalFee}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={formData.link}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-1 md:col-span-2"
            required
          />
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition col-span-1 md:col-span-2"
          >
            Add Attraction
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
