import React, { useState, useEffect } from "react";
import { useStore } from "../store";
import Link from "next/link";

const UserList: React.FC = () => {
  const { users, fetchUsers } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.lastname.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="space-y-2">
        {filteredUsers.map((user) => (
          <li key={user.id} className="hover:bg-gray-100 p-2 rounded">
            <Link href={`/user/${user.id}`}>
              {`${user.name.firstname} ${user.name.lastname}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
