import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table = ({ tableData }) => {


  const [tableDataMap, setTableDataMap] = useState([])
  const localData = JSON.parse(localStorage.getItem("users"))
    const handleDelete = (id) => {


      setTableDataMap(localData?.filter ((data) => data.id !== id))
    }

    console.log(tableDataMap)

  return (
    <>
      <table className="max-w-7xl w-full border-separate border-spacing-y-2  table-auto lg:table-fixed overflow-scroll">
        <thead>
          <tr className="font-bold capitalize">
            <td>Sr.No</td>
            <th>Name</th>
            <th>Email</th>
            <th>street</th>
            <th>City</th>
            <th>zipCode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData && (
            <>
              {tableData.map((user) => (
                <tr
                  key={user.id}
                  className="*:text-center even:bg-gray-300 odd:bg-gray-400 *:py-3"
                >
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street || user.street}</td>
                  <td>{user.address.city || user.city}</td>
                  <td>{user.address.zipcode || user.zipcode}</td>
                  <div className="flex gap-3 justify-center items-center *:cursor-pointer">
                    <Link to={`/edit/${user.id}`} state={{user}}>
                      {" "}
                      <td className="text-indigo-500">Edit</td>
                    </Link>
                    <td className="text-red-500" onClick={() => handleDelete(user.id)}>Delete</td>
                  </div>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
