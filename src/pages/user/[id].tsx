import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useStore } from "../../store";

const UserDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { users } = useStore();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id && users.length > 0) {
      const foundUser = users.find((u) => u.id === Number(id));
      setUser(foundUser);
    }
  }, [id, users]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-2">{`${user.name.firstname} ${user.name.lastname}`}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Address</h3>
        <p>
          {user.address.street}, {user.address.city}
        </p>
        <p>{user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserDetails;
