import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import axios from "axios";
import Table from "../components/Table";
import Heading from "../components/Heading";
import { HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const res = response.data;
      setUsers(res);
      localStorage.setItem("users", JSON.stringify(res));
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          <Heading headingProps="Dashboard" />

          <div className="max-w-7xl flex flex-wrap justify-center gap-5 p-20">
            <CardComponent
              headingProp="Total Users"
              contentProps={users?.length}
            />

            <Link to="/add-user" className="max-w-64 w-full">
              <CardComponent
                headingProp="Add User"
                contentProps={<HiUserAdd className="text-3xl" />}
              />
            </Link>
          </div>

          <div className="max-w-7xl w-full mx-auto">
            <Table tableData={users} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
