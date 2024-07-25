import React, { useState } from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
// import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
  });

  const [storageDate, setStorageData] = useState(
    JSON.parse(localStorage.getItem("users"))
  );

  // const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "zipcode") {
      setFormData({
        ...formData,
        [name]: value.trim().replace(/\D/g, ""),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStorageData([...storageDate, formData]);
    // navigate("/")

  };

  console.log(storageDate);

  return (
    <div>
      <div className="flex flex-col gap-3">
        <Heading headingProps="Add Users" />
      </div>

      <div className="mt-20 w-full flex justify-center items-center">
        <form
          action=""
          className="bg-gray-100 shadow-md rounded-md w-96 h-fit py-5 px-3 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <InputField
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <InputField
            type="text"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <InputField
            type="text"
            placeholder="Enter Your Street"
            name="street"
            onChange={handleChange}
            value={formData.street}
          />
          <InputField
            type="text"
            placeholder="Enter Your City"
            name="city"
            onChange={handleChange}
            value={formData.city}
          />
          <InputField
            type="text"
            placeholder="Enter Your ZipCode"
            name="zipcode"
            onChange={handleChange}
            value={formData.zipcode}
            maxLength={10}
          />

          <button
            className="bg-indigo-500 py-3 px-10 mx-auto rounded-md w-fit text-white hover:bg-indigo-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
