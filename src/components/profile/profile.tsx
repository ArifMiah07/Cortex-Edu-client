"use client";

import useUserStore, { IUser } from "@/stores/useStore";

export default function Profile() {
  const { user, setUser } = useUserStore();
  const handleLogin = () => {
    // Simulate a login process
    const newUser: IUser = { name: "John Doe", email: "john.doe@example.com" };
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
